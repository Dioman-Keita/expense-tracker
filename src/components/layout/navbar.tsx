"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, List, Plus, Settings, Wallet } from "lucide-react";
import { cn } from "@lib/utils";

const navItems = [
  { icon: Home, href: "/", label: "Accueil" },
  { icon: List, href: "/transactions", label: "Historique" },
  { icon: Plus, href: "/transactions/new", label: "Ajouter" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <nav
        className={cn(
          "group flex flex-col items-center bg-zinc-900 text-white transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-2xl",
          "w-12 h-12 rounded-full",
          "hover:h-64 hover:w-16 hover:rounded-[40px] hover:py-6",
          "rounded-full justify-center",
          "hover:h-80 hover:w-14 hover:rounded-full hover:py-4",
        )}
      >
        <div className="flex items-center justify-center group-hover:hidden transition-all duration-300">
          <Wallet size={24} className="text-emerald-400" />
        </div>
        <div className="hidden group-hover:flex flex-col items-center justify-between h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200",
                  "hover:bg-white/10 active:scale-90",
                  isActive
                    ? "text-emerald-400 bg-white/5"
                    : "text-zinc-400 hover:text-white",
                )}
                title={item.label}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                {isActive && (
                  <span className="absolute -right-1 w-1 h-4 bg-emerald-400 rounded-full" />
                )}
              </Link>
            );
          })}
          <div className="flex flex-col items-center w-full gap-2">
            <div className="w-8 h-px bg-zinc-800 my-2" />
            <Link
              href="/settings"
              title="paramètre"
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full transition-colors",
                pathname === "/settings"
                  ? "text-white"
                  : "text-zinc-500 hover:text-white hover:bg-white/5",
              )}
            >
              <Settings size={18} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
