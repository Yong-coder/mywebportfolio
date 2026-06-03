import { useMemo, useState } from "react";
import {
    Award,
    Building2,
    Calendar,
    CalendarX,
    ExternalLink,
    Hash,
    Search,
    FileX,
} from "lucide-react";
import { certifications, certCategories } from "../data/certifications";
import SectionHeader from "../components/SectionHeader";
import { useReveal } from "../hooks/useReveal";

const formatDate = (iso) => {
    if (!iso) return null;
    try {
        return new Date(iso).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "short",
            day: "2-digit",
        });
    } catch {
        return iso;
    }
};

const isExpired = (iso) => {
    if (!iso) return false;
    return new Date(iso).getTime() < Date.now();
};

const CertCard = ({ cert }) => {
    const expired = isExpired(cert.expiryDate);
    return (
        <article
            className="group rounded-2xl border border-navy-border bg-navy-card p-6 md:p-7 hover:border-cyan/50 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            data-testid={`cert-card-${cert.id}`}
        >
            <div className="flex items-start justify-between gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-cyan/60 flex items-center justify-center shadow-[0_8px_30px_rgba(0,191,255,0.25)] group-hover:shadow-[0_8px_40px_rgba(0,191,255,0.45)] transition-shadow shrink-0">
                    <Award size={22} className="text-navy" strokeWidth={2.4} />
                </div>
                {cert.category && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wider uppercase border border-cyan/40 text-cyan bg-cyan/5">
                        {cert.category}
                    </span>
                )}
            </div>

            <h3 className="font-display font-bold text-white text-lg leading-snug mb-1.5">
                {cert.name}
            </h3>
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-5">
                <Building2 size={14} className="text-cyan/80" />
                <span className="truncate">{cert.organization}</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="rounded-xl bg-navy/60 border border-navy-border p-3">
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-slate-400 mb-1.5">
                        <Calendar size={12} className="text-cyan" />
                        Issued
                    </div>
                    <div className="text-white text-sm font-medium">
                        {formatDate(cert.issueDate) || "—"}
                    </div>
                </div>
                <div className="rounded-xl bg-navy/60 border border-navy-border p-3">
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-slate-400 mb-1.5">
                        <CalendarX size={12} className="text-cyan" />
                        Expires
                    </div>
                    <div
                        className={`text-sm font-medium ${
                            expired ? "text-red-400" : "text-white"
                        }`}
                    >
                        {cert.expiryDate ? formatDate(cert.expiryDate) : "No expiry"}
                    </div>
                </div>
            </div>

            {cert.credentialId && (
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-5 break-all">
                    <Hash size={12} className="text-cyan shrink-0" />
                    <span className="font-mono text-slate-300">
                        {cert.credentialId}
                    </span>
                </div>
            )}

            <div className="mt-auto pt-4 border-t border-navy-border flex items-center justify-between gap-3">
                {expired ? (
                    <span className="px-3 py-1 rounded-full text-[11px] font-medium uppercase tracking-wider border border-red-400/40 text-red-400 bg-red-400/5">
                        Expired
                    </span>
                ) : (
                    <span className="px-3 py-1 rounded-full text-[11px] font-medium uppercase tracking-wider border border-emerald-400/40 text-emerald-300 bg-emerald-400/5">
                        Active
                    </span>
                )}
                {cert.verificationUrl && (
                    <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-cyan hover:text-cyan-glow transition-colors font-medium"
                        data-testid={`cert-verify-${cert.id}`}
                    >
                        Verify
                        <ExternalLink size={14} />
                    </a>
                )}
            </div>
        </article>
    );
};

const EmptyState = ({ query }) => (
    <div
        className="rounded-2xl border border-dashed border-navy-border bg-navy-card/40 py-16 px-6 text-center"
        data-testid="cert-empty-state"
    >
        <div className="w-16 h-16 mx-auto rounded-2xl bg-navy/60 border border-navy-border flex items-center justify-center mb-5">
            <FileX size={26} className="text-cyan/70" />
        </div>
        <h3 className="font-display font-bold text-white text-xl mb-2">
            No certifications found
        </h3>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
            {query
                ? `No results match "${query}". Try a different keyword or category.`
                : "No certifications have been added yet. Check back soon."}
        </p>
    </div>
);

export default function Certifications() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("All");
    const ref = useReveal();

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return certifications.filter((c) => {
            const matchCat = category === "All" || c.category === category;
            if (!matchCat) return false;
            if (!q) return true;
            return (
                c.name.toLowerCase().includes(q) ||
                c.organization.toLowerCase().includes(q) ||
                (c.credentialId || "").toLowerCase().includes(q) ||
                (c.category || "").toLowerCase().includes(q)
            );
        });
    }, [query, category]);

    return (
        <main
            className="bg-navy text-slate-100 min-h-screen"
            data-testid="certifications-page"
        >
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-navy overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-cyan/10 blur-[120px] pointer-events-none" />
                <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-cyan/10 blur-[140px] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
                    <SectionHeader
                        kicker="Verified Credentials"
                        title="Certifications"
                        lead="A living record of professional credentials — verifiable, current, and continually growing."
                    />

                    {/* Toolbar */}
                    <div
                        ref={ref}
                        className="reveal-up rounded-2xl border border-navy-border bg-navy-card p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-4"
                        data-testid="cert-toolbar"
                    >
                        <div className="relative flex-1">
                            <Search
                                size={16}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search by name, organization, ID..."
                                className="w-full pl-11 pr-4 py-3 rounded-xl bg-navy/60 border border-navy-border text-white placeholder:text-slate-500 text-sm transition-colors"
                                data-testid="cert-search-input"
                            />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {certCategories.map((c) => {
                                const active = category === c;
                                return (
                                    <button
                                        key={c}
                                        onClick={() => setCategory(c)}
                                        className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
                                            active
                                                ? "bg-cyan text-navy border-cyan shadow-[0_0_24px_rgba(0,191,255,0.35)]"
                                                : "text-slate-300 border-navy-border hover:border-cyan/50 hover:text-cyan"
                                        }`}
                                        data-testid={`cert-filter-${c.toLowerCase()}`}
                                    >
                                        {c}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-5 text-xs uppercase tracking-widest text-slate-500">
                        Showing {filtered.length} of {certifications.length}
                    </div>
                </div>
            </section>

            <section className="pb-24 md:pb-32 bg-navy">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    {filtered.length === 0 ? (
                        <EmptyState query={query} />
                    ) : (
                        <div
                            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
                            data-testid="cert-grid"
                        >
                            {filtered.map((cert) => (
                                <CertCard key={cert.id} cert={cert} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
