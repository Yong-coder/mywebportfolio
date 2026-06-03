import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import { useReveal } from "../hooks/useReveal";

export const Education = () => {
    const ref = useReveal();
    return (
        <section
            id="education"
            className="relative py-24 md:py-32 bg-navy-light"
            data-testid="education-section"
        >
            <div className="max-w-4xl mx-auto px-6 md:px-10">
                <SectionHeader
                    kicker="Academic Background"
                    title="Education"
                />

                <div ref={ref} className="reveal-up space-y-5">
                    {education.map((ed) => (
                        <article
                            key={ed.degree}
                            className="rounded-2xl border border-navy-border bg-navy-card p-7 md:p-9 hover:border-cyan/50 transition-colors"
                            data-testid="education-item"
                        >
                            <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-7">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan to-cyan/60 flex items-center justify-center shadow-[0_8px_30px_rgba(0,191,255,0.3)] shrink-0">
                                    <GraduationCap
                                        size={28}
                                        className="text-navy"
                                        strokeWidth={2.4}
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-display font-bold text-white text-xl md:text-2xl tracking-tight">
                                        {ed.degree}
                                    </h3>
                                    <div className="text-cyan font-medium mt-1">
                                        {ed.school}
                                    </div>
                                    <div className="text-slate-400 text-sm mt-1">
                                        {ed.location}
                                    </div>
                                </div>
                                <span className="px-4 py-2 rounded-full text-xs md:text-sm font-medium border border-cyan/40 text-cyan bg-cyan/5 self-start md:self-center whitespace-nowrap">
                                    {ed.period}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
