import Link from "next/link";

const footerLinks = {
  Product: [
    { href: "#capabilities", label: "Capabilities" },
    { href: "#pricing", label: "Pricing" },
    { href: "#demo", label: "Demo" },
    { href: "#faq", label: "FAQ" },
  ],
  Company: [
    { href: "#cta", label: "Book a Demo" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#outcomes", label: "Outcomes" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <span className="text-sm font-bold text-emerald-400">L</span>
              </div>
              <span className="text-lg font-semibold text-white">Lysa</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/40">
              Your AI Real Estate Employee. Qualify leads, recommend properties,
              and book showings 24/7 on WhatsApp.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-medium text-white/80">{category}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-emerald-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Lysa. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Built for real estate brokerages across America.
          </p>
        </div>
      </div>
    </footer>
  );
}
