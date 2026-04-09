import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions – AI Summer School 2026",
  description:
    "Terms & Conditions for AI Summer School 2026, organized by The Campus Company.",
};

export default function TermsPage() {
  return (
    <>
      <section className="neo-section neo-section--white" id="terms-hero">
        <div className="container page-hero">
          <span className="neo-badge">Legal</span>
          <h1 style={{ marginTop: "1.5rem", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Terms & Conditions
          </h1>
          <p className="text-small" style={{ marginTop: "0.5rem", color: "rgba(0,0,0,0.5)" }}>
            Last Updated: April 2026
          </p>
        </div>
      </section>

      <section className="neo-section" style={{ background: "var(--cream)" }} id="terms-content">
        <div className="container" style={{ maxWidth: "800px" }}>
          <p style={{ marginBottom: "2rem" }}>
            Welcome to <strong>AI Summer School 2026</strong>, organized by{" "}
            <strong>The Campus Company</strong>. By applying for, registering,
            or participating in this program, you agree to the following Terms &
            Conditions. Please read them carefully.
          </p>

          {[
            {
              title: "1. Program Overview",
              content: `AI Summer School is a 7-day in-person educational program conducted in Ahmedabad, designed to provide practical skills in AI, content creation, design, and business.\n\n• Duration: 7 Days\n• Format: In-person, hands-on sessions\n• Venue: Ahmedabad Management Association (AMA), Ahmedabad\n• Organizer: The Campus Company`,
            },
            {
              title: "2. Eligibility",
              content: `• The program is open to individuals aged 15–24 years\n• Participants below 18 years may require parental/guardian consent\n• Participants must provide accurate information during registration\n\nThe Campus Company reserves the right to accept or reject applications at its discretion.`,
            },
            {
              title: "3. Registration & Payment",
              content: `Pricing:\n• Individual Registration: ₹10,000\n• Group of 3: ₹8,000 per participant\n• Group of 5: ₹6,000 per participant\n\nAll prices are inclusive of applicable taxes unless stated otherwise.\n\nPayment Terms:\n• Full payment is required to confirm registration\n• A seat is not reserved until payment is successfully completed\n• Payment methods will be communicated during the application/confirmation process\n\nGroup Registration:\n• Group pricing applies only when the required number of participants register together\n• If a group member drops out, pricing may be adjusted accordingly\n• The organizer reserves the right to verify group eligibility`,
            },
            {
              title: "4. Cancellation & Refund Policy",
              content: `Participant Cancellation:\n• Cancellation requests must be made via email at: contact@thecampus.company\n• Refund eligibility (if applicable) will depend on the timing of cancellation\n\nProgram Cancellation / Changes:\nThe Campus Company reserves the right to postpone or reschedule the program, change speakers, schedule, or format, or cancel the program due to unforeseen circumstances. In such cases, participants will be informed in advance and alternative arrangements or refunds may be offered at the organizer's discretion.`,
            },
            {
              title: "5. Attendance & Participation",
              content: `• Participants are expected to attend all sessions\n• Active participation in workshops is encouraged\n• Late entry, early exit, or absenteeism may affect the learning experience\n\nThe organizer is not responsible for incomplete outcomes due to lack of participation.`,
            },
            {
              title: "6. Code of Conduct",
              content: `Participants are expected to maintain respectful behavior towards instructors and peers, professional conduct during sessions, and compliance with venue rules and regulations.\n\nThe Campus Company reserves the right to remove any participant for misconduct and deny re-entry without refund in such cases.`,
            },
            {
              title: "7. Use of Devices & Materials",
              content: `• Participants must bring their own laptops\n• Basic familiarity with using a computer is expected\n• Internet access and tools may be provided or guided during sessions\n\nThe organizer is not responsible for device malfunction, data loss, or technical issues on personal devices.`,
            },
            {
              title: "8. Intellectual Property",
              content: `Program Content:\nAll program materials, including presentations, curriculum, and resources, are the intellectual property of The Campus Company or respective speakers. These may not be recorded, distributed, or reproduced without prior written consent.\n\nParticipant Work:\nParticipants retain ownership of the work they create during the program. However, The Campus Company may showcase participant work for promotional purposes or use anonymized outputs as examples.`,
            },
            {
              title: "9. Media & Photography Consent",
              content: `By participating, you consent to photography and videography during the program and the use of your images/videos for marketing and promotional purposes. If you wish to opt out, please notify us in writing before the program begins.`,
            },
            {
              title: "10. Limitation of Liability",
              content: `The Campus Company shall not be held liable for any personal injury, loss, or damage during the program, loss or theft of personal belongings, or outcomes related to career, income, or opportunities. The program is intended for educational purposes only.`,
            },
            {
              title: "11. Health & Safety",
              content: `Participants are expected to follow all safety guidelines at the venue and inform organizers of any medical conditions if relevant. The organizer is not responsible for medical emergencies beyond basic support.`,
            },
            {
              title: "12. Communication",
              content: `All official communication will be done via email, phone, and WhatsApp (if applicable). Participants are responsible for providing correct contact details and staying updated with program communication.`,
            },
            {
              title: "13. Privacy",
              content: `Participant data will be used only for program communication, registration and logistics, and improvement of services. We do not sell or share personal data with third parties without consent, except where required by law.`,
            },
            {
              title: "14. Amendments",
              content: `The Campus Company reserves the right to update or modify these Terms & Conditions at any time and communicate changes where necessary. Continued participation implies acceptance of the updated terms.`,
            },
            {
              title: "15. Contact Information",
              content: `For any queries regarding these Terms:\n\n📞 Phone: +91-7990360056\n📧 Email: contact@thecampus.company`,
            },
            {
              title: "16. Governing Law",
              content: `These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of courts in Ahmedabad, Gujarat.`,
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
            className="neo-card neo-card--yellow"
            style={{ marginTop: "2rem", textAlign: "center" }}
          >
            <p style={{ fontWeight: 700 }}>
              By applying to AI Summer School 2026, you acknowledge that you
              have read and understood these Terms and agree to abide by them.
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
