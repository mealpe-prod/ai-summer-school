import Link from "next/link";
import type { Metadata } from "next";
import {
  Brain, PenLine, Globe, Palette, Video, BarChart2, Rocket,
  Calendar, Mic, Wrench, Target, CheckCircle, GraduationCap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Curriculum – AI Summer School 2026",
  description:
    "7 Days. 13 Experts. A step-by-step journey from learning to building to earning. Explore the full day-by-day curriculum.",
};

const days = [
  {
    day: 1,
    icon: <Brain size={22} strokeWidth={2.5} />,
    title: "The AI Mindset",
    subtitle: "Why thinking matters more than tools",
    color: "var(--color-purple)",
    philosophy:
      "AI is powerful — but it's still just a tool. The real advantage comes from how you think, decide, and apply it.",
    learn: [
      "What AI is (and what it isn't)",
      "Where AI is useful vs where human thinking wins",
      "How to use AI as a co-pilot, not a replacement",
      "Building your own perspective on AI",
    ],
    build: [
      "Explore leading AI tools",
      "Participate in discussions & debates",
      "Create your Personal AI Manifesto",
    ],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity", "Midjourney"],
  },
  {
    day: 2,
    icon: <PenLine size={22} strokeWidth={2.5} />,
    title: "AI-Powered Writing",
    subtitle: "Content that connects and converts",
    color: "var(--color-orange)",
    philosophy:
      "Writing is one of the most valuable skills today. AI makes you faster — but your thinking makes it powerful.",
    learn: [
      "How to write engaging content",
      "Hooks, storytelling, and clarity",
      "Blog writing, social media posts, and newsletters",
      "Sales copy and scriptwriting",
    ],
    build: [
      "Create blog posts and social content",
      "Write ad copy and email campaigns",
      "Build your first portfolio piece",
    ],
    tools: ["ChatGPT", "Notion AI", "Grammarly", "Hemingway"],
  },
  {
    day: 3,
    icon: <Globe size={22} strokeWidth={2.5} />,
    title: "Websites & Apps",
    subtitle: "Build anything, no CS degree needed",
    color: "var(--color-green)",
    philosophy:
      "You don't need to be a programmer to build online. AI + no-code tools = your entry into the internet economy.",
    learn: [
      "How the web works (domains, hosting, basics)",
      "AI-assisted coding",
      "No-code tools for building apps",
      "SEO basics and deployment",
    ],
    build: [
      "Build your personal website from scratch",
      "Deploy it live with your own domain",
    ],
    tools: ["Cursor / VS Code", "Framer", "Webflow", "Vercel", "Netlify"],
  },
  {
    day: 4,
    icon: <Palette size={22} strokeWidth={2.5} />,
    title: "Visual Design & AI Art",
    subtitle: "From ideas to stunning visuals",
    color: "var(--color-yellow)",
    philosophy: "When everyone has AI, taste becomes your advantage.",
    learn: [
      "Design fundamentals (color, typography, composition)",
      "Branding basics",
      "AI image generation and prompt design",
      "Presentation and visual storytelling",
    ],
    build: [
      "Create a brand identity (logo + color palette)",
      "Design social media graphics",
      "Build your visual portfolio",
    ],
    tools: ["Canva", "Midjourney", "DALL·E", "Adobe Firefly", "Figma"],
  },
  {
    day: 5,
    icon: <Video size={22} strokeWidth={2.5} />,
    title: "Video & Audio Production",
    subtitle: "Create content people can't scroll past",
    color: "var(--color-blue)",
    philosophy:
      "Video is the most powerful format on the internet. If you can create content, you can build influence.",
    learn: [
      "Video formats across platforms",
      "Hooks, retention, and storytelling",
      "Editing fundamentals",
      "AI tools for video, audio, and voice",
    ],
    build: [
      "Shoot and edit videos using your phone",
      "Create a 60-second AI-powered video",
      "Learn basics of podcasting",
    ],
    tools: ["CapCut", "DaVinci Resolve", "Runway", "Pika", "ElevenLabs", "Descript"],
  },
  {
    day: 6,
    icon: <BarChart2 size={22} strokeWidth={2.5} />,
    title: "Data, Automation & Business",
    subtitle: "Turn skills into income",
    color: "var(--color-purple)",
    philosophy: "Skills alone are not enough. You need to package and monetize them.",
    learn: [
      "Using spreadsheets with AI",
      "Data analysis basics",
      "Automation using tools like Zapier",
      "Freelancing, pricing, and client communication",
      "Building your personal brand",
    ],
    build: [
      "Create simple automations",
      "Design your freelance service offering",
      "Optimize your online presence",
    ],
    tools: ["Google Sheets", "Zapier", "Make", "Notion", "LinkedIn"],
  },
  {
    day: 7,
    icon: <Rocket size={22} strokeWidth={2.5} />,
    title: "Graduation & Career Roadmap",
    subtitle: "Your roadmap to winning the market",
    color: "var(--color-orange)",
    philosophy: "Skills are step one. Direction is what creates success.",
    learn: [
      "The 4 pillars: Skills, Network, Portfolio, Mindset",
      "Career paths: Freelance vs Job vs Startup",
      "How to plan your next 90 days",
    ],
    build: [
      "Present your portfolio",
      "Build a personal 90-day action plan",
      "Connect with mentors and peers",
    ],
    tools: [],
  },
];

export default function CurriculumPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="neo-section neo-section--orange" id="curriculum-hero">
        <div className="container page-hero">
          <span className="neo-badge neo-badge--yellow">Curriculum</span>
          <h1 style={{ marginTop: "1.5rem" }}>
            7 Days. 13 Experts.
            <br />
            One Week That Changes How You Think.
          </h1>
          <p className="text-large" style={{ marginTop: "1.25rem" }}>
            This is not a syllabus. This is a step-by-step journey from
            learning → building → earning.
          </p>
          <div className="page-hero__meta">
            <span className="neo-badge" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              <Calendar size={14} strokeWidth={2.5} /> 7 Days, structured
            </span>
            <span className="neo-badge" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              <Mic size={14} strokeWidth={2.5} /> 13 industry experts
            </span>
            <span className="neo-badge" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              <Wrench size={14} strokeWidth={2.5} /> Daily hands-on builds
            </span>
            <span className="neo-badge" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              <Target size={14} strokeWidth={2.5} /> Portfolio-first
            </span>
          </div>
          <div className="page-hero__cta">
            <Link href="/apply" className="neo-btn neo-btn--dark neo-btn--large">
              Apply Now →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="neo-section neo-section--white reveal" id="how-it-works">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "1.5rem" }}>How the Curriculum Works</h2>
          <p
            className="text-large mx-auto"
            style={{ marginBottom: "2rem", maxWidth: "600px" }}
          >
            You don&apos;t just learn something new each day — you build
            something real every day.
          </p>
        </div>
      </section>

      {/* ===== DAY BY DAY ===== */}
      {days.map((day) => (
        <section
          key={day.day}
          className="neo-section reveal"
          style={{
            background: day.day % 2 === 0 ? "var(--color-off-white)" : "var(--color-white)",
          }}
          id={`day-${day.day}`}
        >
          <div className="container">
            <div className="day-card" style={{ overflow: "visible" }}>
              <div
                className="day-card__header"
                style={{ background: day.color }}
              >
                <div className="day-card__number" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  {day.icon} Day {day.day}
                </div>
                <div>
                  <div className="day-card__title">{day.title}</div>
                  <div className="day-card__subtitle">{day.subtitle}</div>
                </div>
              </div>

              <div className="day-card__body">
                <div
                  className="neo-card"
                  style={{
                    background: day.color,
                    marginBottom: "1.5rem",
                    opacity: 0.85,
                  }}
                >
                  <p style={{ fontWeight: 600, fontStyle: "italic" }}>
                    &quot;{day.philosophy}&quot;
                  </p>
                </div>

                <div
                  className="grid-2"
                  style={{ gap: "1.5rem" }}
                >
                  <div className="day-card__section">
                    <div className="day-card__section-title">
                      What You&apos;ll Learn
                    </div>
                    <ul className="day-card__list">
                      {day.learn.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="day-card__section">
                    <div className="day-card__section-title">
                      What You&apos;ll Build
                    </div>
                    <ul className="day-card__list">
                      {day.build.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {day.tools.length > 0 && (
                  <div className="day-card__section" style={{ marginTop: "1rem" }}>
                    <div className="day-card__section-title">Tools</div>
                    <div className="day-card__tools">
                      {day.tools.map((tool, i) => (
                        <span key={i} className="day-card__tool">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ===== GRADUATE WITH ===== */}
      <section className="neo-section neo-section--green reveal" id="graduate">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge section-header__tag" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              <GraduationCap size={15} strokeWidth={2.5} /> Graduation
            </span>
            <h2>What You Graduate With</h2>
          </div>

          <div className="grid-3">
            {[
              "5+ real projects",
              "Live personal website",
              "Freelance-ready skills",
              "90-day execution plan",
              "Certificate + network",
            ].map((item, i) => (
              <div key={i} className="neo-card" style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <CheckCircle size={20} strokeWidth={2.5} style={{ flexShrink: 0, color: "var(--color-black)" }} />
                <p style={{ fontWeight: 600 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section
        className="neo-section neo-section--yellow"
        id="curriculum-cta"
        style={{ textAlign: "center" }}
      >
        <div className="container">
          <h2 style={{ marginBottom: "1rem" }}>
            This is not just a curriculum. It&apos;s a launchpad.
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
            <span className="neo-badge">Learn</span>
            <span className="neo-badge">Build</span>
            <span className="neo-badge">Ship</span>
            <span className="neo-badge">Grow</span>
          </div>
          <Link href="/apply" className="neo-btn neo-btn--dark neo-btn--large">
            Apply Now →
          </Link>
        </div>
      </section>
    </>
  );
}
