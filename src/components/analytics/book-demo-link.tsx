"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { BOOK_DEMO_URL } from "@/lib/constants";
import { trackBookDemoClick } from "@/lib/analytics";

type BookDemoLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  location: string;
};

export function BookDemoLink({
  location,
  onClick,
  ...props
}: BookDemoLinkProps) {
  return (
    <Link
      href={BOOK_DEMO_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        trackBookDemoClick(location);
        onClick?.(event);
      }}
      {...props}
    />
  );
}
