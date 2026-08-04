const stats = [
  { value: "24/7", label: "AI availability for every lead" },
  { value: "100%", label: "of inquiries get an instant response" },
  { value: "7", label: "day deployment time" },
];

export function StatsSection() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-container px-[6vw] py-16 lg:py-24">
        <h2 className="mb-12 text-center font-display text-[clamp(2rem,5vw,3.375rem)] font-medium leading-tight text-green-850">
          A proven platform you can count on.
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-neutral-200 bg-[#f0fdf9] p-8 text-center"
            >
              <p className="font-display text-5xl font-medium text-rose lg:text-6xl">
                {stat.value}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-body">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
