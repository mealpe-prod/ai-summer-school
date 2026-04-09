"use client";

import Link from "next/link";
import { useState } from "react";
import {
  XCircle, CheckCircle, Phone, Mail, PartyPopper, ArrowRight, Send
} from "lucide-react";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    school: "",
    groupType: "" as "" | "group3" | "group5",
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
      <section
        className="neo-section neo-section--dark"
        id="apply-hero"
        style={{ paddingTop: "5rem", paddingBottom: "4rem" }}
      >
        <div className="container">
          <span className="neo-badge neo-badge--yellow" style={{ marginBottom: "1.5rem", display: "inline-block" }}>
            <Send size={14} strokeWidth={2.5} /> Apply Now
          </span>
          <h1 style={{ color: "var(--white)", marginBottom: "1.5rem" }}>
            This could be the week
            <br />
            that changes{" "}
            <span style={{ color: "var(--yellow)" }}>your direction.</span>
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--text-muted-light)", maxWidth: "600px", marginBottom: "2.5rem" }}>
            Not exaggerating. Not marketing. Just the truth. If you feel like
            you should be doing more, this is for you.
          </p>
          <a href="#application-form" className="neo-btn neo-btn--primary neo-btn--large">
            Start Your Application ↓
          </a>
        </div>
      </section>

      {/* ===== BEFORE YOU APPLY ===== */}
      <section className="neo-section neo-section--cream reveal" id="before-apply">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge neo-badge--orange section-header__tag">Before You Apply</span>
            <h2>This is not for everyone.</h2>
          </div>

          <div className="grid-2" style={{ gap: "2rem" }}>
            <div className="neo-card">
              <h3 style={{ marginBottom: "1.25rem" }}>This is NOT:</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "A time-pass summer activity",
                  "A sit-and-listen workshop",
                  'A "just give me certificate" program',
                ].map((text, i) => (
                  <li key={i} style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                    <XCircle size={18} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: "3px", color: "var(--orange)" }} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="neo-card" style={{ borderLeft: "6px solid var(--orange)" }}>
              <h3 style={{ marginBottom: "1.25rem" }}>This IS for you if:</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "You're curious about AI",
                  "You want to create, not just consume",
                  "You're willing to try, fail, and learn fast",
                  "You want to build something you're proud of",
                ].map((text, i) => (
                  <li key={i} style={{ fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                    <CheckCircle size={18} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: "3px", color: "var(--orange)" }} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU GET ===== */}
      <section className="neo-section neo-section--white reveal" id="what-you-get">
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
                <CheckCircle size={20} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: "2px", color: "var(--orange)" }} />
                <p style={{ fontWeight: 700 }}>{item}</p>
              </div>
            ))}
          </div>

          <div className="neo-card neo-card--dark" style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <h3 style={{ color: "var(--white)" }}>
              It&apos;s about finally{" "}
              <span style={{ color: "var(--yellow)" }}>doing something real</span>.
            </h3>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="neo-section neo-section--cream reveal" id="apply-pricing">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge section-header__tag">Pricing</span>
            <h2>Come Alone… or Don&apos;t</h2>
            <p>Most people try to do things alone. The ones who succeed? They build with others.</p>
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
                <span className="neo-badge neo-badge--yellow">Best Value</span>
              </div>
              <h3>Group of 5</h3>
              <div className="pricing-card__price">
                ₹6,000 <span>/ person</span>
              </div>
              <p className="pricing-card__subtitle">Save ₹4,000 each</p>
            </div>
          </div>

          <div className="neo-card neo-card--yellow" style={{ marginTop: "2rem", textAlign: "center" }}>
            <h4>Don&apos;t come alone. Come with people who will build with you.</h4>
          </div>
        </div>
      </section>

      {/* ===== APPLICATION FORM ===== */}
      <section className="neo-section neo-section--white" id="application-form">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge section-header__tag">Application</span>
            <h2>
              Just Takes 2–3 minutes.
            </h2>
          </div>

          {submitted ? (
            <div
              className="neo-card neo-card--yellow"
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
            <form onSubmit={handleSubmit} className="apply-form-grid">
              {/* Left — Basic Details */}
              <div className="apply-form-grid__left">
                <h3 style={{ marginBottom: "1.5rem" }}>Basic Details</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div>
                    <label className="neo-label" htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" className="neo-input" required value={formData.name} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="neo-label" htmlFor="age">Age *</label>
                    <input type="number" id="age" name="age" className="neo-input" required min="10" max="30" value={formData.age} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="neo-label" htmlFor="phone">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" className="neo-input" required value={formData.phone} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="neo-label" htmlFor="email">Email ID *</label>
                    <input type="email" id="email" name="email" className="neo-input" required value={formData.email} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="neo-label" htmlFor="school">School / College *</label>
                    <input type="text" id="school" name="school" className="neo-input" required value={formData.school} onChange={handleChange} />
                  </div>
                </div>
              </div>

              {/* Right — Group Registration */}
              <div className="apply-form-grid__right">
                <h3 style={{ marginBottom: "0.5rem" }}>Applying with friends?</h3>
                <p style={{ marginBottom: "1.25rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>Save more when you come as a group. Select if applicable.</p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  {[
                    { value: "group3" as const, label: "Group of 3", price: "₹8,000/person", save: "Save ₹2,000 each" },
                    { value: "group5" as const, label: "Group of 5", price: "₹6,000/person", save: "Save ₹4,000 each" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`group-check-card ${formData.groupType === option.value ? "group-check-card--active" : ""
                        }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.groupType === option.value}
                        onChange={() =>
                          setFormData({
                            ...formData,
                            groupType: formData.groupType === option.value ? "" : option.value,
                            friend1Name: "", friend1Contact: "",
                            friend2Name: "", friend2Contact: "",
                            friend3Name: "", friend3Contact: "",
                            friend4Name: "", friend4Contact: "",
                          })
                        }
                        style={{ display: "none" }}
                      />
                      <div className="group-check-card__check">
                        {formData.groupType === option.value && <CheckCircle size={18} strokeWidth={3} />}
                      </div>
                      <div>
                        <div className="group-check-card__label">{option.label}</div>
                        <div className="group-check-card__price">{option.price} · <span style={{ color: "var(--orange)" }}>{option.save}</span></div>
                      </div>
                    </label>
                  ))}
                </div>

                {/* Friend fields — conditional */}
                {formData.groupType && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {Array.from({ length: formData.groupType === "group3" ? 2 : 4 }).map((_, idx) => {
                      const num = idx + 1;
                      return (
                        <div
                          key={num}
                          className="neo-card"
                          style={{ padding: "0.85rem", background: "var(--cream)" }}
                        >
                          <p style={{ fontWeight: 800, fontSize: "0.7rem", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                            Friend {num}
                          </p>
                          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                            <div style={{ flex: 1, minWidth: "140px" }}>
                              <input
                                type="text"
                                name={`friend${num}Name`}
                                className="neo-input"
                                placeholder="Name"
                                value={formData[`friend${num}Name` as keyof typeof formData]}
                                onChange={handleChange}
                                style={{ fontSize: "0.85rem", padding: "0.5rem 0.75rem" }}
                              />
                            </div>
                            <div style={{ flex: 1, minWidth: "140px" }}>
                              <input
                                type="text"
                                name={`friend${num}Contact`}
                                className="neo-input"
                                placeholder="Phone / Email"
                                value={formData[`friend${num}Contact` as keyof typeof formData]}
                                onChange={handleChange}
                                style={{ fontSize: "0.85rem", padding: "0.5rem 0.75rem" }}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Full-width submit */}
              <div className="apply-form-grid__submit">
                <button
                  type="submit"
                  className="neo-btn neo-btn--primary neo-btn--large"
                  style={{ width: "100%" }}
                >
                  Submit Application →
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ===== WHAT HAPPENS NEXT ===== */}
      <section className="neo-section neo-section--cream reveal" id="next-steps">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge section-header__tag">What Happens Next</span>
            <h2>Simple.</h2>
          </div>

          <div className="grid-3">
            {[
              { num: "1", text: "We review your application" },
              { num: "2", text: "You receive confirmation + next steps" },
              { num: "3", text: "You secure your seat" },
            ].map((item, i) => (
              <div key={i} className="neo-card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "0.5rem", color: "var(--orange)" }}>
                  {item.num}
                </div>
                <p style={{ fontWeight: 700 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="neo-section neo-section--white reveal" id="apply-contact">
        <div className="container">
          <div className="section-header">
            <span className="neo-badge neo-badge--orange section-header__tag">Need Help?</span>
            <h2>Have Questions?</h2>
            <p>We&apos;re happy to guide you before you apply.</p>
          </div>

          <div className="grid-2">
            <div className="neo-card" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <div style={{ width: "48px", height: "48px", background: "var(--black)", border: "var(--border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Phone size={22} strokeWidth={2.5} style={{ color: "var(--yellow)" }} />
              </div>
              <div>
                <h4 style={{ marginBottom: "0.25rem" }}>Phone</h4>
                <a href="tel:+917990360056" style={{ fontWeight: 700, fontSize: "1.1rem" }}>
                  +91-7990360056
                </a>
              </div>
            </div>
            <div className="neo-card" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <div style={{ width: "48px", height: "48px", background: "var(--black)", border: "var(--border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Mail size={22} strokeWidth={2.5} style={{ color: "var(--yellow)" }} />
              </div>
              <div>
                <h4 style={{ marginBottom: "0.25rem" }}>Email</h4>
                <a href="mailto:contact@thecampus.company" style={{ fontWeight: 700, fontSize: "1.05rem" }}>
                  contact@thecampus.company
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LIMITED SEATS ===== */}
      <section className="neo-section neo-section--yellow" id="limited" style={{ textAlign: "center", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          <h2 style={{ marginBottom: "1rem" }}>
            Limited Seats. Apply Now.
          </h2>
          <p style={{ opacity: 0.8, marginBottom: "2rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
            We&apos;re keeping this small, focused, and high quality. Not
            everyone who applies will get in.
          </p>
          <a href="#application-form" className="neo-btn neo-btn--dark neo-btn--large">
            Start Your Application ↑
          </a>
          <p style={{ marginTop: "1.5rem", opacity: 0.7, fontWeight: 500, maxWidth: "100%" }}>
            You don&apos;t need to be ready. You just need to begin.
          </p>
        </div>
      </section>
    </>
  );
}
