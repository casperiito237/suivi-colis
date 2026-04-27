"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-header sticky top-0 z-50 border-b border-lp-border">
      <div className="max-w-7xl mx-auto px-4">
        {/* ── Barre principale ── */}
        <div className="flex items-center gap-4 h-16">
          {/* Logo La Poste */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
            {/* Flèche La Poste SVG */}
            <svg width="44" height="32" viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="44" height="32" rx="2" fill="#003189"/>
              <path d="M8 22L18 10L24 16L32 8" stroke="#FFCD00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M28 8H32V12" stroke="#FFCD00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-black text-lp-blue text-xl tracking-tight uppercase leading-none">
              La Poste
            </span>
          </Link>

          {/* Barre de recherche — desktop */}
          <div className="hidden md:flex flex-1 max-w-xl lp-search items-center px-3 py-2 gap-2">
            <svg className="w-4 h-4 text-lp-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              type="text"
              placeholder="N° de suivi, rechercher un produit ou un servi..."
              className="flex-1 text-sm outline-none text-lp-text placeholder-lp-muted bg-transparent"
            />
          </div>

          {/* Accès rapides */}
          <button className="hidden md:flex items-center gap-2 border border-lp-border rounded px-3 py-2 text-sm font-semibold text-lp-text hover:bg-lp-gray transition">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            Accès rapides
          </button>

          {/* Spacer */}
          <div className="flex-1 hidden md:block" />

          {/* Icônes droite */}
          <div className="hidden md:flex items-center gap-5">
            <Link href="/faq" className="flex flex-col items-center text-lp-muted hover:text-lp-blue transition text-xs gap-0.5">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Aide
            </Link>
            <Link href="/contact" className="flex flex-col items-center text-lp-muted hover:text-lp-blue transition text-xs gap-0.5">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              Se connecter
            </Link>
            <button className="flex flex-col items-center text-lp-muted hover:text-lp-blue transition text-xs gap-0.5">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
              Panier
            </button>
          </div>

          {/* Burger mobile */}
          <button
            className="md:hidden ml-auto p-2 text-lp-text"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              }
            </svg>
          </button>
        </div>

        {/* ── Sous-nav desktop ── */}
        <nav className="hidden md:flex items-center gap-0 border-t border-lp-border -mx-4 px-4">
          {[
            { href: "/", label: "Suivi de colis" },
            { href: "/faq", label: "FAQ" },
            { href: "/contact", label: "Contact" },
            { href: "/mentions-legales", label: "Mentions légales" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors
                ${pathname === link.href
                  ? "border-lp-blue text-lp-blue"
                  : "border-transparent text-lp-muted hover:text-lp-text hover:border-lp-border"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden border-t border-lp-border bg-white">
          {[
            { href: "/", label: "suivi de colis" },
            { href: "/faq", label: "FAQ" },
            { href: "/contact", label: "Contact" },
            { href: "/mentions-legales", label: "Mentions légales" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-3.5 text-sm font-semibold border-b border-lp-border
                ${pathname === link.href ? "text-lp-blue bg-lp-gray" : "text-lp-text"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
