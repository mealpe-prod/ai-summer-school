import Link from "next/link";
import FAQ from "@/components/FAQ";
import {
  X, Check, ArrowRight, Calendar, Users, Target,
  Globe, PenTool, Palette, Video, Briefcase,
  TrendingUp, Bot, Compass, Rocket, Zap, Award
} from "lucide-react";

const faqCategories = [
  {
    label: "Getting Started",
    items: [
      {
        question: "Is this beginner friendly? I don't know anything about AI.",
        answer:
          "Yes — 100%. You don't need any prior experience in AI, coding, design, or content. We start from the basics and guide you step-by-step. What matters is your willingness to learn and try, not your current skill level.",
      },
      {
        question: "Do I need to know coding?",
        answer:
          "No. You will learn to build using AI tools and no-code platforms. Even students with zero coding background will be able to build and launch their own website.",
      },
      {
        question: "What if I'm not sure about my career yet?",
        answer:
          "That's exactly why this exists. This program helps you explore different skill areas, understand what you enjoy, and see what you're good at. By the end, you'll have much more clarity.",
      },
      {
        question: "For Parents: Is this actually useful for my child's future?",
        answer:
          "Yes — and that's the entire point of this program. Most education today focuses on theory. This program focuses on practical skills, real-world application, and building confidence. Your child will leave with a portfolio of work, exposure to real career paths, and skills relevant in today's digital economy.",
      },
    ],
  },
  {
    label: "The Experience",
    items: [
      {
        question: "Will there be exams or tests?",
        answer:
          "No. There are no exams, no marks, no theoretical tests. Instead, your progress is based on what you build.",
      },
      {
        question: "Will I get a certificate?",
        answer:
          "Yes. You will receive a certificate upon completion. But more importantly, you'll have real projects to show — which matter far more.",
      },
      {
        question: "What is the daily time commitment?",
        answer:
          "Each day includes 2 expert sessions, hands-on workshops, and practice and building. Expect a full-day, immersive experience.",
      },
      {
        question: "Can I join with my friends?",
        answer:
          "Yes — and we highly recommend it. Students who come with friends stay more consistent, learn faster, and enjoy the process more. Plus, you get better pricing when you apply as a group.",
      },
    ],
  },
  {
    label: "Logistics & Pricing",
    items: [
      {
        question: "Do I need to bring a laptop?",
        answer:
          "Yes, a laptop is required. This is a hands-on program where students build projects, use tools, and create real outputs. A basic laptop (no high specs needed) is enough.",
      },
      {
        question: "Where is the program happening?",
        answer:
          "At Ahmedabad Management Association (AMA), Ahmedabad. A professional environment designed for focused learning.",
      },
      {
        question: "How many students will be there?",
        answer:
          "We are keeping the batch limited in size and highly interactive. This ensures personal attention and better outcomes.",
      },
      {
        question: "Is it worth ₹10,000?",
        answer:
          "In 7 days, your child will build a website, create multiple projects, learn skills across AI, content, design and business, and gain clarity on career direction. Group pricing: ₹8,000 (group of 3) or ₹6,000 (group of 5).",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="neo-section neo-section--dark"
        id="hero"
        style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
      >
        <div className="container">
          <div className="hero-grid">
            {/* Left — Copy + CTAs */}
            <div className="hero-grid__left">
              <div className="neo-badge neo-badge--yellow" style={{ marginBottom: "1.5rem" }}>
                <Calendar size={14} strokeWidth={3} /> Summer 2026 · Ahmedabad
              </div>

              <h1 style={{ marginBottom: "1.5rem", color: "var(--white)" }} id="main-hero-heading">
                Learn what
                <br />
                schools{" "}
                <span style={{ color: "var(--yellow)", display: "inline-block" }}>
                  don&apos;t teach.
                </span>
              </h1>

              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: 1.6,
                  color: "var(--text-muted-light)",
                  maxWidth: "520px",
                  marginBottom: "2rem",
                  fontWeight: 500,
                }}
              >
                A 7-day intensive for the next generation of builders, creators,
                and entrepreneurs. Learn AI, build real products, and start your journey.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/apply" className="neo-btn neo-btn--primary neo-btn--large">
                  Apply Now →
                </Link>
                <Link href="/program" className="neo-btn neo-btn--ghost neo-btn--large">
                  Explore Program
                </Link>
              </div>
            </div>

            {/* Right — Stats cards */}
            <div className="hero-grid__right">
              {[
                { num: "7", label: "Intensive Days", sub: "Build. Learn. Ship.", icon: <Calendar size={18} strokeWidth={2.5} /> },
                { num: "13", label: "Expert Mentors", sub: "Real practitioners", icon: <Users size={18} strokeWidth={2.5} /> },
                { num: "5+", label: "Real Projects", sub: "Portfolio ready", icon: <Briefcase size={18} strokeWidth={2.5} /> },
              ].map((stat, i) => (
                <div key={i} className="hero-stat-card">
                  <div className="hero-stat-card__num">{stat.num}</div>
                  <div className="hero-stat-card__info">
                    <div className="hero-stat-card__label">{stat.label}</div>
                    <div className="hero-stat-card__sub">{stat.sub}</div>
                  </div>
                  <div className="hero-stat-card__icon">{stat.icon}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE PROBLEM ===== */}
      <section className="neo-section neo-section--cream reveal" id="problem">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge neo-badge--orange section-header__tag">The Problem</span>
            <h2>
              School teaches subjects.
              <br />
              The real world rewards{" "}
              <span style={{ color: "var(--orange)" }}>skills</span>.
            </h2>
          </div>

          <div className="grid-2" style={{ gap: "2rem" }}>
            <div className="neo-card neo-card--dark">
              <h3 style={{ marginBottom: "1.25rem", color: "var(--white)" }}>Students today:</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Spend years studying, but don't know how to earn",
                  "Understand theory, but struggle with real-world execution",
                  "Hear about AI everywhere, but can't actually use it",
                ].map((text, i) => (
                  <li key={i} style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.6rem", color: "var(--white)" }}>
                    <X size={18} strokeWidth={3} style={{ flexShrink: 0, marginTop: "3px", color: "var(--orange)" }} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="neo-card">
              <h3 style={{ marginBottom: "1.25rem" }}>Parents worry:</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <li style={{ fontWeight: 600, fontSize: "1.1rem" }}>
                  &quot;Will my child be ready for the future?&quot;
                </li>
                <li style={{ fontWeight: 600, fontSize: "1.1rem" }}>
                  &quot;Are they learning skills that actually matter?&quot;
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE OPPORTUNITY ===== */}
      <section className="neo-section neo-section--dark reveal" id="opportunity">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge neo-badge--yellow section-header__tag">The Opportunity</span>
            <h2 style={{ color: "var(--white)" }}>
              AI is changing everything.
              <br />
              The right skills can change{" "}
              <span style={{ color: "var(--yellow)" }}>your life</span>.
            </h2>
          </div>

          <div className="grid-3">
            {[
              "Content creators are earning online",
              "Students are building apps without coding",
              "Freelancers are working with global clients",
            ].map((text, i) => (
              <div key={i} className="neo-card" style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <Zap size={20} strokeWidth={3} style={{ flexShrink: 0, marginTop: "3px", color: "var(--orange)" }} />
                <h4>{text}</h4>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "2.5rem",
              border: "3px solid var(--yellow)",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "var(--white)" }}>
              Some students consume.{" "}
              <span style={{ color: "var(--yellow)" }}>Others build.</span>
            </h3>
          </div>
        </div>
      </section>

      {/* ===== TRANSFORMATION ===== */}
      <section className="neo-section neo-section--yellow reveal" id="transformation">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge section-header__tag">The Shift</span>
            <h2>The Transformation.</h2>
          </div>

          <div className="grid-2" style={{ gap: "2rem" }}>
            <div className="neo-card">
              <h3 style={{ marginBottom: "1.25rem" }}>Before</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Confused about your future",
                  "Dependent on marks and degrees",
                  "Unsure how to use AI",
                ].map((text, i) => (
                  <li key={i} style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                    <X size={18} strokeWidth={3} style={{ flexShrink: 0, marginTop: "3px" }} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="neo-card neo-card--dark">
              <h3 style={{ marginBottom: "1.25rem", color: "var(--yellow)" }}>After</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Building real projects",
                  "Creating your own portfolio",
                  "Understanding how to earn",
                  "Having clarity on next steps",
                ].map((text, i) => (
                  <li key={i} style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "var(--white)" }}>
                    <Check size={18} strokeWidth={3} style={{ flexShrink: 0, marginTop: "3px", color: "var(--yellow)" }} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU'LL BUILD ===== */}
      <section className="neo-section neo-section--cream reveal" id="build">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge section-header__tag">What You Build</span>
            <h2>
              Not theory. <span style={{ color: "var(--orange)" }}>Real outputs.</span>
            </h2>
          </div>

          <div className="grid-3">
            {[
              { icon: Globe, title: "Live Personal Website" },
              { icon: PenTool, title: "Content Portfolio" },
              { icon: Palette, title: "Brand Kit & Visuals" },
              { icon: Video, title: "Videos & Short-form Content" },
              { icon: Briefcase, title: "Freelance-ready Offering" },
            ].map((item, i) => (
              <div key={i} className="neo-card" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "var(--black)",
                    border: "var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <item.icon size={22} strokeWidth={2.5} style={{ color: "var(--yellow)" }} />
                </div>
                <h4>{item.title}</h4>
              </div>
            ))}
          </div>

          <div
            className="neo-card neo-card--dark"
            style={{ marginTop: "2.5rem", textAlign: "center" }}
          >
            <h3 style={{ color: "var(--white)" }}>
              You don&apos;t leave with notes. You leave with{" "}
              <span style={{ color: "var(--yellow)" }}>assets</span>.
            </h3>
          </div>
        </div>
      </section>

      {/* ===== 7-DAY EXPERIENCE ===== */}
      <section className="neo-section neo-section--dark reveal" id="experience">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge neo-badge--yellow section-header__tag">7-Day Journey</span>
            <h2 style={{ color: "var(--white)" }}>
              From learning to <span style={{ color: "var(--yellow)" }}>earning</span>.
            </h2>
          </div>

          <div className="grid-2" style={{ gap: "1rem" }}>
            {[
              { day: "01", title: "AI Mindset", desc: "Understand AI & how to think" },
              { day: "02", title: "Writing", desc: "Create content that connects & converts" },
              { day: "03", title: "Websites", desc: "Build and launch your own site" },
              { day: "04", title: "Design", desc: "Create visuals and brand identity" },
              { day: "05", title: "Video", desc: "Shoot, edit, and publish content" },
              { day: "06", title: "Business", desc: "Turn skills into income" },
              { day: "07", title: "Career", desc: "Plan your next 90 days" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  padding: "1.25rem 1.5rem",
                  border: "2px solid rgba(255,255,255,0.12)",
                  transition: "all 0.15s ease",
                }}
              >
                <span
                  style={{
                    fontWeight: 900,
                    fontSize: "1.8rem",
                    color: "var(--yellow)",
                    minWidth: "48px",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {item.day}
                </span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--white)" }}>{item.title}</div>
                  <div style={{ fontSize: "0.9rem", color: "var(--text-muted-light)", fontWeight: 500 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <Link href="/curriculum" className="neo-btn neo-btn--primary neo-btn--large">
              View Full Curriculum →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== OUTCOMES ===== */}
      <section className="neo-section neo-section--yellow reveal" id="outcomes">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge section-header__tag">Outcomes</span>
            <h2>By the end of 7 days, you will have:</h2>
          </div>

          <div className="grid-3">
            {[
              "5+ real projects in your portfolio",
              "A live website you built yourself",
              "Skills in AI, content, design & business",
              "A clear 90-day action plan",
              "Confidence to start earning",
            ].map((item, i) => (
              <div key={i} className="neo-card" style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <Check size={22} strokeWidth={3} style={{ flexShrink: 0, marginTop: "2px", color: "var(--orange)" }} />
                <p style={{ fontWeight: 700 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="neo-section neo-section--cream reveal" id="pricing">
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: "600px", margin: "0 auto var(--s-3xl)" }}>
            <span className="neo-badge neo-badge--yellow section-header__tag">Pricing</span>
            <h2>Learn Together. Save More.</h2>
          </div>

          <div className="grid-3" style={{ alignItems: "stretch" }}>
            <div className="pricing-card">
              <h3 style={{ marginBottom: "0.5rem" }}>Individual Pass</h3>
              <div className="pricing-card__price">
                ₹10,000 <span>/ student</span>
              </div>
              <p className="pricing-card__subtitle">Full access to all 7 days</p>
              <ul className="pricing-card__features">
                <li>All 7 days access</li>
                <li>13 expert sessions</li>
                <li>Hands-on workshops</li>
                <li>Certificate</li>
                <li>Portfolio review</li>
              </ul>
              <Link href="/apply" className="neo-btn neo-btn--secondary" style={{ width: "100%" }}>
                Apply Now
              </Link>
            </div>

            <div className="pricing-card pricing-card--featured">
              <div className="pricing-card__badge">
                <span className="neo-badge neo-badge--orange">Most Popular</span>
              </div>
              <h3 style={{ marginBottom: "0.5rem" }}>Bring 2 Friends</h3>
              <div className="pricing-card__price">
                ₹8,000 <span>/ student</span>
              </div>
              <p className="pricing-card__subtitle">Save ₹2,000 each · Group of 3</p>
              <ul className="pricing-card__features">
                <li>Everything in Individual</li>
                <li>Save ₹2,000 per person</li>
                <li>Group collaboration</li>
                <li>Stay accountable together</li>
                <li>Build faster as a team</li>
              </ul>
              <Link href="/apply" className="neo-btn neo-btn--dark" style={{ width: "100%" }}>
                Apply as Group →
              </Link>
            </div>

            <div className="pricing-card">
              <div className="pricing-card__badge">
                <span className="neo-badge neo-badge--yellow">Best Value</span>
              </div>
              <h3 style={{ marginBottom: "0.5rem" }}>Bring Your Squad</h3>
              <div className="pricing-card__price">
                ₹6,000 <span>/ student</span>
              </div>
              <p className="pricing-card__subtitle">Save ₹4,000 each · Group of 5</p>
              <ul className="pricing-card__features">
                <li>Everything in Individual</li>
                <li>Save ₹4,000 per person</li>
                <li>Maximum team synergy</li>
                <li>Peer learning boost</li>
                <li>Have more fun together</li>
              </ul>
              <Link href="/apply" className="neo-btn neo-btn--secondary" style={{ width: "100%" }}>
                Apply as Squad
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO IS THIS FOR ===== */}
      <section className="neo-section neo-section--dark reveal" id="who">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge neo-badge--yellow section-header__tag">Who Is This For</span>
            <h2 style={{ color: "var(--white)" }}>Perfect for:</h2>
          </div>

          <div className="grid-2" style={{ gap: "2rem" }}>
            <div className="neo-card neo-card--yellow">
              <h3 style={{ marginBottom: "1.25rem" }}>Ideal for</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Students (15–24) who want real skills",
                  "Beginners curious about AI",
                  "Creators who want to build something",
                  "Students unsure about career direction",
                ].map((text, i) => (
                  <li key={i} style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                    <Check size={20} strokeWidth={3} style={{ flexShrink: 0, marginTop: "2px" }} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="neo-card">
              <h3 style={{ marginBottom: "1.25rem" }}>Not for</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Passive learners",
                  "People only looking for certificates",
                  "Those not willing to take action",
                ].map((text, i) => (
                  <li key={i} style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                    <X size={20} strokeWidth={3} style={{ flexShrink: 0, marginTop: "2px" }} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOR PARENTS ===== */}
      <section className="neo-section neo-section--cream reveal" id="parents">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge neo-badge--orange section-header__tag">For Parents</span>
            <h2>
              This is not just a summer activity.
              <br />
              It&apos;s a <span style={{ color: "var(--orange)" }}>career head start</span>.
            </h2>
          </div>

          <div className="grid-2">
            {[
              { icon: Rocket, text: "Learn practical, future-ready skills" },
              { icon: TrendingUp, text: "Build confidence through real projects" },
              { icon: Bot, text: "Understand how to use AI responsibly" },
              { icon: Compass, text: "Explore real career paths" },
            ].map((item, i) => (
              <div key={i} className="neo-card" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "var(--yellow)",
                    border: "var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <item.icon size={22} strokeWidth={2.5} />
                </div>
                <p style={{ fontWeight: 600, fontSize: "1.05rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VENUE ===== */}
      <section className="neo-section neo-section--dark reveal" id="venue">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge neo-badge--yellow section-header__tag">Venue</span>
            <h2 style={{ color: "var(--white)" }}>
              Ahmedabad Management Association
            </h2>
            <p style={{ color: "var(--text-muted-light)" }}>
              A professional learning environment designed for focused growth.
            </p>
          </div>

          <div className="grid-4">
            {[
              "Structured daily schedule",
              "Interactive sessions",
              "Peer collaboration",
              "Mentorship access",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "1.5rem",
                  border: "2px solid rgba(255,255,255,0.15)",
                  textAlign: "center",
                }}
              >
                <p style={{ fontWeight: 700, fontSize: "1rem", color: "var(--white)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="neo-section neo-section--cream reveal" id="faq">
        <div className="container">
          <div className="section-header" style={{ marginBottom: "2.5rem" }}>
            <span className="neo-badge section-header__tag">FAQ</span>
            <h2>Still thinking about it?</h2>
            <p>Honest answers, grouped by what matters most.</p>
          </div>

          <FAQ categories={faqCategories} />
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section
        className="neo-section neo-section--dark"
        id="final-cta"
        style={{ textAlign: "center", paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div className="container">
          <h2 style={{ color: "var(--white)", marginBottom: "1.5rem" }}>
            Ready to build
            <br />
            <span style={{ color: "var(--yellow)" }}>your future?</span>
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <span className="neo-badge neo-badge--yellow">Limited Seats</span>
            <span className="neo-badge">No Exams</span>
            <span className="neo-badge">Just the Willingness to Learn</span>
          </div>
          <Link href="/apply" className="neo-btn neo-btn--primary neo-btn--large">
            Apply Now →
          </Link>
          <p style={{ marginTop: "1.5rem", fontWeight: 500, color: "var(--text-muted-light)", maxWidth: "100%" }}>
            If you&apos;ve read this far, just take the first step.
          </p>
        </div>
      </section>
    </>
  );
}
