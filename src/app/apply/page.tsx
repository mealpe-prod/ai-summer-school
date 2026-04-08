"use client";

import Link from "next/link";
import { useState } from "react";
import {
  XCircle, CheckCircle, Phone, Mail, PartyPopper
} from "lucide-react";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    school: "",
    whyJoin: "",
    curious: "",
    builtBefore: "",
    walkAway: "",
    friend1Name: "",
    friend1Contact: "",
    friend2Name: "",
    friend2Contact: "",
    friend3Name: "",
    friend3Contact: "",
    friend4Name: "",
    friend4Contact: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="neo-section neo-section--yellow" id="apply-hero">
        <div className="container page-hero">
          <span className="neo-badge">Apply Now</span>
          <h1 style={{ marginTop: "1.5rem" }}>
            This could be the week
            <br />
            that changes your direction.
          </h1>
          <p className="text-large" style={{ marginTop: "1.25rem" }}>
            Not exaggerating. Not marketing. Just the truth. If you feel like
            you should be doing more, this is for you.
          </p>
          <div className="page-hero__cta">
            <a href="#application-form" className="neo-btn neo-btn--dark neo-btn--large">
              Start Your Application ↓
            </a>
          </div>
        </div>
      </section>

      {/* ===== BEFORE YOU APPLY ===== */}
      <section className="neo-section neo-section--white reveal" id="before-apply">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge neo-badge--orange section-header__tag">
              Before You Apply
            </span>
            <h2>This is not for everyone.</h2>
          </div>

          <div className="grid-2" style={{ gap: "2rem" }}>
            <div className="neo-card">
              <h3 style={{ marginBottom: "1rem" }}>This is NOT:</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[
                  "A time-pass summer activity",
                  "A sit-and-listen workshop",
                  'A "just give me certificate" program',
                ].map((text, i) => (
                  <li key={i} style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                    <XCircle size={18} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: "2px", color: "#c0392b" }} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="neo-card neo-card--green">
              <h3 style={{ marginBottom: "1rem" }}>This IS for you if:</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[
                  "You're curious about AI",
                  "You want to create, not just consume",
                  "You're willing to try, fail, and learn fast",
                  "You want to build something you're proud of",
                ].map((text, i) => (
                  <li key={i} style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                    <CheckCircle size={18} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: "2px" }} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="neo-card" style={{ marginTop: "2rem", textAlign: "center" }}>
            <h4>
              You don&apos;t need to know everything. You just need to be willing
              to start.
            </h4>
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU GET ===== */}
      <section className="neo-section neo-section--blue reveal" id="what-you-get">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge section-header__tag">What You Get</span>
            <h2>What You&apos;re Signing Up For</h2>
          </div>

          <div className="grid-3">
            {[
              "Build your own live website",
              "Create content, videos & designs",
              "Learn AI tools properly",
              "Understand how to earn with skills",
              "Leave with a portfolio of real work",
            ].map((item, i) => (
              <div key={i} className="neo-card" style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <CheckCircle size={20} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: "2px" }} />
                <p style={{ fontWeight: 600 }}>{item}</p>
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
              It&apos;s about finally{" "}
              <span style={{ color: "var(--color-yellow)" }}>
                doing something real
              </span>
              .
            </h3>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="neo-section neo-section--white reveal" id="apply-pricing">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge neo-badge--purple section-header__tag">
              Pricing
            </span>
            <h2>Come Alone… or Don&apos;t</h2>
            <p>
              Most people try to do things alone. The ones who succeed? They
              build with others.
            </p>
          </div>

          <div className="grid-3" style={{ alignItems: "stretch" }}>
            <div className="pricing-card">
              <h3>Individual</h3>
              <div className="pricing-card__price">
                ₹10,000 <span>/ person</span>
              </div>
              <p className="pricing-card__subtitle">Full 7-day access</p>
            </div>

            <div className="pricing-card pricing-card--featured">
              <div className="pricing-card__badge">
                <span className="neo-badge neo-badge--orange">Most Popular</span>
              </div>
              <h3>Group of 3</h3>
              <div className="pricing-card__price">
                ₹8,000 <span>/ person</span>
              </div>
              <p className="pricing-card__subtitle">Save ₹2,000 each</p>
            </div>

            <div className="pricing-card">
              <div className="pricing-card__badge">
                <span className="neo-badge neo-badge--green">Best Value</span>
              </div>
              <h3>Group of 5</h3>
              <div className="pricing-card__price">
                ₹6,000 <span>/ person</span>
              </div>
              <p className="pricing-card__subtitle">Save ₹4,000 each</p>
            </div>
          </div>

          <div className="neo-card neo-card--yellow" style={{ marginTop: "2rem", textAlign: "center" }}>
            <h4>
              Don&apos;t come alone. Come with people who will build with you.
            </h4>
          </div>
        </div>
      </section>

      {/* ===== APPLICATION FORM ===== */}
      <section className="neo-section neo-section--purple" id="application-form">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge section-header__tag">Application</span>
            <h2>
              Takes 2–3 minutes.
              <br />
              Just answer honestly.
            </h2>
          </div>

          {submitted ? (
            <div
              className="neo-card neo-card--green"
              style={{ textAlign: "center", maxWidth: "600px" }}
            >
              <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "center" }}>
                <PartyPopper size={48} strokeWidth={2} />
              </div>
              <h2 style={{ marginBottom: "1rem" }}>Application Received!</h2>
              <p style={{ marginBottom: "1.5rem" }}>
                We&apos;ll review your application and get back to you with next
                steps. Welcome to the journey!
              </p>
              <Link href="/" className="neo-btn neo-btn--dark">
                Back to Home
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ maxWidth: "650px" }}
            >
              {/* Basic Details */}
              <h3 style={{ marginBottom: "1.5rem" }}>Basic Details</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
                <div>
                  <label className="neo-label" htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="neo-input"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="neo-label" htmlFor="age">Age *</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    className="neo-input"
                    required
                    min="10"
                    max="30"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="neo-label" htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="neo-input"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="neo-label" htmlFor="email">Email ID *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="neo-input"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="neo-label" htmlFor="school">School / College *</label>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    className="neo-input"
                    required
                    value={formData.school}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <hr className="neo-divider" />

              {/* Questions */}
              <h3 style={{ marginBottom: "1.5rem" }}>A Few Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
                <div>
                  <label className="neo-label" htmlFor="whyJoin">
                    Why do you want to join AI Summer School? *
                  </label>
                  <textarea
                    id="whyJoin"
                    name="whyJoin"
                    className="neo-textarea"
                    required
                    value={formData.whyJoin}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="neo-label" htmlFor="curious">
                    What are you curious about right now? *
                  </label>
                  <textarea
                    id="curious"
                    name="curious"
                    className="neo-textarea"
                    required
                    value={formData.curious}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="neo-label" htmlFor="builtBefore">
                    Have you built anything before? (Optional)
                  </label>
                  <textarea
                    id="builtBefore"
                    name="builtBefore"
                    className="neo-textarea"
                    value={formData.builtBefore}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="neo-label" htmlFor="walkAway">
                    What do you want to walk away with after 7 days? *
                  </label>
                  <textarea
                    id="walkAway"
                    name="walkAway"
                    className="neo-textarea"
                    required
                    value={formData.walkAway}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <hr className="neo-divider" />

              {/* Group Registration */}
              <h3 style={{ marginBottom: "0.5rem" }}>
                Group Registration (Optional)
              </h3>
              <p style={{ marginBottom: "1.5rem" }}>
                Applying with friends? Add their details below.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
                {[1, 2, 3, 4].map((num) => (
                  <div
                    key={num}
                    className="neo-card"
                    style={{ padding: "1rem", background: "var(--color-off-white)" }}
                  >
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        marginBottom: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Friend {num}
                    </p>
                    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                      <div style={{ flex: 1, minWidth: "200px" }}>
                        <input
                          type="text"
                          name={`friend${num}Name`}
                          className="neo-input"
                          placeholder="Name"
                          value={formData[`friend${num}Name` as keyof typeof formData]}
                          onChange={handleChange}
                        />
                      </div>
                      <div style={{ flex: 1, minWidth: "200px" }}>
                        <input
                          type="text"
                          name={`friend${num}Contact`}
                          className="neo-input"
                          placeholder="Phone / Email"
                          value={formData[`friend${num}Contact` as keyof typeof formData]}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="neo-btn neo-btn--primary neo-btn--large"
                style={{ width: "100%" }}
              >
                Submit Application →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ===== WHAT HAPPENS NEXT ===== */}
      <section className="neo-section neo-section--white reveal" id="next-steps">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge neo-badge--blue section-header__tag">
              What Happens Next
            </span>
            <h2>Simple.</h2>
          </div>

          <div className="grid-3">
            {[
              { num: "1", text: "We review your application" },
              { num: "2", text: "You receive confirmation + next steps" },
              { num: "3", text: "You secure your seat" },
            ].map((item, i) => (
              <div key={i} className="neo-card" style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    marginBottom: "0.5rem",
                    color: "var(--color-orange)",
                  }}
                >
                  {item.num}
                </div>
                <p style={{ fontWeight: 600 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="neo-section neo-section--orange reveal" id="apply-contact">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge section-header__tag">Need Help?</span>
            <h2>Have Questions?</h2>
            <p>We&apos;re happy to guide you before you apply.</p>
          </div>

          <div className="grid-2">
            <div className="neo-card">
              <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <Phone size={18} strokeWidth={2.5} /> Phone
              </h4>
              <a
                href="tel:+917990360056"
                style={{ fontWeight: 700, fontSize: "1.1rem" }}
              >
                +91-7990360056
              </a>
            </div>
            <div className="neo-card">
              <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <Mail size={18} strokeWidth={2.5} /> Email
              </h4>
              <a
                href="mailto:contact@thecampus.company"
                style={{ fontWeight: 700, fontSize: "1.1rem" }}
              >
                contact@thecampus.company
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LIMITED SEATS ===== */}
      <section className="neo-section neo-section--yellow" id="limited" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 style={{ color: "var(--color-black)", marginBottom: "1rem" }}>
            Limited Seats. Apply Now.
          </h2>
          <p style={{ color: "var(--color-black)", opacity: 0.8, marginBottom: "2rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
            We&apos;re keeping this small, focused, and high quality. Not
            everyone who applies will get in.
          </p>
          <a href="#application-form" className="neo-btn neo-btn--dark neo-btn--large">
            Start Your Application ↑
          </a>
          <p style={{ marginTop: "1.5rem", color: "var(--color-black)", opacity: 0.7, fontWeight: 500, maxWidth: "100%" }}>
            You don&apos;t need to be ready. You just need to begin.
          </p>
        </div>
      </section>
    </>
  );
}
