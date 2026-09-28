import Link from "next/link";
import {
  FiArrowUpRight,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:adityasneh09@gmail.com",
    icon: FiMail,
    className: "contact-link-yellow",
  },
  {
    label: "GitHub",
    href: "https://github.com/adityasnehai",
    icon: FiGithub,
    className: "contact-link-white",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aditya-sneh/",
    icon: FiLinkedin,
    className: "contact-link-mint",
  },
  {
    label: "Resume",
    href: "/Aditya_Sneh_Resume.pdf",
    icon: FiFileText,
    className: "contact-link-coral",
  },
] as const;

export const Contact = () => {
  return (
    <section id="contact" className="contact-section neo-grid">
      <div className="contact-flight contact-flight-one" aria-hidden="true" />
      <div className="contact-flight contact-flight-two" aria-hidden="true" />

      <div className="contact-inner">
        <div className="contact-copy">
          <p className="contact-tape">Contact</p>
          <h2>
            Got a <mark>good</mark>
            <span>problem?</span>
          </h2>
          <p className="contact-subtitle">
            Hiring an applied AI engineer? Let&apos;s talk about the product,
            the problem, and where I can help.
          </p>

          <div className="contact-links" aria-label="Contact links">
            {contactLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer noopener"
                  className={`contact-link ${item.className}`}
                >
                  <Icon aria-hidden="true" />
                  <span>{item.label}</span>
                  <FiArrowUpRight
                    className="contact-link-arrow"
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>
          <a className="contact-email" href="mailto:adityasneh09@gmail.com">adityasneh09@gmail.com <FiArrowUpRight aria-hidden="true" /></a>
        </div>

        <div className="contact-art" aria-hidden="true">
          <div className="paper-plane paper-plane-blue" />
          <div className="paper-plane paper-plane-white" />
          <div className="paper-plane paper-plane-yellow" />

          <div className="mailbox">
            <div className="mailbox-flag" />
            <div className="mailbox-door">
              <div className="mailbox-envelope">
                <span />
              </div>
              <p>
                IDEAS
                <br />
                PEOPLE
                <br />
                PROJECTS
                <br />A BRIGHTER
                <br />
                TOMORROW
              </p>
            </div>
            <div className="mailbox-post" />
            <div className="mailbox-base" />
          </div>

          <div className="signal-note">
            signal
            <br />
            received
          </div>

          <div className="contact-sign">
            NEXT
            <br />
            ADVENTURE
            <br />
            TOGETHER?
          </div>
        </div>
      </div>

      <div className="contact-corner contact-corner-left" aria-hidden="true">
        SAME
        <br />
        CURIOSITY
        <br />
        DIFFERENT
        <br />
        PROBLEMS
      </div>
      <div className="contact-corner contact-corner-right" aria-hidden="true">
        BUILD
        <br />
        GOOD
        <br />
        THINGS :)
      </div>
    </section>
  );
};
