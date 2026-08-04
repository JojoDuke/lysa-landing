import Link from "next/link";
import { BOOK_DEMO_URL } from "@/lib/constants";
import { Logo } from "@/components/ui/logo";

const footerLinks = {
  Platform: [
    { href: "#features", label: "Lead Qualification" },
    { href: "#features", label: "Property Discovery" },
    { href: "#features", label: "Showing Booking" },
    { href: "#features", label: "Knowledge Agent" },
    { href: "#features", label: "Property Valuation Agent" },
    { href: "#features", label: "Document Processing Agent" },
    { href: "#features", label: "Market Analysis Agent" },
    { href: "#features", label: "Tenant Communication Agent" },
    { href: "#features", label: "Maintenance Prediction Agent" },
    { href: "#platform", label: "Features" },
  ],
  "Lysa for": [
    { href: "#platform", label: "Real Estate Brokerages" },
    { href: "#platform", label: "Independent Agents" },
  ],
  Resources: [
    { href: "#demo", label: "Interactive Demo" },
    { href: "#platform", label: "Platform Overview" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ],
  Company: [
    { href: BOOK_DEMO_URL, label: "Book a Demo", external: true },
    { href: "#platform", label: "About" },
    { href: "#faq", label: "Reviews" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="mx-auto max-w-container px-[6vw] py-16">
        <div className="mb-12">
          <Logo textClassName="text-white" />
        </div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-green-75">
                {category}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-green-75/80"
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-green-700 pt-8">
          <p className="text-sm text-green-75/60">
            &copy; {new Date().getFullYear()} Lysa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
