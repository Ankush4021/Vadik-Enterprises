import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
// apna real data yaha se update kar dena
const PHONE = "+91 99973 36450";
const EMAIL = "support@vadikenterprises.com";
const ADDRESS = "New Delhi, India";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Our Clients", path: "/clients" },
  { name: "Contact Us", path: "/contact" },
];

const services = [
  "IT Solutions",
  "CCTV & Surveillance",
  "Networking & Cabling",
  "Laptop & Computer Support",
  "Printer Solutions",
];

const Footer = () => {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--heading)] text-white/70">
      {/* Main footer content */}
      <div className="mx-auto max-w-[1280px] px-6 py-14 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand + about */}
          <div>
            <Link to="/" className="text-xl font-semibold text-white">
              Vadik <span className="text-[var(--primary)]">Enterprises</span>
            </Link>
            <p className="mt-4 text-sm leading-6">
              Complete IT solutions, CCTV, networking and printer support for
              businesses that need technology to just work.
            </p>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-3">
              
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[var(--primary)]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
                </svg>
              </a>

              
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[var(--primary)]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>

              
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[var(--primary)]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 8.75h3.5V21H3.2V8.75Zm6.3 0h3.35v1.68h.05c.47-.88 1.6-1.8 3.3-1.8 3.53 0 4.18 2.32 4.18 5.35V21h-3.5v-6.28c0-1.5-.03-3.42-2.08-3.42-2.09 0-2.41 1.63-2.41 3.31V21H9.5V8.75Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Our Services
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {services.map((service) => (
                <li key={service} className="text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Get In Touch
            </h3>
            <div className="mt-4 flex flex-col gap-4">
              <a
                href={`tel:${PHONE}`}
                className="flex items-start gap-3 text-sm transition-colors hover:text-white"
              >
                <Phone size={16} className="mt-0.5 shrink-0" />
                {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-start gap-3 text-sm transition-colors hover:text-white"
              >
                <Mail size={16} className="mt-0.5 shrink-0" />
                {EMAIL}
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                {ADDRESS}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 px-6 py-5 text-xs sm:flex-row sm:px-10 lg:px-16">
          <p>© 2026 Vadik Enterprises. All rights reserved.</p>
          <p>
            Designed and Developed by{" "}
            <a
              href="https://siradigital.in"
              target="_blank"  
              rel="noopener noreferrer"         
              className="text-white hover:text-[var(--primary)] font-semibold"
            >SIRA Digital</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;