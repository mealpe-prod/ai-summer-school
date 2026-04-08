import Link from "next/link";


export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__brand">
            <img
              src="/images/logo.png"
              alt="AI Summer School 2026"
            />
            <p>
              We teach what schools don&apos;t. A 7-day intensive program to
              build real skills in AI, content, design & business.
            </p>
          </div>

          <div>
            <h4 className="footer__title">Pages</h4>
            <Link href="/" className="footer__link">Home</Link>
            <Link href="/program" className="footer__link">Program</Link>
            <Link href="/curriculum" className="footer__link">Curriculum</Link>
            <Link href="/speakers" className="footer__link">Speakers</Link>
            <Link href="/apply" className="footer__link">Apply Now</Link>
          </div>

          <div>
            <h4 className="footer__title">Contact</h4>
            <a href="tel:+917990360056" className="footer__link">
              +91-7990360056
            </a>
            <a href="mailto:contact@thecampus.company" className="footer__link">
              contact@thecampus.company
            </a>
            <p
              className="footer__link"
              style={{ cursor: "default", marginTop: "1rem" }}
            >
              AMA, Ahmedabad
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 AI Summer School · The Campus Company</p>
          <div className="footer__bottom-links">
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
