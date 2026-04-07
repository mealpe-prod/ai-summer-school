"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
        >
          <button
            className="faq-question"
            onClick={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
            aria-expanded={activeIndex === index}
            id={`faq-${index}`}
          >
            <span>{item.question}</span>
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-answer">
            <div className="faq-answer__inner">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
