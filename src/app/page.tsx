import Link from "next/link";
import FAQ from "@/components/FAQ";
import {
  X, Check, ArrowRight, Calendar, Users, Target,
  Globe, PenTool, Palette, Video, Briefcase,
  TrendingUp, Bot, Compass, Rocket
} from "lucide-react";

const faqItems = [
  {
    question: "Is this beginner friendly? I don't know anything about AI.",
    answer:
      "Yes — 100%. You don't need any prior experience in AI, coding, design, or content. We start from the basics and guide you step-by-step. What matters is your willingness to learn and try, not your current skill level.",
  },
  {
    question: "For Parents: Is this actually useful for my child's future?",
    answer:
      "Yes — and that's the entire point of this program. Most education today focuses on theory. This program focuses on practical skills, real-world application, and building confidence. Your child will leave with a portfolio of work, exposure to real career paths, and skills relevant in today's digital economy.",
  },
  {
    question: "Do I need to know coding?",
    answer:
      "No. You will learn to build using AI tools and no-code platforms. Even students with zero coding background will be able to build and launch their own website.",
  },
  {
    question: "Do I need to bring a laptop?",
    answer:
      "Yes, a laptop is required. This is a hands-on program where students build projects, use tools, and create real outputs. A basic laptop (no high specs needed) is enough.",
  },
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
    question: "Is it worth ₹10,000?",
    answer:
      "In 7 days, your child will build a website, create multiple projects, learn skills across AI, content, design and business, and gain clarity on career direction. That's far more valuable than passive courses or theory-based workshops. Group pricing is also available: ₹8,000 (group of 3) or ₹6,000 (group of 5).",
  },
  {
    question: "Can I join with my friends?",
    answer:
      "Yes — and we highly recommend it. Students who come with friends stay more consistent, learn faster, and enjoy the process more. Plus, you get better pricing when you apply as a group.",
  },
  {
    question: "What if I'm not sure about my career yet?",
    answer:
      "That's exactly why this exists. This program helps you explore different skill areas, understand what you enjoy, and see what you're good at. By the end, you'll have much more clarity.",
  },
  {
    question: "What is the daily time commitment?",
    answer:
      "Each day includes 2 expert sessions, hands-on workshops, and practice and building. Expect a full-day, immersive experience.",
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
];

export default function HomePage() {
  return (
    <>
      {/* 🚀 CLEAN VIBRANT HERO SECTION */}
      <section
        className="hero-clean bg-off-white"
        style={{ borderBottom: "var(--border)", padding: '3rem 0 4rem 0' }}
        id="hero"
      >
        <div className="container" style={{ textAlign: 'center' }}>

          <div className="neo-badge neo-badge--yellow" style={{ marginBottom: '2rem', display: 'inline-block' }}>
            AHMEDABAD · SUMMER 2026
          </div>

          <h1 className="font-punc mx-auto" style={{ maxWidth: '1000px', fontSize: 'clamp(3.5rem, 8vw, 7rem)', lineHeight: 0.95, marginBottom: '2rem', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
            LEARN WHAT SCHOOLS <br />
            <span style={{ color: 'var(--color-orange)', textShadow: '4px 4px 0px var(--color-black)' }}>DON&apos;T TEACH.</span>
          </h1>

          <p className="text-large font-heading mx-auto" style={{ maxWidth: '700px', marginBottom: '3rem', fontWeight: 600, fontSize: '1.25rem', color: 'var(--color-black)' }}>
            A 7-day intensive experience for the next generation of builders, creators, and entrepreneurs.
            Learn AI, build real products, and start your journey.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <Link href="/apply" className="neo-btn neo-btn--primary neo-btn--large hover-card" style={{ padding: '1rem 2.5rem', fontSize: '1.25rem' }}>
              APPLY NOW →
            </Link>
            <Link href="/program" className="neo-btn neo-btn--white neo-btn--large hover-card" style={{ padding: '1rem 2.5rem', fontSize: '1.25rem' }}>
              EXPLORE PROGRAM
            </Link>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span className="neo-badge neo-badge--white" style={{ fontSize: '1rem', padding: '0.75rem 1.5rem', boxShadow: '3px 3px 0px var(--color-black)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar size={18} strokeWidth={3} /> 7 DAYS INTENSIVE
            </span>
            <span className="neo-badge neo-badge--white" style={{ fontSize: '1rem', padding: '0.75rem 1.5rem', boxShadow: '3px 3px 0px var(--color-black)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Users size={18} strokeWidth={3} /> 13 EXPERT MENTORS
            </span>
            <span className="neo-badge neo-badge--white" style={{ fontSize: '1rem', padding: '0.75rem 1.5rem', boxShadow: '3px 3px 0px var(--color-black)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Target size={18} strokeWidth={3} /> AGES 15–24
            </span>
          </div>

        </div>
      </section>

      {/* ===== THE PROBLEM ===== */}
      <section className="neo-section neo-section--white reveal" id="problem">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge neo-badge--orange section-header__tag">
              The Problem
            </span>
            <h2>
              School teaches subjects.
              <br />
              The real world rewards skills.
            </h2>
          </div>

          <div className="grid-2" style={{ gap: "2rem" }}>
            <div className="neo-card neo-card--orange">
              <h3 style={{ marginBottom: "1rem" }}>Students today:</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <li style={{ fontWeight: 600, paddingLeft: "1.75rem", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, top: "2px" }}><X size={18} strokeWidth={3} /></span>
                  Spend years studying, but don&apos;t know how to earn
                </li>
                <li style={{ fontWeight: 600, paddingLeft: "1.75rem", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, top: "2px" }}><X size={18} strokeWidth={3} /></span>
                  Understand theory, but struggle with real-world execution
                </li>
                <li style={{ fontWeight: 600, paddingLeft: "1.75rem", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, top: "2px" }}><X size={18} strokeWidth={3} /></span>
                  Hear about AI everywhere, but can&apos;t actually use it
                </li>
              </ul>
            </div>

            <div className="neo-card">
              <h3 style={{ marginBottom: "1rem" }}>Parents worry:</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <li style={{ fontWeight: 600 }}>
                  &quot;Will my child be ready for the future?&quot;
                </li>
                <li style={{ fontWeight: 600 }}>
                  &quot;Are they learning skills that actually matter?&quot;
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE OPPORTUNITY ===== */}
      <section className="neo-section neo-section--yellow reveal" id="opportunity">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge section-header__tag">
              The Opportunity
            </span>
            <h2>
              AI is changing everything.
              <br />
              The right skills can change your life.
            </h2>
          </div>

          <div className="grid-3">
            <div className="neo-card">
              <h4>Content creators are earning online</h4>
            </div>
            <div className="neo-card">
              <h4>Students are building apps without coding</h4>
            </div>
            <div className="neo-card">
              <h4>Freelancers are working with global clients</h4>
            </div>
          </div>

          <div
            className="neo-card neo-card--purple"
            style={{ marginTop: "2rem", textAlign: "center" }}
          >
            <h3>
              Some students consume. <br />
              <span style={{ fontSize: "2rem" }}>Others build.</span>
            </h3>
          </div>
        </div>
      </section>

      {/* ===== THE TRANSFORMATION ===== */}
      <section className="neo-section neo-section--orange reveal" id="transformation">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge neo-badge--white section-header__tag">
              The Reality
            </span>
            <h2 style={{ color: "var(--color-black)" }}>Now, the Transformation.</h2>
          </div>

          <div className="grid-2" style={{ gap: "2rem" }}>
            <div className="neo-card neo-card--orange">
              <h3 style={{ marginBottom: "1rem" }}>Before</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <li style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}><X size={18} strokeWidth={3} style={{ flexShrink: 0, marginTop: "2px" }} /> Confused about your future</li>
                <li style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}><X size={18} strokeWidth={3} style={{ flexShrink: 0, marginTop: "2px" }} /> Dependent on marks and degrees</li>
                <li style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}><X size={18} strokeWidth={3} style={{ flexShrink: 0, marginTop: "2px" }} /> Unsure how to use AI</li>
              </ul>
            </div>
            <div className="neo-card neo-card--green">
              <h3 style={{ marginBottom: "1rem" }}>After</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <li style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}><Check size={18} strokeWidth={3} style={{ flexShrink: 0, marginTop: "2px" }} /> Building real projects</li>
                <li style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}><Check size={18} strokeWidth={3} style={{ flexShrink: 0, marginTop: "2px" }} /> Creating your own portfolio</li>
                <li style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}><Check size={18} strokeWidth={3} style={{ flexShrink: 0, marginTop: "2px" }} /> Understanding how to earn</li>
                <li style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}><Check size={18} strokeWidth={3} style={{ flexShrink: 0, marginTop: "2px" }} /> Having clarity on next steps</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU'LL BUILD ===== */}
      <section className="neo-section neo-section--white reveal" id="build">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge neo-badge--green section-header__tag">
              What You Build
            </span>
            <h2>This is not a theory-based program.</h2>
            <p>You will actually create:</p>
          </div>

          <div className="grid-3">
            {[
              { icon: Globe, title: "Live Personal Website", color: "neo-card--blue" },
              { icon: PenTool, title: "Content Portfolio", desc: "Blogs, posts, scripts", color: "" },
              { icon: Palette, title: "Brand Kit", desc: "Designs, visuals", color: "neo-card--purple" },
              { icon: Video, title: "Videos & Short-form Content", color: "neo-card--orange" },
              { icon: Briefcase, title: "Freelance-ready Offering", color: "neo-card--yellow" },
            ].map((item, i) => (
              <div key={i} className={`neo-card ${item.color}`}>
                <div style={{ marginBottom: "1rem" }}>
                  <item.icon size={36} strokeWidth={2.5} />
                </div>
                <h4>{item.title}</h4>
                {item.desc && (
                  <p className="text-small" style={{ marginTop: "0.25rem" }}>
                    {item.desc}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div
            className="neo-card mt-xl"
            style={{ textAlign: 'center', background: 'var(--color-blue)', color: 'var(--color-black)', borderRadius: 'var(--radius-md)' }}
          >
            <h3>
              You don&apos;t leave with notes. You leave with{" "}
              <span style={{ color: "var(--color-yellow)" }}>assets</span>.
            </h3>
          </div>
        </div>
      </section>

      {/* ===== 7-DAY EXPERIENCE ===== */}
      <section className="neo-section neo-section--blue reveal" id="experience">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge section-header__tag">
              7-Day Experience
            </span>
            <h2>A structured journey from learning to earning</h2>
          </div>

          <div className="grid-2" style={{ gap: "1rem" }}>
            {[
              { day: "Day 1", title: "AI Mindset", desc: "Understand AI & how to think", color: "var(--color-purple)" },
              { day: "Day 2", title: "Writing", desc: "Create content that connects & converts", color: "var(--color-orange)" },
              { day: "Day 3", title: "Websites", desc: "Build and launch your own site", color: "var(--color-green)" },
              { day: "Day 4", title: "Design", desc: "Create visuals and brand identity", color: "var(--color-yellow)" },
              { day: "Day 5", title: "Video", desc: "Shoot, edit, and publish content", color: "var(--color-blue)" },
              { day: "Day 6", title: "Business", desc: "Turn skills into income", color: "var(--color-purple)" },
              { day: "Day 7", title: "Career", desc: "Plan your next 90 days", color: "var(--color-orange)" },
            ].map((item, i) => (
              <div
                key={i}
                className="neo-card"
                style={{ background: item.color, display: "flex", gap: "1rem", alignItems: "center" }}
              >
                <span
                  style={{
                    fontWeight: 900,
                    fontSize: "1.5rem",
                    minWidth: "70px",
                    textAlign: "center",
                    padding: "0.5rem",
                    background: "var(--color-white)",
                    border: "var(--border)",
                  }}
                >
                  {item.day}
                </span>
                <div>
                  <h4>{item.title}</h4>
                  <p className="text-small">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <Link href="/curriculum" className="neo-btn neo-btn--dark neo-btn--large">
              View Full Curriculum →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== OUTCOMES ===== */}
      <section className="neo-section neo-section--green reveal" id="outcomes">
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
                <span style={{ marginTop: "2px" }}><Check size={24} strokeWidth={3} /></span>
                <p style={{ fontWeight: 600 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="neo-section neo-section--white reveal" id="pricing">
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: "600px", margin: "0 auto var(--space-2xl)" }}>
            <span className="neo-badge neo-badge--yellow section-header__tag">
              Pricing
            </span>
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
              <p className="pricing-card__subtitle">
                Save ₹2,000 each · Group of 3
              </p>
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
                <span className="neo-badge neo-badge--green">Best Value</span>
              </div>
              <h3 style={{ marginBottom: "0.5rem" }}>Bring Your Squad</h3>
              <div className="pricing-card__price">
                ₹6,000 <span>/ student</span>
              </div>
              <p className="pricing-card__subtitle">
                Save ₹4,000 each · Group of 5
              </p>
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

          <div
            className="neo-card"
            style={{ marginTop: "2rem", textAlign: "center" }}
          >
            <h4>
              Don&apos;t come alone. Come with people who will build with you.
            </h4>
          </div>
        </div>
      </section>

      {/* ===== WHO IS THIS FOR ===== */}
      <section className="neo-section neo-section--purple reveal" id="who">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge section-header__tag">
              Who Is This For
            </span>
            <h2>Perfect for:</h2>
          </div>

          <div className="grid-2" style={{ gap: "2rem" }}>
            <div className="neo-card neo-card--green">
              <h3 style={{ marginBottom: "1rem" }}>Ideal for</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <li style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}><Check size={20} strokeWidth={3} style={{ flexShrink: 0, marginTop: "2px" }} /> Students (15–24) who want real skills</li>
                <li style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}><Check size={20} strokeWidth={3} style={{ flexShrink: 0, marginTop: "2px" }} /> Beginners curious about AI</li>
                <li style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}><Check size={20} strokeWidth={3} style={{ flexShrink: 0, marginTop: "2px" }} /> Creators who want to build something</li>
                <li style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}><Check size={20} strokeWidth={3} style={{ flexShrink: 0, marginTop: "2px" }} /> Students unsure about career direction</li>
              </ul>
            </div>
            <div className="neo-card">
              <h3 style={{ marginBottom: "1rem" }}>Not for</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <li style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}><X size={20} strokeWidth={3} style={{ flexShrink: 0, marginTop: "2px" }} /> Passive learners</li>
                <li style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}><X size={20} strokeWidth={3} style={{ flexShrink: 0, marginTop: "2px" }} /> People only looking for certificates</li>
                <li style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}><X size={20} strokeWidth={3} style={{ flexShrink: 0, marginTop: "2px" }} /> Those not willing to take action</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOR PARENTS ===== */}
      <section className="neo-section neo-section--white reveal" id="parents">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge neo-badge--blue section-header__tag">
              For Parents
            </span>
            <h2>
              This is not just a summer activity.
              <br />
              It&apos;s a career head start.
            </h2>
          </div>

          <div className="grid-2">
            {[
              { icon: Rocket, text: "Learn practical, future-ready skills" },
              { icon: TrendingUp, text: "Build confidence through real projects" },
              { icon: Bot, text: "Understand how to use AI responsibly" },
              { icon: Compass, text: "Explore real career paths" },
            ].map((item, i) => (
              <div key={i} className="neo-card" style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <span><item.icon size={28} strokeWidth={2.5} /></span>
                <p style={{ fontWeight: 600, fontSize: "1.05rem" }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div
            className="neo-card neo-card--blue"
            style={{ marginTop: "2rem", textAlign: "center" }}
          >
            <h3>Instead of just learning, they start doing.</h3>
          </div>
        </div>
      </section>

      {/* ===== VENUE ===== */}
      <section className="neo-section neo-section--orange reveal" id="venue">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge section-header__tag">
              Venue & Experience
            </span>
            <h2>Ahmedabad Management Association (AMA)</h2>
            <p>A professional learning environment designed for focused growth.</p>
          </div>

          <div className="grid-4">
            {[
              "Structured daily schedule",
              "Interactive sessions",
              "Peer collaboration",
              "Mentorship access",
            ].map((item, i) => (
              <div key={i} className="neo-card" style={{ textAlign: "center" }}>
                <p style={{ fontWeight: 700 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="neo-section neo-section--white reveal" id="faq">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge neo-badge--purple section-header__tag">
              FAQ
            </span>
            <h2>Still thinking about it?</h2>
            <p>Here are honest answers.</p>
          </div>

          <div style={{ maxWidth: "750px" }}>
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section
        className="neo-section neo-section--yellow"
        id="final-cta"
        style={{ textAlign: "center" }}
      >
        <div className="container">
          <h2 style={{ marginBottom: "1rem" }}>Ready to build your future?</h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
            <span className="neo-badge">Limited Seats</span>
            <span className="neo-badge">No Exams</span>
            <span className="neo-badge">Just the Willingness to Learn</span>
          </div>
          <Link href="/apply" className="neo-btn neo-btn--dark neo-btn--large">
            Apply Now →
          </Link>
          <p style={{ marginTop: "1.5rem", fontWeight: 600, maxWidth: "100%" }}>
            If you&apos;ve read this far, just take the first step.
          </p>
        </div>
      </section>
    </>
  );
}
