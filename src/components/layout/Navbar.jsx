import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";

// yaha apna real number/email daal dena
const PHONE = "+91 99973 36450";
const EMAIL = "support@vadikenterprises.com";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Our Clients", path: "/clients" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 py-4">
        {/* Logo text - left */}
        <Link to="/" className="text-2xl font-semibold text-[var(--heading)]">
          Vadik <span className="text-[var(--primary)]">Enterprises</span>
        </Link>

        {/* Links - center (desktop only) */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `relative py-1 text-[15px] font-medium transition-colors ${
                  isActive
                    ? "text-[var(--primary)]"
                    : "text-[var(--text)] hover:text-[var(--primary)]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {/* active hone pe niche line dikhegi */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-[var(--primary)]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Contact info - right, stacked (desktop only) */}
        <div className="hidden flex-col gap-1 text-sm font-medium md:flex">
          
           <a href={`tel:${PHONE}`}
            className="flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-hover)]"
          >
            <Phone size={16} />
            {PHONE}
          </a>
          
           <a href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-hover)]"
          >
            <Mail size={16} />
            {EMAIL}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-[var(--heading)] md:hidden"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="border-t border-[var(--border)] bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive
                      ? "text-[var(--primary)]"
                      : "text-[var(--text)] hover:text-[var(--primary)]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            
             <a href={`tel:${PHONE}`}
              className="flex items-center gap-2 text-sm text-[var(--primary)]"
            >
              <Phone size={15} /> {PHONE}
            </a>
            
            <a  href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 text-sm text-[var(--primary)]"
            >
              <Mail size={15} /> {EMAIL}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;