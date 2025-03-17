"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/champions", label: "챔피언 목록" },
  { href: "/items", label: "아이템 목록" },
  { href: "/rotation", label: "챔피언 로테이션" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {navItems.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "px-4 py-2 transition-colors",
              isActive
                ? "text-yellow-400 hover:text-yellow-300"
                : "text-slate-200 hover:text-yellow-400",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
