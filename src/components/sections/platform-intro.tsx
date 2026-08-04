import {
  Calendar,
  MessageSquare,
  FileText,
  ClipboardList,
} from "lucide-react";

const workflowItems = [
  {
    icon: MessageSquare,
    label: "Lead inquiry",
    detail: "New WhatsApp message",
    position: "left-[8%] top-[18%]",
  },
  {
    icon: ClipboardList,
    label: "Qualification",
    detail: "Budget, timeline, intent",
    position: "left-[38%] top-[8%]",
  },
  {
    icon: FileText,
    label: "Property match",
    detail: "2 listings recommended",
    position: "right-[12%] top-[22%]",
  },
  {
    icon: Calendar,
    label: "Showing booked",
    detail: "Sat 10:30 AM confirmed",
    position: "left-[52%] top-[58%]",
  },
];

export function PlatformIntro() {
  return (
    <section id="platform" className="bg-green-800 pb-0 pt-16 lg:pt-24">
      <div className="mx-auto max-w-container px-[6vw]">
        <div className="overflow-hidden rounded-t-[2rem] bg-white px-6 py-16 text-center lg:rounded-t-[3rem] lg:px-16 lg:py-20">
          <h2 className="font-display text-[clamp(2rem,5vw,3.375rem)] font-medium leading-tight text-green-850">
            Designed with you in mind.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-body">
            You sell homes. We handle the conversations.
          </p>

          <div className="relative mx-auto mt-16 max-w-4xl">
            <div className="absolute left-[10%] right-[10%] top-1/2 h-px -translate-y-1/2 bg-neutral-200" />

            <div className="relative min-h-[320px]">
              {workflowItems.map((item) => (
                <div
                  key={item.label}
                  className={`absolute ${item.position} w-44 rounded-xl border border-neutral-200 bg-[#f0fdf9] p-4 text-left shadow-sm`}
                >
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-neutral-200">
                    <item.icon className="h-4 w-4 text-green-850" />
                  </div>
                  <p className="text-sm font-semibold text-green-850">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs text-body">{item.detail}</p>
                </div>
              ))}

              <div className="absolute left-1/2 top-1/2 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-rose">
                <div className="h-2 w-2 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
