const testimonials = [
  {
    quote:
      "Lysa has made our everyday life much easier when it comes to lead qualification and showing bookings. Our customers feel well taken care of, which is essential for such a significant decision as buying a home.",
    name: "Sarah Mitchell",
    role: "Broker Owner",
    company: "Desert Peak Realty",
  },
  {
    quote:
      "Having control of all inquiries throughout the customer journey is very important. Lysa's intuitive AI makes it easy to follow up with buyers and collaborate with agents on our team.",
    name: "James Rodriguez",
    role: "Managing Broker",
    company: "Valley Homes Group",
  },
  {
    quote:
      "We tested various solutions over the years and find that Lysa has a unique platform that is both highly flexible and meets our existing and future needs.",
    name: "Emily Chen",
    role: "Operations Director",
    company: "Summit Brokerage",
  },
];

export function Testimonials() {
  return (
    <section className="border-b border-neutral-200 bg-surface">
      <div className="mx-auto max-w-container px-[6vw] py-16 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-8"
            >
              <p className="flex-1 text-sm leading-relaxed text-body">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-8 border-t border-neutral-200 pt-6">
                <p className="text-sm font-semibold text-green-850">
                  {item.name}
                </p>
                <p className="mt-1 text-xs text-body">
                  {item.role}, {item.company}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
