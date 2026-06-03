import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Award,
    Building2,
    Calendar,
    CheckCircle2,
    ArrowRight,
    Cloud,
    Sparkles,
    Infinity as InfinityIcon,
} from "lucide-react";
import { certifications } from "../data/certifications";
import SectionHeader from "./SectionHeader";
import { useReveal } from "../hooks/useReveal";

const useCounter = (target, duration = 1400) => {
    const [value, setValue] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !started.current) {
                        started.current = true;
                        const start = performance.now();
                        const tick = (now) => {
                            const t = Math.min((now - start) / duration, 1);
                            const eased = 1 - Math.pow(1 - t, 3);
                            setValue(Math.round(eased * target));
                            if (t < 1) requestAnimationFrame(tick);
                        };
                        requestAnimationFrame(tick);
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [target, duration]);

    return [ref, value];
};

const StatCard = ({ icon: Icon, target, suffix = "", label, sublabel }) => {
    const [ref, value] = useCounter(target);
    return (
        <div
            ref={ref}
            className="rounded-2xl border border-navy-border bg-navy-card p-6 hover:border-cyan/50 hover:-translate-y-1 transition-all duration-300 group"
        >
            <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
                    <Icon size={18} className="text-cyan" strokeWidth={2.2} />
                </div>
                {sublabel && (
                    <span className="text-[10px] uppercase tracking-widest text-slate-500">
                        {sublabel}
                    </span>
                )}
            </div>
            <div className="font-display font-extrabold text-cyan text-4xl md:text-5xl tracking-tight leading-none">
                {value}
                <span className="text-cyan-glow">{suffix}</span>
            </div>
            <div className="mt-3 text-xs md:text-sm uppercase tracking-widest text-slate-400">
                {label}
            </div>
        </div>
    );
};

const formatDate = (iso) => {
    if (!iso) return null;
    try {
        return new Date(iso).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "short",
        });
    } catch {
        return iso;
    }
};

const isExpired = (iso) => iso && new Date(iso).getTime() < Date.now();

const FeaturedCard = ({ cert }) => (
    <article
        className="group rounded-2xl border border-navy-border bg-navy-card p-6 md:p-7 hover:border-cyan/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
        data-testid={`featured-cert-${cert.id}`}
    >
        {/* corner glow */}
        <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-cyan/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        <div className="flex items-start justify-between gap-4 mb-5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-cyan/60 flex items-center justify-center shadow-[0_8px_30px_rgba(0,191,255,0.25)] group-hover:shadow-[0_8px_40px_rgba(0,191,255,0.45)] transition-shadow shrink-0">
                <Award size={22} className="text-navy" strokeWidth={2.4} />
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest border border-emerald-400/40 text-emerald-300 bg-emerald-400/5">
                <CheckCircle2 size={11} strokeWidth={2.6} />
                Active
            </span>
        </div>

        <h3 className="font-display font-bold text-white text-lg leading-snug mb-1.5">
            {cert.name}
        </h3>
        <div className="flex items-center gap-2 text-slate-400 text-sm mb-5">
            <Building2 size={14} className="text-cyan/80" />
            <span className="truncate">{cert.organization}</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-navy-border">
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Calendar size={13} className="text-cyan" />
                Issued {formatDate(cert.issueDate)}
            </div>
            {cert.category && (
                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest border border-cyan/40 text-cyan bg-cyan/5">
                    {cert.category}
                </span>
            )}
        </div>
    </article>
);

export const FeaturedCerts = () => {
    const ref = useReveal();
    const navigate = useNavigate();

    const total = certifications.length;
    const active = certifications.filter((c) => !isExpired(c.expiryDate)).length;
    const cloud = certifications.filter((c) => c.category === "Cloud").length;
    const productivity = certifications.filter(
        (c) => c.category === "Productivity"
    ).length;
    const activePct = total ? Math.round((active / total) * 100) : 0;

    const featured = certifications
        .filter((c) => !isExpired(c.expiryDate))
        .sort((a, b) => new Date(b.issueDate) - new Date(a.issueDate))
        .slice(0, 4);

    const goToAll = (e) => {
        e.preventDefault();
        navigate("/certifications");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section
            id="featured-certifications"
            className="relative py-24 md:py-32 bg-navy-light overflow-hidden"
            data-testid="featured-certifications-section"
        >
            <div className="absolute -top-32 right-0 w-[420px] h-[420px] rounded-full bg-cyan/10 blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-40 left-0 w-[480px] h-[480px] rounded-full bg-cyan/10 blur-[140px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
                <SectionHeader
                    kicker="Verified Achievements"
                    title="Featured Certifications"
                    lead="A snapshot of credentials that back the work — fully verifiable and kept current."
                />

                {/* Stats */}
                <div
                    ref={ref}
                    className="reveal-up grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12"
                    data-testid="featured-stats-grid"
                >
                    <StatCard
                        icon={Award}
                        target={total}
                        suffix="+"
                        label="Certifications Earned"
                        sublabel="Total"
                    />
                    <StatCard
                        icon={CheckCircle2}
                        target={activePct}
                        suffix="%"
                        label="Active Credentials"
                        sublabel="Live"
                    />
                    <StatCard
                        icon={Cloud}
                        target={cloud}
                        label="Cloud Certifications"
                        sublabel="Azure"
                    />
                    <StatCard
                        icon={Sparkles}
                        target={productivity}
                        label="Productivity Certs"
                        sublabel="Microsoft 365"
                    />
                </div>

                {/* Continuous learning ribbon */}
                <div className="mb-12 rounded-2xl border border-navy-border bg-navy-card/60 p-5 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center">
                            <InfinityIcon
                                size={18}
                                className="text-cyan"
                                strokeWidth={2.2}
                            />
                        </div>
                        <div>
                            <div className="font-display font-semibold text-white">
                                Continuous Learning
                            </div>
                            <div className="text-sm text-slate-400">
                                Currently pursuing advanced identity & zero-trust
                                networking credentials.
                            </div>
                        </div>
                    </div>
                    <span className="self-start sm:self-center px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest border border-cyan/40 text-cyan bg-cyan/5">
                        In progress
                    </span>
                </div>

                {/* Featured cards */}
                <div
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
                    data-testid="featured-cards-grid"
                >
                    {featured.map((c) => (
                        <FeaturedCard key={c.id} cert={c} />
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 flex justify-center">
                    <a
                        href="/certifications"
                        onClick={goToAll}
                        className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-cyan text-navy font-semibold text-sm hover:bg-cyan-glow transition-all hover:shadow-[0_0_32px_rgba(0,191,255,0.55)] hover:-translate-y-0.5"
                        data-testid="featured-cta-view-all"
                    >
                        View All Certifications
                        <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCerts;
