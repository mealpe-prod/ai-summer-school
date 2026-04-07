"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/program", label: "Program" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/speakers", label: "Speakers" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar__inner">
        <Link href="/" className="navbar__logo">
          <Image
            src="/images/logo.png"
            alt="AI Summer School 2026"
            width={140}
            height={48}
            priority
            unoptimized
            style={{ height: "48px", width: "auto" }}
          />
        </Link>

        <div className="navbar__links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="/apply" className="neo-btn neo-btn--primary navbar__cta">
          Apply Now
        </Link>

        <button
          className="navbar__mobile-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`navbar__mobile-menu ${menuOpen ? "active" : ""}`}>
        <button
          className="navbar__mobile-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/apply"
          onClick={() => setMenuOpen(false)}
          style={{ background: "var(--color-yellow)" }}
        >
          Apply Now →
        </Link>
      </div>
    </nav>
  );
}
