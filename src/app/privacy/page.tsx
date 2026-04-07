import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – AI Summer School 2026",
  description:
    "Privacy Policy for AI Summer School 2026, explaining how The Campus Company collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="neo-section neo-section--white" id="privacy-hero">
        <div className="container page-hero">
          <span className="neo-badge">Legal</span>
          <h1 style={{ marginTop: "1.5rem", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Privacy Policy
          </h1>
          <p className="text-small" style={{ marginTop: "0.5rem", color: "rgba(0,0,0,0.5)" }}>
            Last Updated: April 2026
          </p>
        </div>
      </section>

      <section className="neo-section" style={{ background: "var(--color-off-white)" }} id="privacy-content">
        <div className="container" style={{ maxWidth: "800px" }}>
          <p style={{ marginBottom: "2rem" }}>
            This Privacy Policy explains how{" "}
            <strong>The Campus Company</strong> (&quot;we&quot;, &quot;us&quot;,
            &quot;our&quot;) collects, uses, and protects your information when
            you visit the website or register for{" "}
            <strong>AI Summer School 2026</strong>. By using this website or
            submitting your information, you agree to the terms of this Privacy
            Policy.
          </p>

          {[
            {
              title: "1. Information We Collect",
              content: `Personal Information:\nWhen you apply or contact us, we may collect:\n• Full Name\n• Age\n• Phone Number\n• Email Address\n• School / College Name\n• Responses to application questions\n• Group member details (if applicable)\n\nTechnical Information:\nWhen you visit our website, we may automatically collect:\n• IP address\n• Browser type\n• Device information\n• Pages visited\n• Time spent on the website\n\nThis helps us improve user experience and performance.`,
            },
            {
              title: "2. How We Use Your Information",
              content: `We use your information to:\n• Process your application and registration\n• Communicate program details and updates\n• Provide customer support\n• Send reminders, confirmations, and important notices\n• Improve our website and program experience\n• Share relevant updates about future programs (if applicable)`,
            },
            {
              title: "3. Communication",
              content: `By submitting your details, you consent to being contacted via phone calls, email, and WhatsApp or SMS.\n\nThese communications may include application updates, program details, and reminders and important announcements.\n\nYou may opt out of non-essential communications at any time.`,
            },
            {
              title: "4. Data Sharing",
              content: `We do not sell, rent, or trade your personal data.\n\nWe may share your data only in the following cases:\n• With internal team members for program operations\n• With trusted service providers (e.g., payment processors, email tools)\n• When required by law or legal authorities\n\nAll third parties are expected to maintain confidentiality.`,
            },
            {
              title: "5. Data Storage & Security",
              content: `We take reasonable measures to protect your data, including secure storage systems, restricted access to personal data, and use of trusted tools and platforms.\n\nHowever, no system is 100% secure, and we cannot guarantee absolute security.`,
            },
            {
              title: "6. Cookies & Tracking",
              content: `Our website may use cookies to improve user experience, analyze website traffic, and understand user behavior.\n\nYou can choose to disable cookies through your browser settings.`,
            },
            {
              title: "7. Participant Media",
              content: `During the program, we may capture photos and videos.\n\nThese may be used for marketing, social media, and promotional materials.\n\nIf you wish to opt out, you must inform us in writing before the program begins.`,
            },
            {
              title: "8. Data Retention",
              content: `We retain your information only as long as necessary for program operations, communication, and legal and compliance purposes.\n\nAfter that, data may be securely deleted or anonymized.`,
            },
            {
              title: "9. Your Rights",
              content: `You have the right to:\n• Request access to your personal data\n• Request correction of inaccurate information\n• Request deletion of your data (subject to legal obligations)\n• Opt out of non-essential communications\n\nTo exercise these rights, contact us using the details below.`,
            },
            {
              title: "10. Children's Privacy",
              content: `Participants under 18 years may be required to provide parent or guardian consent.\n\nWe do not knowingly collect data from minors without appropriate consent.`,
            },
            {
              title: "11. Third-Party Links",
              content: `Our website may contain links to third-party websites. We are not responsible for their privacy practices or their content.\n\nWe recommend reviewing their policies before sharing information.`,
            },
            {
              title: "12. Changes to This Policy",
              content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page and effective immediately upon posting.\n\nContinued use of the website implies acceptance of the updated policy.`,
            },
            {
              title: "13. Contact Information",
              content: `If you have any questions about this Privacy Policy:\n\n📞 Phone: +91-7990360056\n📧 Email: contact@thecampus.company`,
            },
          ].map((section, i) => (
            <div key={i} style={{ marginBottom: "2rem" }}>
              <h3 style={{ marginBottom: "0.75rem" }}>{section.title}</h3>
              <div style={{ whiteSpace: "pre-line", lineHeight: 1.7 }}>
                {section.content}
              </div>
            </div>
          ))}

          <div
            className="neo-card neo-card--blue"
            style={{ marginTop: "2rem", textAlign: "center" }}
          >
            <p style={{ fontWeight: 700 }}>
              Your trust matters to us. We are committed to protecting your
              data, being transparent, and using your information responsibly.
            </p>
          </div>

          <p
            style={{
              marginTop: "2rem",
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            AI Summer School 2026 · Organized by The Campus Company
          </p>
        </div>
      </section>
    </>
  );
}
