import posthog from "posthog-js";

export function trackBookDemoClick(location: string) {
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return;
  posthog.capture("book_demo_click", { location });
}
