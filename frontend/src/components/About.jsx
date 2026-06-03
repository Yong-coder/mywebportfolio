import { profile } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import { useReveal } from "../hooks/useReveal";

export const About = () => {
    const ref = useReveal();
    return (
        <section
            id="about"
            className="relative py-24 md:py-32 bg-navy"
            data-testid="about-section"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <SectionHeader
                    kicker="Profile Summary"
                    title="About Me"
                />

                <div ref={ref} className="reveal-up grid lg:grid-cols-2 gap-10 items-start">
                    {/* LEFT — Summary + stats */}
                    <div>
                        <div className="space-y-5 text-slate-300 leading-relaxed text-[15px] md:text-base">
                            {profile.summary.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>

                        <div className="grid grid-cols-3 gap-4 md:gap-6 mt-10">
                            {profile.stats.map((s) => (
                                <div
                                    key={s.label}
                                    className="text-center p-5 rounded-xl bg-navy-card border border-navy-border hover:border-cyan/40 transition-colors"
                                >
                                    <div className="font-display font-extrabold text-cyan text-3xl md:text-4xl tracking-tight">
                                        {s.value}
                                    </div>
                                    <div className="mt-2 text-[11px] md:text-xs uppercase tracking-widest text-slate-400">
                                        {s.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT — Personal Details card */}
                    <aside className="rounded-2xl border border-navy-border bg-navy-card p-7 md:p-8">
                        <h3 className="font-display font-bold text-white text-xl mb-2">
                            Personal Details
                        </h3>
                        <div className="h-px bg-gradient-to-r from-cyan/60 via-cyan/20 to-transparent mb-6" />
                        <ul className="space-y-4">
                            {profile.personal.map((p) => (
                                <li
                                    key={p.label}
                                    className="flex items-center justify-between gap-4 text-sm border-b border-navy-border/60 pb-4 last:border-0 last:pb-0"
                                    data-testid={`personal-${p.label.toLowerCase().replace(/\s+/g, "-")}`}
                                >
                                    <span className="text-slate-400">
                                        {p.label}:
                                    </span>
                                    <span className="text-white font-medium text-right truncate">
                                        {p.value}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default About;
