import { ChevronDown, MapPin, Mail, Phone } from "lucide-react";
import { profile } from "../data/portfolio";

export const Hero = () => {
    const scrollTo = (id) => (e) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="top"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy"
            data-testid="hero-section"
        >
            {/* Background grid + glow */}
            <div className="absolute inset-0 grid-bg opacity-60" />
            <div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-cyan/10 blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-cyan/10 blur-[140px] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 pt-24 pb-16 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/40 bg-cyan/5 mb-8 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan blink" />
                    <span className="text-cyan text-xs md:text-sm font-medium tracking-wider uppercase">
                        {profile.role}
                    </span>
                </div>

                <h1
                    className="font-display font-extrabold text-white tracking-tight leading-[1.05] mb-6"
                    style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
                    data-testid="hero-name"
                >
                    {profile.name}
                </h1>

                <p className="max-w-2xl mx-auto text-slate-300 text-base md:text-lg leading-relaxed mb-10">
                    {profile.tagline}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
                    <a
                        href="#contact"
                        onClick={scrollTo("contact")}
                        className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-cyan text-navy font-semibold text-sm hover:bg-cyan-glow transition-all hover:shadow-[0_0_32px_rgba(0,191,255,0.55)] hover:-translate-y-0.5"
                        data-testid="hero-cta-contact"
                    >
                        Get In Touch
                    </a>
                    <a
                        href="#experience"
                        onClick={scrollTo("experience")}
                        className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-cyan/60 text-cyan hover:bg-cyan/10 font-semibold text-sm transition-all hover:-translate-y-0.5"
                        data-testid="hero-cta-experience"
                    >
                        View Experience
                    </a>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-400">
                    <span className="inline-flex items-center gap-2">
                        <MapPin size={15} className="text-cyan" />
                        {profile.location}
                    </span>
                    <a
                        href={`mailto:${profile.email}`}
                        className="inline-flex items-center gap-2 hover:text-cyan transition-colors"
                        data-testid="hero-email"
                    >
                        <Mail size={15} className="text-cyan" />
                        {profile.email}
                    </a>
                    <a
                        href={`tel:${profile.phone}`}
                        className="inline-flex items-center gap-2 hover:text-cyan transition-colors"
                        data-testid="hero-phone"
                    >
                        <Phone size={15} className="text-cyan" />
                        {profile.phone}
                    </a>
                </div>
            </div>

            <a
                href="#about"
                onClick={scrollTo("about")}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-cyan transition-colors group"
                data-testid="scroll-down"
            >
                <span className="text-xs uppercase tracking-widest">Scroll Down</span>
                <ChevronDown
                    size={18}
                    className="float-slow group-hover:text-cyan"
                />
            </a>
        </section>
    );
};

export default Hero;
