export const SectionHeader = ({ kicker, title, lead, align = "center" }) => {
    return (
        <div
            className={`mb-16 ${
                align === "center" ? "text-center mx-auto" : ""
            }`}
        >
            <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan/40 bg-cyan/5 mb-5`}
            >
                <span className="text-cyan text-xs font-semibold tracking-widest uppercase">
                    {kicker}
                </span>
            </div>
            <h2 className="font-display font-extrabold text-white tracking-tight text-4xl sm:text-5xl lg:text-6xl">
                {title}
            </h2>
            {lead && (
                <p className="max-w-2xl mx-auto mt-5 text-slate-400 text-base md:text-lg leading-relaxed">
                    {lead}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
