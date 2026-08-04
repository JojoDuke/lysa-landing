import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Blog | Lysa",
  description:
    "Insights on AI for real estate, WhatsApp lead conversion, and running Lysa in your brokerage.",
};

export default function BlogPage() {
  return (
    <section className="border-b border-neutral-200 bg-surface">
      <div className="mx-auto max-w-container px-[6vw] py-20 lg:py-28">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-rose">
          Blog
        </p>
        <h1 className="font-display text-[clamp(2rem,5vw,3.375rem)] font-medium leading-tight text-green-850">
          Insights for modern brokerages.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-body">
          Articles on AI employees, WhatsApp lead conversion, and running Lysa
          in your brokerage are coming soon.
        </p>
        <div className="mt-10">
          <Button asChild variant="outline">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
