import { Server, Laptop, Cloud, Headphones } from "lucide-react";
import { skillCategories, otherTech } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import { useReveal } from "../hooks/useReveal";

const ICONS = {
    Infrastructure: Server,
    Endpoint: Laptop,
    Cloud: Cloud,
    ITSM: Headphones,
};

export const Skills = () => {
    const ref = useReveal();
    return (
        <section
            id="skills"
            className="relative py-24 md:py-32 bg-navy-light"
            data-testid="skills-section"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <SectionHeader
                    kicker="Technical Expertise"
                    title="Skills & Technologies"
                />

                <div
                    ref={ref}
                    className="reveal-up grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
                >
                    {skillCategories.map((cat) => {
                        const Icon = ICONS[cat.title] || Server;
                        return (
                            <div
                                key={cat.title}
                                className="group rounded-2xl border border-navy-border bg-navy-card p-6 md:p-7 hover:border-cyan/50 hover:-translate-y-1 transition-all duration-300"
                                data-testid={`skill-category-${cat.title.toLowerCase()}`}
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan to-cyan/60 flex items-center justify-center mb-5 shadow-[0_8px_30px_rgba(0,191,255,0.25)] group-hover:shadow-[0_8px_40px_rgba(0,191,255,0.45)] transition-shadow">
                                    <Icon
                                        size={26}
                                        className="text-navy"
                                        strokeWidth={2.4}
                                    />
                                </div>
                                <h3 className="font-display font-bold text-white text-lg mb-4">
                                    {cat.title}
                                </h3>
                                <ul className="space-y-2.5">
                                    {cat.items.map((it) => (
                                        <li
                                            key={it}
                                            className="text-sm text-slate-300 flex items-start gap-2"
                                        >
                                            <span className="text-cyan mt-[6px] block w-1 h-1 rounded-full bg-cyan shrink-0" />
                                            <span>{it}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                {/* Other Technologies */}
                <div className="mt-10 rounded-2xl border border-navy-border bg-navy-card p-7 md:p-8">
                    <h4 className="font-display font-semibold text-white text-base md:text-lg mb-5">
                        Other Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                        {otherTech.map((t) => (
                            <span
                                key={t}
                                className="px-4 py-1.5 rounded-full text-xs md:text-sm border border-cyan/40 text-cyan bg-cyan/5 hover:bg-cyan/15 transition-colors"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
