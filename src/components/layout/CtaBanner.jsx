import { Link } from "react-router-dom";

const CtaBanner = ({
  title = "Ready to Strengthen Your IT Infrastructure?",
  description = "Partner with our expert IT team to ensure seamless operations, proactive maintenance, and scalable technology solutions tailored for your business growth.",
  primaryText = "Get Free Consultation",
  primaryLink = "/contact",
  secondaryText = "Call Our Team",
  secondaryLink = "tel:+918800933222",
}) => {
  return (
    <section className="bg-[var(--background-soft)] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[900px]">
        <div className="rounded-3xl bg-white px-8 py-14 text-center shadow-[0_10px_40px_rgba(16,24,40,0.06)] sm:px-14">
          <h2 className="mx-auto max-w-xl text-2xl font-semibold text-[var(--heading)] sm:text-3xl">
            {title}
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[var(--text)] sm:text-base">
            {description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to={primaryLink}
              className="w-full rounded-lg bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] sm:w-auto"
            >
              {primaryText}
            </Link>

            
             <a href={secondaryLink}
              className="w-full rounded-lg border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--heading)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)] sm:w-auto"
            >
              {secondaryText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;