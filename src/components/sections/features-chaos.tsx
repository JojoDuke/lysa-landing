import {
  UserCheck,
  BookOpen,
  Search,
  Calendar,
  Brain,
  BarChart3,
} from "lucide-react";

const pills = [
  { icon: UserCheck, label: "Lead qualification" },
  { icon: Search, label: "Property discovery" },
  { icon: Calendar, label: "Showing booking" },
  { icon: BookOpen, label: "Knowledge base" },
  { icon: Brain, label: "Property valuation" },
  { icon: BarChart3, label: "Lead scoring" },
];

export function FeaturesChaos() {
  return (
    <section className="overflow-hidden border-b border-neutral-200 bg-white">
      <div className="relative mx-auto max-w-container px-[6vw] py-20 lg:py-28">
        <div className="absolute inset-0 rucoria-dots opacity-60" />

        <div className="relative text-center">
          <h2 className="font-display text-[clamp(2rem,5vw,3.375rem)] font-medium leading-tight text-green-850">
            Too many moving parts?
          </h2>
          <h2 className="mt-2 font-display text-[clamp(2rem,5vw,3.375rem)] font-medium leading-tight text-green-850">
            Bring things under control.
          </h2>
        </div>

        <div className="relative mx-auto mt-16 min-h-[280px] max-w-3xl">
          {pills.map((pill, i) => {
            const positions = [
              "left-[0%] top-[0%]",
              "right-[0%] top-[8%]",
              "left-[10%] top-[42%]",
              "right-[8%] top-[38%]",
              "left-[28%] bottom-[0%]",
              "right-[20%] bottom-[4%]",
            ];
            return (
              <div
                key={pill.label}
                className={`absolute ${positions[i]} inline-flex items-center gap-2 rounded-pill border border-neutral-200 bg-[#f0fdf9] px-4 py-2.5 shadow-sm`}
              >
                <pill.icon className="h-4 w-4 text-green-850" />
                <span className="text-sm font-medium text-green-850">
                  {pill.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
