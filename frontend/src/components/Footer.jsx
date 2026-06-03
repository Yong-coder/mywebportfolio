import { profile } from "../data/portfolio";

export const Footer = () => {
    return (
        <footer
            className="bg-navy border-t border-navy-border py-10"
            data-testid="site-footer"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="font-display font-bold text-cyan text-lg">
                    {profile.nameShort}
                </div>
                <div className="text-sm text-slate-400">
                    © 2026 {profile.name}. All rights reserved.
                </div>
                <button
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="text-sm text-slate-400 hover:text-cyan transition-colors"
                    data-testid="back-to-top"
                >
                    Back to top ↑
                </button>
            </div>
        </footer>
    );
};

export default Footer;
