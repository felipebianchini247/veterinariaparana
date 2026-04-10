"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative h-10 w-10 overflow-hidden rounded-full shadow-sm transition-transform group-hover:scale-105">
              <Image
                src="/veterinariaParana3.png"
                alt="Logo de Veterinaria Paraná"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={cn(
                  "font-heading font-bold text-[1.55rem] tracking-tight transition-colors duration-200 sm:text-[1.7rem]",
                  scrolled ? "text-gray-900" : "text-white"
                )}
              >
                Veterinaria Paraná
              </span>
              <span
                className={cn(
                  "hidden text-[0.7rem] font-medium tracking-wide sm:block transition-colors duration-200",
                  scrolled ? "text-brand" : "text-white/75"
                )}
              >
                Centro Veterinario · Villa Adelina
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  scrolled
                    ? "text-gray-600 hover:text-brand"
                    : "text-white/85 hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={cn(
              "lg:hidden rounded-lg p-2 transition-colors",
              scrolled
                ? "text-gray-600 hover:text-brand hover:bg-brand-muted"
                : "text-white hover:bg-white/10 hover:text-white"
            )}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300",
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-5 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-brand hover:bg-brand-muted transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
