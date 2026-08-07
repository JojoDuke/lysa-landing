"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BookDemoLink } from "@/components/analytics/book-demo-link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

const navLinks = [
  { href: "#platform", label: "Product" },
  { href: "#features", label: "Use cases" },
  { href: "#pricing", label: "Pricing" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-surface/95 backdrop-blur-sm">
        <nav className="mx-auto flex h-[4.5rem] max-w-container items-center justify-between px-[6vw]">
          <Logo />

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-green-850"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button asChild variant="outline" size="sm">
              <BookDemoLink location="navbar">Book a demo</BookDemoLink>
            </Button>
          </div>

          <button
            type="button"
            className="p-2 text-green-850 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-green-850/20"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-sm border-l border-neutral-200 bg-surface p-6 pt-24">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-green-850"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6 px-4">
                <Button asChild className="w-full">
                  <BookDemoLink
                    location="navbar_mobile"
                    onClick={() => setMobileOpen(false)}
                  >
                    Book a demo
                  </BookDemoLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
