import { Check } from "lucide-react";
import { experience } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import { useReveal } from "../hooks/useReveal";

const TimelineItem = ({ job, n }) => {
    const ref = useReveal();
    return (
        <div
            ref={ref}
            className="reveal-up relative grid grid-cols-[28px_1fr] md:grid-cols-[40px_1fr] gap-5 md:gap-8"
            data-testid={`experience-row-${n}`}
        >
            {/* Dot */}
            <div className="relative flex justify-center pt-3">
                <div className="w-3.5 h-3.5 rounded-full bg-cyan ring-4 ring-cyan/20 shadow-[0_0_18px_rgba(0,191,255,0.65)] z-10" />
            </div>

            {/* Card */}
            <div className="pb-12 md:pb-16">
                <span className="inline-block px-3 py-1 rounded-full text-[11px] md:text-xs font-medium tracking-wider uppercase border border-cyan/40 text-cyan bg-cyan/5 mb-3">
                    {job.period}
                </span>
                <h3 className="font-display font-bold text-white text-2xl md:text-[26px] tracking-tight">
                    {job.title}
                </h3>
                <div className="text-cyan text-sm md:text-base mt-1 mb-5 font-medium">
                    {job.company} — {job.location}
                </div>
                <div className="rounded-2xl border border-navy-border bg-navy-card p-5 md:p-7">
                    <ul className="space-y-3">
                        {job.bullets.map((b, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-3 text-sm md:text-[15px] text-slate-300 leading-relaxed"
                            >
                                <Check
                                    size={16}
                                    className="text-cyan mt-1 shrink-0"
                                    strokeWidth={2.6}
                                />
                                <span>{b}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export const Experience = () => {
    return (
        <section
            id="experience"
            className="relative py-24 md:py-32 bg-navy"
            data-testid="experience-section"
        >
            <div className="max-w-5xl mx-auto px-6 md:px-10">
                <SectionHeader
                    kicker="Career Journey"
                    title="Professional Experience"
                />

                <div className="relative mt-4">
                    {/* Vertical line */}
                    <div className="absolute left-[6px] md:left-[12px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan via-cyan/40 to-transparent" />
                    <div className="space-y-2">
                        {experience.map((j, i) => (
                            <TimelineItem
                                key={j.title + j.period}
                                job={j}
                                n={i + 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
