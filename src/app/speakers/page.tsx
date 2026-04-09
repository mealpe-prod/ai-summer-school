import Link from "next/link";
import type { Metadata } from "next";
import {
  Briefcase, Palette, Bot, Mic, Zap, Handshake, Target,
  Monitor, BarChart2, Megaphone, ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Speakers – AI Summer School 2026",
  description:
    "Learn from 13 industry experts — operators, creators, and professionals working at the forefront of AI, content, design, and business.",
};

export default function SpeakersPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="neo-section neo-section--dark"
        id="speakers-hero"
        style={{ paddingTop: "5rem", paddingBottom: "4rem" }}
      >
        <div className="container">
          <span className="neo-badge neo-badge--yellow" style={{ marginBottom: "1.5rem", display: "inline-block" }}>
            <Mic size={14} strokeWidth={2.5} /> Speakers
          </span>
          <h1 style={{ color: "var(--white)", marginBottom: "1.5rem" }}>
            Learn from people who are
            <br />
            <span style={{ color: "var(--yellow)" }}>building, not just teaching.</span>
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--text-muted-light)", maxWidth: "600px", marginBottom: "2.5rem" }}>
            13 industry experts. Operators, creators, and professionals working
            at the forefront of AI, content, design, and business.
          </p>
          <div className="neo-badge neo-badge--orange" style={{ fontSize: "0.85rem", padding: "0.5rem 1.25rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <Megaphone size={16} strokeWidth={2.5} /> Speaker lineup coming soon
          </div>
        </div>
      </section>

      {/* ===== WHY SPEAKERS MATTER ===== */}
      <section className="neo-section neo-section--cream reveal" id="why-speakers">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge section-header__tag">Why It Matters</span>
            <h2>Why Speakers Matter</h2>
          </div>

          <p className="text-large" style={{ marginBottom: "2rem" }}>
            At AI Summer School, you don&apos;t learn from traditional lecturers. You learn from:
          </p>

          <div className="grid-3">
            {[
              { icon: Briefcase, text: "People actively working in the industry" },
              { icon: Palette, text: "Creators building real projects" },
              { icon: Bot, text: "Professionals using AI in real-world scenarios" },
            ].map((item, i) => (
              <div key={i} className="neo-card" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <div style={{ width: "48px", height: "48px", background: "var(--black)", border: "var(--border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <item.icon size={22} strokeWidth={2.5} style={{ color: "var(--yellow)" }} />
                </div>
                <h4>{item.text}</h4>
              </div>
            ))}
          </div>

          <div className="neo-card neo-card--yellow" style={{ marginTop: "2rem", textAlign: "center" }}>
            <h3>
              You don&apos;t learn what works in theory. You learn{" "}
              <span style={{ textDecoration: "underline" }}>what actually works in practice</span>.
            </h3>
          </div>
        </div>
      </section>

      {/* ===== WHAT TO EXPECT ===== */}
      <section className="neo-section neo-section--white reveal" id="expect">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge section-header__tag">Sessions</span>
            <h2>What to Expect</h2>
          </div>

          <div className="grid-2" style={{ gap: "2rem" }}>
            <div>
              <h3 style={{ marginBottom: "1rem" }}>Our speakers will cover:</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "AI tools and real-world applications",
                  "Content creation and storytelling",
                  "Website and product building",
                  "Design and visual thinking",
                  "Video and media production",
                  "Freelancing, business, and personal branding",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                    <ArrowRight size={16} strokeWidth={3} style={{ flexShrink: 0, marginTop: "4px", color: "var(--orange)" }} />
                    <p style={{ fontWeight: 600 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="neo-card" style={{ borderLeft: "6px solid var(--orange)" }}>
              <h3 style={{ marginBottom: "1.25rem" }}>Each session is designed to be:</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { icon: Zap, label: "Practical" },
                  { icon: Handshake, label: "Interactive" },
                  { icon: Target, label: "Action-oriented" },
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "center", fontWeight: 700, fontSize: "1.1rem" }}>
                    <div style={{ width: "36px", height: "36px", background: "var(--yellow)", border: "var(--border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <item.icon size={18} strokeWidth={2.5} />
                    </div>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FORMAT ===== */}
      <section className="neo-section neo-section--cream reveal" id="format">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge neo-badge--orange section-header__tag">Format</span>
            <h2>Speaker Format</h2>
          </div>

          <div className="grid-4">
            {[
              { num: "2", label: "Expert-led sessions per day" },
              { num: "13", label: "Speakers across 7 days" },
              { icon: Monitor, label: "Hands-on demonstrations" },
              { icon: BarChart2, label: "Real examples & case studies" },
            ].map((item, i) => (
              <div key={i} className="neo-card" style={{ textAlign: "center" }}>
                <div style={{ marginBottom: "0.75rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  {"num" in item ? (
                    <span style={{ fontSize: "2.5rem", fontWeight: 900, lineHeight: 1, color: "var(--orange)" }}>{item.num}</span>
                  ) : (
                    item.icon && <item.icon size={32} strokeWidth={2} />
                  )}
                </div>
                <p style={{ fontWeight: 600, fontSize: "0.9rem" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMING SOON ===== */}
      <section className="neo-section neo-section--yellow reveal" id="coming-soon">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem" }}>
            <Mic size={32} strokeWidth={2.5} /> Announcements will begin shortly
          </h2>
          <p className="text-large mx-auto" style={{ maxWidth: "550px", marginBottom: "2rem" }}>
            We&apos;re curating a lineup of industry professionals, startup
            operators, creators, freelancers, and AI practitioners.
          </p>

          <div
            className="neo-card"
            style={{ maxWidth: "500px", margin: "0 auto", textAlign: "center" }}
          >
            <h3 style={{ marginBottom: "1rem" }}>Want Early Access?</h3>
            <p style={{ marginBottom: "1.5rem" }}>
              Be the first to know when speakers are announced. Apply now and
              secure your seat before the lineup goes live.
            </p>
            <Link href="/apply" className="neo-btn neo-btn--dark">
              Apply Now →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="neo-section neo-section--dark" id="speakers-cta" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 style={{ color: "var(--white)", marginBottom: "1.5rem" }}>
            Don&apos;t wait for the lineup.
            <br />
            The <span style={{ color: "var(--yellow)" }}>outcome</span> is what matters.
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
            <span className="neo-badge neo-badge--yellow">Real Skills</span>
            <span className="neo-badge neo-badge--orange">Real Projects</span>
            <span className="neo-badge">Real Direction</span>
          </div>
          <Link href="/apply" className="neo-btn neo-btn--primary neo-btn--large">
            Apply Now →
          </Link>
        </div>
      </section>
    </>
  );
}
