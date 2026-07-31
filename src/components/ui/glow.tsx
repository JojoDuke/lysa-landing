import { cn } from "@/lib/utils";

interface GlowProps {
  className?: string;
  color?: "emerald" | "green";
}

export function Glow({ className, color = "emerald" }: GlowProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        color === "emerald" && "bg-emerald-500/20",
        color === "green" && "bg-green-400/15",
        className
      )}
    />
  );
}

export function GridPattern({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]",
        className
      )}
    />
  );
}
