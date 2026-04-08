import Link from "next/link";
import type { Metadata } from "next";
import {
  Briefcase, Palette, Bot, Mic, Zap, Handshake, Target,
  Monitor, BarChart2, Megaphone
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
      <section className="neo-section neo-section--blue" id="speakers-hero">
        <div className="container page-hero">
          <span className="neo-badge neo-badge--yellow">Speakers</span>
          <h1 style={{ marginTop: "1.5rem" }}>
            Learn from people who are
            <br />
            <span style={{ color: "var(--color-orange)" }}>
              building, not just teaching.
            </span>
          </h1>
          <p className="text-large" style={{ marginTop: "1.25rem" }}>
            13 industry experts. Operators, creators, and professionals working
            at the forefront of AI, content, design, and business.
          </p>
          <div
            className="neo-badge neo-badge--orange"
            style={{ marginTop: "1.5rem", fontSize: "1rem", padding: "0.5rem 1.25rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            <Megaphone size={16} strokeWidth={2.5} /> Speaker lineup coming soon
          </div>
        </div>
      </section>

      {/* ===== WHY SPEAKERS MATTER ===== */}
      <section className="neo-section neo-section--white reveal" id="why-speakers">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge neo-badge--purple section-header__tag">
              Why It Matters
            </span>
            <h2>Why Speakers Matter</h2>
          </div>

          <p className="text-large" style={{ marginBottom: "2rem" }}>
            At AI Summer School, you don&apos;t learn from traditional
            lecturers. You learn from:
          </p>

          <div className="grid-3">
            {[
              {
                icon: <Briefcase size={36} strokeWidth={2} />,
                text: "People actively working in the industry",
                color: "neo-card--orange",
              },
              {
                icon: <Palette size={36} strokeWidth={2} />,
                text: "Creators building real projects",
                color: "neo-card--green",
              },
              {
                icon: <Bot size={36} strokeWidth={2} />,
                text: "Professionals using AI in real-world scenarios",
                color: "neo-card--blue",
              },
            ].map((item, i) => (
              <div key={i} className={`neo-card ${item.color}`} style={{ textAlign: "center" }}>
                <div style={{ marginBottom: "0.75rem", display: "flex", justifyContent: "center" }}>
                  {item.icon}
                </div>
                <h4>{item.text}</h4>
              </div>
            ))}
          </div>

          <div
            className="neo-card neo-card--yellow"
            style={{ marginTop: "2rem", textAlign: "center" }}
          >
            <h3>
              You don&apos;t learn what works in theory. You learn{" "}
              <span style={{ textDecoration: "underline" }}>
                what actually works in practice
              </span>
              .
            </h3>
          </div>
        </div>
      </section>

      {/* ===== WHAT TO EXPECT ===== */}
      <section className="neo-section neo-section--purple reveal" id="expect">
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
                  <div key={i} className="neo-card" style={{ padding: "0.75rem 1rem" }}>
                    <p style={{ fontWeight: 600 }}>→ {item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="neo-card neo-card--green">
              <h3 style={{ marginBottom: "1rem" }}>
                Each session is designed to be:
              </h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { icon: <Zap size={22} strokeWidth={2.5} />, label: "Practical" },
                  { icon: <Handshake size={22} strokeWidth={2.5} />, label: "Interactive" },
                  { icon: <Target size={22} strokeWidth={2.5} />, label: "Action-oriented" },
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "center", fontWeight: 700, fontSize: "1.1rem" }}>
                    {item.icon}
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FORMAT ===== */}
      <section className="neo-section neo-section--white reveal" id="format">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge neo-badge--orange section-header__tag">
              Format
            </span>
            <h2>Speaker Format</h2>
          </div>

          <div className="grid-4">
            {[
              { content: <span style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1 }}>2</span>, label: "Expert-led sessions per day" },
              { content: <span style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1 }}>13</span>, label: "Speakers across 7 days" },
              { content: <Monitor size={36} strokeWidth={2} />, label: "Hands-on demonstrations" },
              { content: <BarChart2 size={36} strokeWidth={2} />, label: "Real examples & case studies" },
            ].map((item, i) => (
              <div key={i} className="neo-card" style={{ textAlign: "center" }}>
                <div style={{ marginBottom: "0.5rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  {item.content}
                </div>
                <p style={{ fontWeight: 600, fontSize: "0.9rem" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div
            className="neo-card"
            style={{
              marginTop: "2rem",
              textAlign: "center",
              background: "var(--color-black)",
              color: "white",
            }}
          >
            <h3>
              You&apos;ll learn directly from people{" "}
              <span style={{ color: "var(--color-yellow)" }}>
                doing the work
              </span>
              .
            </h3>
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
          <p className="text-large" style={{ fontWeight: 700, marginBottom: "2rem", maxWidth: "100%" }}>
            Stay tuned — full speaker lineup will be revealed soon.
          </p>

          <div
            className="neo-card neo-card--blue"
            style={{
              maxWidth: "500px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <h3 style={{ marginBottom: "1rem" }}>Want Early Access?</h3>
            <p style={{ marginBottom: "1.5rem" }}>
              Be the first to know when speakers are announced. Apply now and
              secure your seat before the lineup goes live.
            </p>
            <Link href="/apply" className="neo-btn neo-btn--primary">
              Apply Now →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section
        className="neo-section neo-section--blue"
        id="speakers-cta"
        style={{ textAlign: "center" }}
      >
        <div className="container">
          <h2 style={{ color: "var(--color-black)", marginBottom: "1rem" }}>
            Don&apos;t wait for the lineup.
            <br />
            The outcome is what matters.
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
            <span className="neo-badge neo-badge--green">Real Skills</span>
            <span className="neo-badge neo-badge--orange">Real Projects</span>
            <span className="neo-badge neo-badge--yellow">Real Direction</span>
          </div>
          <Link href="/apply" className="neo-btn neo-btn--dark neo-btn--large">
            Apply Now →
          </Link>
        </div>
      </section>
    </>
  );
}
