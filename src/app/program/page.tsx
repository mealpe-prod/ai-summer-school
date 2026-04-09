import Link from "next/link";
import type { Metadata } from "next";
import {
  Calendar, Users, MapPin, Target, Palette, FolderOpen, Coins,
  Bot, Clock, X, Check, Globe, PenTool, Video, Briefcase, ArrowRight,
  Brain, Zap, Coffee, Wrench, MessageSquare
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
      <section
        className="neo-section neo-section--dark"
        id="program-hero"
        style={{ paddingTop: "5rem", paddingBottom: "4rem" }}
      >
        <div className="container">
          <span
            className="neo-badge neo-badge--yellow"
            style={{ marginBottom: "1.5rem", display: "inline-block" }}
          >
            The Program
          </span>

          <h1 style={{ marginBottom: "2rem", color: "var(--white)" }}>
            Not a course.
            <br />
            <span style={{ color: "var(--yellow)" }}>A 7-day transformation.</span>
          </h1>

          <p style={{ fontSize: "1.2rem", color: "var(--text-muted-light)", maxWidth: "600px", marginBottom: "2.5rem", fontWeight: 500 }}>
            7 days of hands-on building. Real projects. Real experts. Real
            skills that schools don&apos;t teach — and employers actually want.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
            <Link href="/apply" className="neo-btn neo-btn--primary neo-btn--large">
              Apply Now →
            </Link>
            <Link href="/curriculum" className="neo-btn neo-btn--ghost neo-btn--large">
              View Curriculum
            </Link>
          </div>

          {/* Stats strip */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              maxWidth: "700px",
            }}
          >
            {[
              { num: "7", label: "Intensive Days", sub: "Build. Learn. Ship." },
              { num: "13", label: "Industry Experts", sub: "Real practitioners" },
              { num: "5+", label: "Real Projects", sub: "Portfolio ready" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  padding: "1.5rem",
                  borderRight: i < 2 ? "2px solid rgba(255,255,255,0.1)" : "none",
                }}
              >
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--yellow)", lineHeight: 1 }}>
                  {stat.num}
                </div>
                <div style={{ fontWeight: 800, fontSize: "0.8rem", color: "var(--white)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: "0.35rem" }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted-light)", marginTop: "0.15rem", fontWeight: 500 }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT IS AI SUMMER SCHOOL ===== */}
      <section className="neo-section neo-section--cream reveal" id="what-is">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge section-header__tag">What Is It</span>
            <h2>What is AI Summer School?</h2>
          </div>

          <p className="text-large" style={{ marginBottom: "2rem" }}>
            A 7-day, build-first learning experience where students learn how to:
          </p>

          <div className="grid-2">
            {[
              { icon: Bot, text: "Use AI tools effectively" },
              { icon: Palette, text: "Create content, websites, and designs" },
              { icon: FolderOpen, text: "Build a portfolio of real projects" },
              { icon: Coins, text: "Turn skills into income" },
            ].map((item, i) => (
              <div key={i} className="neo-card" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <div style={{ width: "48px", height: "48px", background: "var(--black)", border: "var(--border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <item.icon size={22} strokeWidth={2.5} style={{ color: "var(--yellow)" }} />
                </div>
                <p style={{ fontWeight: 600, fontSize: "1.05rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY THIS EXISTS ===== */}
      <section className="neo-section neo-section--dark reveal" id="why">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge neo-badge--orange section-header__tag">The Gap</span>
            <h2 style={{ color: "var(--white)" }}>Why This Program Exists</h2>
          </div>

          <div className="grid-2" style={{ gap: "2rem" }}>
            <div className="neo-card">
              <h3 style={{ marginBottom: "1.25rem" }}>Schools & colleges teach:</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {["Formulas", "Definitions", "Concepts"].map((text, i) => (
                  <li key={i} style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                    <X size={18} strokeWidth={3} style={{ flexShrink: 0, marginTop: "3px" }} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="neo-card neo-card--dark">
              <h3 style={{ marginBottom: "1.25rem", color: "var(--white)" }}>But students struggle with:</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Writing a compelling email",
                  "Building a website",
                  "Creating content",
                  "Understanding how to earn",
                ].map((text, i) => (
                  <li key={i} style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "var(--white)" }}>
                    <X size={18} strokeWidth={3} style={{ flexShrink: 0, marginTop: "3px", color: "var(--orange)" }} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
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
            <div className="neo-card" style={{ textAlign: "center" }}>
              <p className="text-small" style={{ fontWeight: 800, marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Traditional</p>
              <h3>Theory → Exam → Forget</h3>
            </div>
            <div className="neo-card neo-card--dark" style={{ textAlign: "center" }}>
              <p className="text-small" style={{ fontWeight: 800, marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--yellow)" }}>Our Way</p>
              <h3 style={{ color: "var(--white)" }}>Learn → Build → Apply</h3>
            </div>
          </div>

          <div className="grid-4" style={{ marginTop: "2rem" }}>
            {["Expert-led sessions", "Hands-on workshops", "Daily project creation", "Portfolio building"].map((item, i) => (
              <div key={i} className="neo-card" style={{ textAlign: "center" }}>
                <p style={{ fontWeight: 700, fontSize: "1rem" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT MAKES THIS DIFFERENT ===== */}
      <section className="neo-section neo-section--cream reveal" id="different">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge section-header__tag">The Difference</span>
            <h2>What Makes This Different</h2>
          </div>

          <div className="grid-2" style={{ gap: "1.5rem" }}>
            {[
              { num: "01", title: "Build-First Learning", desc: "You don't just learn concepts. You create real outputs every day." },
              { num: "02", title: "AI as a Tool, Not a Replacement", desc: "We teach when to use AI, when to think yourself, and how to combine both." },
              { num: "03", title: "Skills That Actually Matter", desc: "Everything connects to real-world applications and income potential." },
              { num: "04", title: "Portfolio > Certificate", desc: "We give you projects, proof of work, and real skills — not just paper." },
            ].map((item, i) => (
              <div
                key={i}
                className="neo-card"
                style={{ borderLeft: "6px solid var(--orange)" }}
              >
                <span style={{
                  display: "inline-block",
                  fontWeight: 900,
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  padding: "0.3rem 0.7rem",
                  border: "2px solid var(--black)",
                  background: "var(--yellow)",
                  marginBottom: "0.75rem",
                }}>
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
      <section className="neo-section neo-section--dark reveal" id="daily" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div className="daily-flow__header">
            <div>
              <span className="neo-badge neo-badge--yellow" style={{ marginBottom: "1rem", display: "inline-block" }}>Daily Flow</span>
              <h2 style={{ color: "var(--white)", margin: 0 }}>A day at AI Summer School</h2>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontWeight: 500, maxWidth: "320px", textAlign: "right", fontSize: "0.95rem" }}>
              Every session is hands-on. Every day ends with something you built.
            </p>
          </div>

          {/* Horizontal schedule strip */}
          <div className="daily-flow__grid">
            {[
              { time: "9:00 – 10:30", label: "Session 1", title: "Masterclass", icon: <Brain size={22} strokeWidth={2.5} />, accent: "var(--yellow)" },
              { time: "10:45 – 12:15", label: "Session 2", title: "Deep Dive", icon: <Zap size={22} strokeWidth={2.5} />, accent: "var(--orange)" },
              { time: "12:15 – 1:15", label: "Lunch", title: "Break & Connect", icon: <Coffee size={22} strokeWidth={2.5} />, accent: "#555" },
              { time: "1:15 – 2:45", label: "Workshop", title: "Build It", icon: <Wrench size={22} strokeWidth={2.5} />, accent: "var(--yellow)" },
              { time: "2:45 – 3:30", label: "Debrief", title: "Show & Learn", icon: <MessageSquare size={22} strokeWidth={2.5} />, accent: "var(--orange)" },
            ].map((item, i) => (
              <div key={i} className="daily-flow__item" style={{ borderRight: i < 4 ? "2px solid rgba(255,255,255,0.1)" : "none" }}>
                <div style={{ height: "4px", background: item.accent }} />
                <div className="daily-flow__item-inner">
                  <div style={{ width: "38px", height: "38px", background: item.accent, display: "flex", alignItems: "center", justifyContent: "center", color: item.accent === "var(--yellow)" ? "var(--black)" : "var(--white)" }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: item.accent, marginBottom: "0.25rem" }}>{item.label}</div>
                    <div style={{ fontSize: "1rem", fontWeight: 800, color: "var(--white)", lineHeight: 1.2, marginBottom: "0.5rem" }}>{item.title}</div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>{item.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="daily-flow__footer">
            <span className="neo-badge neo-badge--yellow">7 Days · 7 Topics · 5+ Projects</span>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", fontWeight: 500 }}>
              Schedule repeats each day with a new theme.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section className="neo-section neo-section--cream reveal" id="learn">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge section-header__tag">Skills</span>
            <h2>What You Will Learn</h2>
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
              <div key={i} className="neo-card" style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <ArrowRight size={18} strokeWidth={3} style={{ flexShrink: 0, marginTop: "3px", color: "var(--orange)" }} />
                <p style={{ fontWeight: 600 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TOOLS ===== */}
      <section className="neo-section neo-section--dark reveal" id="tools">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge neo-badge--yellow section-header__tag">Tools</span>
            <h2 style={{ color: "var(--white)" }}>Tools & Platforms You&apos;ll Use</h2>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {[
              "ChatGPT", "Claude", "Gemini", "Notion AI", "Grammarly",
              "Canva", "Midjourney", "DALL·E", "Webflow", "Framer",
              "Vercel", "CapCut", "Runway", "Descript", "Google Sheets",
              "Zapier", "Make",
            ].map((tool, i) => (
              <span
                key={i}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  border: "2px solid rgba(255,255,255,0.2)",
                  color: "var(--white)",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUTCOMES ===== */}
      <section className="neo-section neo-section--yellow reveal" id="outcomes">
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
              <div key={i} className="neo-card" style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <Check size={20} strokeWidth={3} style={{ flexShrink: 0, marginTop: "2px", color: "var(--orange)" }} />
                <p style={{ fontWeight: 700 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section className="neo-section neo-section--dark reveal" id="philosophy">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="neo-badge neo-badge--yellow" style={{ marginBottom: "1.5rem" }}>Philosophy</span>
          <h2 style={{ color: "var(--white)", marginBottom: "1.5rem", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
            &quot;Tools are just tools.
            <br />
            Your thinking is the{" "}
            <span style={{ color: "var(--yellow)" }}>real product</span>.&quot;
          </h2>
          <div className="grid-3" style={{ marginTop: "2rem", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
            {["Clarity", "Creativity", "Execution"].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "1.5rem",
                  border: "2px solid rgba(255,255,255,0.15)",
                  textAlign: "center",
                }}
              >
                <h3 style={{ color: "var(--yellow)" }}>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section
        className="neo-section neo-section--yellow"
        id="program-cta"
        style={{ textAlign: "center", paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div className="container">
          <h2 style={{ marginBottom: "1.5rem" }}>This is where things change.</h2>
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
