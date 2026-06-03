import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { navLinks, profile } from "../data/portfolio";

export const Navigation = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isActive = (link) => {
        if (link.type === "route") return location.pathname === link.path;
        return false;
    };

    const handleClick = (link) => (e) => {
        e.preventDefault();
        setOpen(false);
        if (link.type === "route") {
            navigate(link.path);
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        // section link
        if (location.pathname !== "/") {
            navigate(`/#${link.id}`);
            // Defer scroll to next tick after route change
            setTimeout(() => {
                document
                    .getElementById(link.id)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 60);
            return;
        }
        const el = document.getElementById(link.id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const handleLogo = (e) => {
        e.preventDefault();
        setOpen(false);
        if (location.pathname !== "/") {
            navigate("/");
            return;
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-navy/90 backdrop-blur-md border-b border-navy-border shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
                    : "bg-transparent"
            }`}
            data-testid="main-navigation"
        >
            <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
                <a
                    href="/"
                    onClick={handleLogo}
                    className="font-display font-bold text-xl text-cyan tracking-tight hover:text-cyan-glow transition-colors"
                    data-testid="nav-logo"
                >
                    {profile.nameShort}
                </a>
                <ul className="hidden md:flex gap-7 lg:gap-9 text-sm font-medium">
                    {navLinks.map((l) => {
                        const active = isActive(l);
                        return (
                            <li key={l.id}>
                                <a
                                    href={l.type === "route" ? l.path : `#${l.id}`}
                                    onClick={handleClick(l)}
                                    className={`relative group transition-colors ${
                                        active
                                            ? "text-cyan"
                                            : "text-slate-300 hover:text-cyan"
                                    }`}
                                    data-testid={`nav-link-${l.id}`}
                                >
                                    {l.label}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-px bg-cyan transition-all duration-300 ${
                                            active
                                                ? "w-full"
                                                : "w-0 group-hover:w-full"
                                        }`}
                                    />
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <button
                    className="md:hidden p-2 text-slate-200"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle menu"
                    data-testid="nav-toggle"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>
            {open && (
                <div className="md:hidden border-t border-navy-border bg-navy/95 backdrop-blur-md">
                    {navLinks.map((l) => {
                        const active = isActive(l);
                        return (
                            <a
                                key={l.id}
                                href={l.type === "route" ? l.path : `#${l.id}`}
                                onClick={handleClick(l)}
                                className={`block px-6 py-4 transition-colors border-b border-navy-border/50 ${
                                    active
                                        ? "text-cyan bg-cyan/5"
                                        : "text-slate-300 hover:text-cyan hover:bg-navy-light"
                                }`}
                                data-testid={`mobile-nav-${l.id}`}
                            >
                                {l.label}
                            </a>
                        );
                    })}
                </div>
            )}
        </header>
    );
};

export default Navigation;
