"use client";

import Link from "next/link";

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
          <img
            src="/images/logo.png"
            alt="AI Summer School 2026"
          />
        </Link>

        <div className="navbar__links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="/apply" className="neo-btn neo-btn--primary navbar__cta" style={{ padding: "0.6rem 1.5rem", fontSize: "0.8rem" }}>
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
          style={{ background: "var(--yellow)", color: "var(--black)" }}
        >
          Apply Now →
        </Link>
      </div>
    </nav>
  );
}
