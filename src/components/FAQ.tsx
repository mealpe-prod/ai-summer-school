"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  label: string;
  items: FAQItem[];
}

// ── Single accordion group ────────────────────────────────────────────────────
function FAQGroup({ items, offset = 0 }: { items: FAQItem[]; offset?: number }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div style={{ borderTop: "2px solid var(--color-black)" }}>
      {items.map((item, i) => {
        const idx = offset + i;
        const isOpen = activeIndex === i;
        return (
          <div
            key={idx}
            style={{
              borderBottom: "2px solid var(--color-black)",
              background: isOpen ? "var(--color-yellow)" : "transparent",
              transition: "background 0.15s",
            }}
          >
            <button
              id={`faq-${idx}`}
              aria-expanded={isOpen}
              onClick={() => setActiveIndex(isOpen ? null : i)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
                padding: "0.9rem 1rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                fontFamily: "inherit",
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  lineHeight: 1.45,
                  color: "var(--color-black)",
                }}
              >
                {item.question}
              </span>
              {/* Outlined square toggle — neobrutalist, no fill */}
              <span
                style={{
                  flexShrink: 0,
                  width: "26px",
                  height: "26px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid var(--color-black)",
                  background: isOpen ? "var(--color-orange)" : "transparent",
                  color: isOpen ? "var(--color-white)" : "var(--color-black)",
                  fontSize: "1.1rem",
                  fontWeight: 900,
                  lineHeight: 1,
                  transition: "background 0.15s, color 0.15s",
                  userSelect: "none",
                }}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div
              style={{
                overflow: "hidden",
                maxHeight: isOpen ? "300px" : "0",
                transition: "max-height 0.25s ease",
              }}
            >
              <p
                style={{
                  padding: "0 1rem 1rem",
                  fontSize: "0.88rem",
                  lineHeight: 1.7,
                  color: "rgba(0,0,0,0.75)",
                  fontWeight: 500,
                }}
              >
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function FAQ({ categories }: { categories: FAQCategory[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
        alignItems: "start",
      }}
    >
      {categories.map((cat, ci) => (
        <div key={ci}>
          {/* Category label — outlined, no fill, neobrutalist */}
          <div className="neo-badge"
            style={{
              display: "inline-block",
              border: "2px solid var(--color-black)",
              padding: "0.5rem 0.75rem",
              marginBottom: "1.2rem",
              fontSize: "0.9rem",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-black)",
              background: "var(--color-yellow)",
            }}
          >
            {cat.label}
          </div>

          <FAQGroup
            items={cat.items}
            offset={categories.slice(0, ci).reduce((s, c) => s + c.items.length, 0)}
          />
        </div>
      ))}
    </div>
  );
}
