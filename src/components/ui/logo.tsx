import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-8", className)}
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" fill="#3ecf8e" />
      <circle cx="21" cy="11" r="7" fill="#3ecf8e" />
      <circle cx="11" cy="21" r="7" fill="#3ecf8e" />
      <circle cx="21" cy="21" r="7" fill="#3ecf8e" />
    </svg>
  );
}

export function Logo({
  className,
  textClassName,
}: {
  className?: string;
  textClassName?: string;
}) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <LogoMark />
      <span
        className={cn(
          "font-display text-xl font-semibold tracking-tight text-green-850",
          textClassName
        )}
      >
        Lysa
      </span>
    </Link>
  );
}
