import Link from "next/link";
import type { Metadata } from "next";
import {
  Calendar, Users, MapPin, Target, Palette, FolderOpen, Coins,
  Bot, Clock, X, Check, Globe, PenTool, Video, Briefcase, ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Program – AI Summer School 2026",
  description:
    "A 7-day hands-on transformation program. Learn by doing — build real projects in AI, content, websites, design, video & business.",
};

export default function ProgramPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="neo-section neo-section--purple" id="program-hero">
        <div className="container page-hero">
          <span className="neo-badge neo-badge--yellow">The Program</span>
          <h1 style={{ marginTop: "1.5rem" }}>
            This is not a course.
            <br />
            <span style={{ color: "var(--color-black)" }}>
              This is a 7-day transformation.
            </span>
          </h1>
          <p className="text-large" style={{ marginTop: "1.25rem" }}>
            AI Summer School is a hands-on, intensive program designed to help
            students build real-world skills, create projects, and understand
            how to turn skills into opportunities.
          </p>
          <div className="page-hero__meta">
            <span className="neo-badge" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={18} strokeWidth={3} /> Ahmedabad (AMA)
            </span>
            <span className="neo-badge" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar size={18} strokeWidth={3} /> 7 Days Intensive
            </span>
            <span className="neo-badge" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Users size={18} strokeWidth={3} /> 13 Industry Experts
            </span>
          </div>
          <div className="page-hero__cta">
            <Link href="/apply" className="neo-btn neo-btn--primary neo-btn--large">
              Apply Now →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHAT IS AI SUMMER SCHOOL ===== */}
      <section className="neo-section neo-section--white reveal" id="what-is">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge neo-badge--blue section-header__tag">
              What Is It
            </span>
            <h2>What is AI Summer School?</h2>
          </div>

          <p className="text-large" style={{ marginBottom: "2rem" }}>
            AI Summer School is a 7-day, build-first learning experience where
            students learn how to:
          </p>

          <div className="grid-2">
            {[
              { icon: Bot, text: "Use AI tools effectively" },
              { icon: Palette, text: "Create content, websites, and designs" },
              { icon: FolderOpen, text: "Build a portfolio of real projects" },
              { icon: Coins, text: "Turn skills into income" },
            ].map((item, i) => (
              <div key={i} className="neo-card" style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <span><item.icon size={28} strokeWidth={2.5} /></span>
                <p style={{ fontWeight: 600, fontSize: "1rem" }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div
            className="neo-card neo-card--yellow"
            style={{ marginTop: "2rem", textAlign: "center" }}
          >
            <h3>This is not about watching lectures. This is about learning by doing.</h3>
          </div>
        </div>
      </section>

      {/* ===== WHY THIS EXISTS ===== */}
      <section className="neo-section neo-section--blue reveal" id="why">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge neo-badge--orange section-header__tag">
              The Gap
            </span>
            <h2 style={{ color: "var(--color-black)" }}>Why This Program Exists</h2>
          </div>

          <div className="grid-2" style={{ gap: "2rem" }}>
            <div className="neo-card">
              <h3 style={{ marginBottom: "1rem" }}>Schools & colleges teach:</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li style={{ fontWeight: 600, paddingLeft: "1.75rem", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, top: "2px" }}><X size={18} strokeWidth={3} /></span>Formulas
                </li>
                <li style={{ fontWeight: 600, paddingLeft: "1.75rem", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, top: "2px" }}><X size={18} strokeWidth={3} /></span>Definitions
                </li>
                <li style={{ fontWeight: 600, paddingLeft: "1.75rem", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, top: "2px" }}><X size={18} strokeWidth={3} /></span>Concepts
                </li>
              </ul>
            </div>
            <div className="neo-card neo-card--orange">
              <h3 style={{ marginBottom: "1rem" }}>But students struggle with:</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}><X size={18} strokeWidth={3} style={{ flexShrink: 0, marginTop: "2px" }} /> Writing a compelling email</li>
                <li style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}><X size={18} strokeWidth={3} style={{ flexShrink: 0, marginTop: "2px" }} /> Building a website</li>
                <li style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}><X size={18} strokeWidth={3} style={{ flexShrink: 0, marginTop: "2px" }} /> Creating content</li>
                <li style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}><X size={18} strokeWidth={3} style={{ flexShrink: 0, marginTop: "2px" }} /> Understanding how to earn</li>
              </ul>
            </div>
          </div>

          <div
            className="neo-card neo-card--purple"
            style={{ marginTop: "2rem", textAlign: "center" }}
          >
            <h3>The result? Confusion. Lack of direction. Missed opportunities.</h3>
          </div>
        </div>
      </section>

      {/* ===== OUR APPROACH ===== */}
      <section className="neo-section neo-section--yellow reveal" id="approach">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge section-header__tag">Our Approach</span>
            <h2>We flipped the system.</h2>
          </div>

          <div className="grid-2" style={{ gap: "2rem" }}>
            <div className="neo-card neo-card--orange" style={{ textAlign: "center" }}>
              <p className="text-small" style={{ fontWeight: 700, marginBottom: "0.5rem" }}>
                TRADITIONAL
              </p>
              <h3>NOT: Theory → Exam → Forget</h3>
            </div>
            <div className="neo-card neo-card--green" style={{ textAlign: "center" }}>
              <p className="text-small" style={{ fontWeight: 700, marginBottom: "0.5rem" }}>
                OUR WAY
              </p>
              <h3>IS: Learn → Build → Apply</h3>
            </div>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <div className="grid-4">
              {[
                "2 expert-led sessions every day",
                "Hands-on workshops",
                "Daily project creation",
                "Portfolio building throughout the week",
              ].map((item, i) => (
                <div key={i} className="neo-card" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: 700 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="neo-card"
            style={{
              marginTop: "2rem",
              textAlign: "center",
              background: "var(--color-purple)",
              color: "var(--color-black)",
            }}
          >
            <h3>
              By the end, you don&apos;t just understand — you&apos;ve already{" "}
              <span style={{ background: "var(--color-yellow)", padding: "0 0.4rem", border: "2px solid var(--color-black)", borderRadius: "var(--radius-sm)" }}>built</span>.
            </h3>
          </div>
        </div>
      </section>

      {/* ===== WHAT MAKES THIS DIFFERENT ===== */}
      <section className="neo-section neo-section--white reveal" id="different">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge neo-badge--purple section-header__tag">
              The Difference
            </span>
            <h2>What Makes This Different</h2>
          </div>

          <div className="grid-2" style={{ gap: "1.5rem" }}>
            {[
              {
                num: "01",
                title: "Build-First Learning",
                desc: "You don't just learn concepts. You create real outputs every day.",
                color: "neo-card--blue",
              },
              {
                num: "02",
                title: "AI as a Tool, Not a Replacement",
                desc: "We teach when to use AI, when to think yourself, and how to combine both effectively.",
                color: "neo-card--yellow",
              },
              {
                num: "03",
                title: "Skills That Actually Matter",
                desc: "Everything connects to real-world applications, career opportunities, and income potential.",
                color: "neo-card--green",
              },
              {
                num: "04",
                title: "Portfolio > Certificate",
                desc: "We give you projects, proof of work, and real skills — not just notes and certificates.",
                color: "neo-card--orange",
              },
            ].map((item, i) => (
              <div key={i} className={`neo-card ${item.color}`}>
                <span
                  className="neo-tag"
                  style={{ marginBottom: "0.75rem", display: "inline-block" }}
                >
                  {item.num}
                </span>
                <h3 style={{ marginBottom: "0.5rem" }}>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DAILY EXPERIENCE ===== */}
      <section className="neo-section neo-section--blue reveal" id="daily">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge section-header__tag">Daily Flow</span>
            <h2>A typical day looks like:</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "600px" }}>
            {[
              { icon: "01", time: "Morning 1", title: "Concept + live demonstrations", dur: "1.5 hrs" },
              { icon: "02", time: "Morning 2", title: "Advanced applications + use cases", dur: "1.5 hrs" },
              { icon: "03", time: "Lunch", title: "Break & networking", dur: "" },
              { icon: "04", time: "Workshop", title: "Build your own project", dur: "1.5 hrs" },
              { icon: "05", time: "Reflection", title: "Polish your work + feedback", dur: "" },
            ].map((item, i) => (
              <div key={i} className="neo-card" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <span style={{ fontSize: "1.5rem", minWidth: "40px", fontWeight: 800 }}>{item.icon}</span>
                <div>
                  <h4>{item.time}</h4>
                  <p className="text-small">{item.title}{item.dur && ` · ${item.dur}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU WILL LEARN ===== */}
      <section className="neo-section neo-section--white reveal" id="learn">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge neo-badge--green section-header__tag">
              Skills
            </span>
            <h2>What You Will Learn</h2>
            <p>Across 7 days, you will gain skills in:</p>
          </div>

          <div className="grid-3">
            {[
              "AI tools and practical usage",
              "Writing and communication",
              "Website and app building",
              "Visual design and branding",
              "Video and audio content creation",
              "Data, automation, and workflows",
              "Freelancing and personal branding",
            ].map((item, i) => (
              <div key={i} className="neo-card" style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                <span style={{ fontWeight: 900 }}>→</span>
                <p style={{ fontWeight: 600 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TOOLS ===== */}
      <section className="neo-section neo-section--orange reveal" id="tools">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge section-header__tag">Tools</span>
            <h2>Tools & Platforms You&apos;ll Use</h2>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {[
              "ChatGPT", "Claude", "Gemini", "Notion AI", "Grammarly",
              "Canva", "Midjourney", "DALL·E", "Webflow", "Framer",
              "Vercel", "CapCut", "Runway", "Descript", "Google Sheets",
              "Zapier", "Make",
            ].map((tool, i) => (
              <span
                key={i}
                className="neo-badge"
                style={{ fontSize: "0.9rem", padding: "0.5rem 1rem" }}
              >
                {tool}
              </span>
            ))}
          </div>

          <div
            className="neo-card"
            style={{ marginTop: "2rem", textAlign: "center" }}
          >
            <h4>
              Focus is not just on tools, but on how to use them effectively.
            </h4>
          </div>
        </div>
      </section>

      {/* ===== OUTCOMES ===== */}
      <section className="neo-section neo-section--green reveal" id="outcomes">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge section-header__tag">Outcomes</span>
            <h2>What You Leave With</h2>
          </div>

          <div className="grid-3">
            {[
              "A complete portfolio of 5+ projects",
              "A live personal website",
              "Practical experience with AI tools",
              "A clear understanding of career paths",
              "A 90-day action plan for growth",
            ].map((item, i) => (
              <div key={i} className="neo-card" style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                <span style={{ marginTop: "2px" }}><Check size={20} strokeWidth={3} /></span>
                <p style={{ fontWeight: 600 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section className="neo-section neo-section--yellow reveal" id="philosophy">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="neo-badge neo-badge--white" style={{ marginBottom: "1.5rem" }}>
            Philosophy
          </span>
          <h2 style={{ color: "var(--color-black)", marginBottom: "1.5rem" }}>
            &quot;Tools are just tools.
            <br />
            Your thinking is the real product.&quot;
          </h2>
          <div className="grid-3" style={{ marginTop: "2rem" }}>
            {["Clarity", "Creativity", "Execution"].map((item, i) => (
              <div key={i} className="neo-card" style={{ textAlign: "center" }}>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section
        className="neo-section neo-section--yellow"
        id="program-cta"
        style={{ textAlign: "center" }}
      >
        <div className="container">
          <h2 style={{ marginBottom: "1rem" }}>This is where things change.</h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
            <span className="neo-badge">Learning → Building</span>
            <span className="neo-badge">Confusion → Clarity</span>
            <span className="neo-badge">Student → Creator</span>
          </div>
          <Link href="/apply" className="neo-btn neo-btn--dark neo-btn--large">
            Apply Now →
          </Link>
        </div>
      </section>
    </>
  );
}
