import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { profile } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import { useReveal } from "../hooks/useReveal";


const EMAILJS_SERVICE_ID = "service_y62bw9l";
const EMAILJS_TEMPLATE_AUTOREPLY = "template_0zv04uc";
const EMAILJS_TEMPLATE_OWNER = "template_8evn0vd";
const EMAILJS_PUBLIC_KEY = "jqspvP2h5aCoFAHwo";



const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export const Contact = () => {
    const ref = useReveal();
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [sending, setSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
        if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
    };

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = "Please enter your name";
        if (!form.email.trim()) e.email = "Email is required";
        else if (!isValidEmail(form.email)) e.email = "Enter a valid email";
        if (!form.subject.trim()) e.subject = "Add a subject";
        if (!form.message.trim()) e.message = "Write a short message";
        else if (form.message.trim().length < 10)
            e.message = "Message should be at least 10 characters";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("ENV CHECK:", {
        service: EMAILJS_SERVICE_ID,
        owner: EMAILJS_TEMPLATE_OWNER,
        auto: EMAILJS_TEMPLATE_AUTOREPLY,
        key: EMAILJS_PUBLIC_KEY
    });

    if (!validate()) {
        toast.error("Please fix the highlighted fields.");
        return;
    }
    if (
        !EMAILJS_SERVICE_ID ||
        !EMAILJS_TEMPLATE_AUTOREPLY ||
        !EMAILJS_TEMPLATE_OWNER ||
        !EMAILJS_PUBLIC_KEY
    ) {
        toast.error("Email service is not configured.");
        return;
    }

        setSending(true);
        try {
            // Shared params used by both templates
            const sharedParams = {
                name: form.name,
                from_name: form.name,
                from_email: form.email,
                subject: form.subject,
                message: form.message,
            };

            // 1) Owner notification → goes to Ian (recipient = profile.email)
            const ownerSend = emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_OWNER,
                {
                    ...sharedParams,
                    email: profile.email,
                    to_email: profile.email,
                    user_email: profile.email,
                    recipient: profile.email,
                    owner_email: profile.email,
                    to: profile.email,
                    reply_to: form.email,
                },
                { publicKey: EMAILJS_PUBLIC_KEY }
            );

            // 2) Auto-reply → goes to the visitor (recipient = form.email)
            const autoReplySend = emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_AUTOREPLY,
                {
                    ...sharedParams,
                    email: form.email,
                    to_email: form.email,
                    user_email: form.email,
                    recipient: form.email,
                    to: form.email,
                    reply_to: profile.email,
                },
                { publicKey: EMAILJS_PUBLIC_KEY }
            );

            // Owner notification is critical; auto-reply is best-effort
            await ownerSend;
            autoReplySend.catch((err) => {
                console.warn("Auto-reply failed (non-blocking):", err);
            });

            toast.success(
                "Message sent — check your inbox for a confirmation."
            );
            setForm({ name: "", email: "", subject: "", message: "" });
            setErrors({});
        } catch (err) {
            const detail =
                err?.text || err?.message || "Please try again later.";
            toast.error(`Failed to send: ${detail}`);
        } finally {
            setSending(false);
        }
    };

    const items = [
        {
            icon: Mail,
            label: "Email",
            value: profile.email,
            href: `mailto:${profile.email}`,
            test: "contact-email",
        },
        {
            icon: Phone,
            label: "Phone",
            value: profile.phone,
            href: `tel:${profile.phone}`,
            test: "contact-phone",
        },
        {
            icon: MapPin,
            label: "Location",
            value: profile.location,
            href: null,
            test: "contact-location",
        },
    ];

    const inputClass = (key) =>
        `w-full px-4 py-3 rounded-xl bg-navy/60 border text-white placeholder:text-slate-500 text-sm transition-colors ${
            errors[key]
                ? "border-red-400/70"
                : "border-navy-border"
        }`;

    return (
        <section
            id="contact"
            className="relative py-24 md:py-32 bg-navy"
            data-testid="contact-section"
        >
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <SectionHeader
                    kicker="Get In Touch"
                    title="Contact Me"
                    lead="Interested in working together? Feel free to reach out!"
                />

                <div ref={ref} className="reveal-up grid lg:grid-cols-5 gap-8">
                    {/* Left: Contact info */}
                    <div className="lg:col-span-2 space-y-4">
                        {items.map(({ icon: Icon, label, value, href, test }) => {
                            const inner = (
                                <div className="rounded-2xl border border-navy-border bg-navy-card p-5 md:p-6 hover:border-cyan/50 transition-colors flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center shrink-0">
                                        <Icon
                                            size={20}
                                            className="text-cyan"
                                            strokeWidth={2.2}
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-xs uppercase tracking-widest text-slate-400 mb-1">
                                            {label}
                                        </div>
                                        <div className="text-white font-medium truncate">
                                            {value}
                                        </div>
                                    </div>
                                </div>
                            );
                            return href ? (
                                <a
                                    key={label}
                                    href={href}
                                    data-testid={test}
                                    className="block"
                                >
                                    {inner}
                                </a>
                            ) : (
                                <div key={label} data-testid={test}>
                                    {inner}
                                </div>
                            );
                        })}
                    </div>

                    {/* Right: Form */}
                    <form
                        onSubmit={handleSubmit}
                        noValidate
                        className="lg:col-span-3 rounded-2xl border border-navy-border bg-navy-card p-7 md:p-9"
                        data-testid="contact-form"
                    >
                        <h3 className="font-display font-bold text-white text-xl mb-2">
                            Send Message
                        </h3>
                        <div className="h-px bg-gradient-to-r from-cyan/60 via-cyan/20 to-transparent mb-6" />

                        <div className="grid sm:grid-cols-2 gap-5 mb-5">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-xs uppercase tracking-widest text-slate-400 mb-2"
                                >
                                    Your Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={form.name}
                                    onChange={handleChange}
                                    className={inputClass("name")}
                                    placeholder="Jane Doe"
                                    data-testid="contact-input-name"
                                />
                                {errors.name && (
                                    <p className="mt-1.5 text-xs text-red-400">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-xs uppercase tracking-widest text-slate-400 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className={inputClass("email")}
                                    placeholder="jane@company.com"
                                    data-testid="contact-input-email"
                                />
                                {errors.email && (
                                    <p className="mt-1.5 text-xs text-red-400">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="subject"
                                className="block text-xs uppercase tracking-widest text-slate-400 mb-2"
                            >
                                Subject
                            </label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                value={form.subject}
                                onChange={handleChange}
                                className={inputClass("subject")}
                                placeholder="IT support inquiry"
                                data-testid="contact-input-subject"
                            />
                            {errors.subject && (
                                <p className="mt-1.5 text-xs text-red-400">
                                    {errors.subject}
                                </p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="block text-xs uppercase tracking-widest text-slate-400 mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                value={form.message}
                                onChange={handleChange}
                                className={`${inputClass("message")} resize-none`}
                                placeholder="Tell me about your project or how I can help..."
                                data-testid="contact-input-message"
                            />
                            {errors.message && (
                                <p className="mt-1.5 text-xs text-red-400">
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={sending}
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-cyan text-navy font-semibold text-sm hover:bg-cyan-glow transition-all hover:shadow-[0_0_32px_rgba(0,191,255,0.55)] hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                            data-testid="contact-submit-button"
                        >
                            {sending ? "Sending..." : "Send Message"}
                            <Send size={15} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
