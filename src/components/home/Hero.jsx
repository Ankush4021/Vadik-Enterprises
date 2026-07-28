import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import itSolutions from "../../assets/hero/it-solutions.jpg";
import cctv from "../../assets/hero/cctv.jpg";
import networking from "../../assets/hero/networking.jpg";
import laptopRepair from "../../assets/hero/laptop-repair.jpg";
import printer from "../../assets/hero/printer.jpg";

const slides = [
  {
    image: itSolutions,
    label: "Complete IT Solutions",
    title: "Technology That Keeps Your Business Moving.",
    description:
      "Reliable IT infrastructure, support and hardware solutions designed to keep your business connected, secure and productive.",
  },
  {
    image: cctv,
    label: "CCTV & Surveillance",
    title: "Smarter Security. Better Protection.",
    description:
      "Professional CCTV installation and surveillance solutions for offices, businesses and commercial spaces.",
  },
  {
    image: networking,
    label: "Networking & Cabling",
    title: "Reliable Networks Built for Business.",
    description:
      "Fast, secure and reliable networking solutions designed for seamless workplace connectivity.",
  },
  {
    image: laptopRepair,
    label: "Computer & Laptop Support",
    title: "Expert Support When Technology Lets You Down.",
    description:
      "Professional troubleshooting, repair and IT support to keep your computers and business systems running reliably.",
  },
  {
    image: printer,
    label: "Printer Solutions",
    title: "Complete Printer Support for Your Workplace.",
    description:
      "From printer repair and toner refill to sales and rental, get dependable printer solutions under one roof.",
  },
];

const SLIDE_DURATION = 5500;

// Navbar ki height (h-24 = 96px) — dono jagah same rehni chahiye
const NAVBAR_HEIGHT = "80px";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[activeSlide];

  return (
    // exact height = poori screen - navbar height, isse zyada ya kam nahi hogi
    <section
      className="relative w-full overflow-hidden bg-[#07111f]"
      style={{ height: `calc(100vh - ${NAVBAR_HEIGHT})` }}
    >
      {/* Background Image */}
      <AnimatePresence>
        <motion.img
          key={slide.image}
          src={slide.image}
          alt={slide.label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/80 via-transparent to-[#07111f]/30" />

      {/* Hero Content — h-full (section jitna hi), extra height nahi degi */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[var(--primary)]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-sm">
                  {slide.label}
                </span>
                <span className="h-px w-8 bg-[var(--primary)]" />
              </div>

              <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] !text-white sm:text-5xl md:text-6xl lg:text-[64px]">
                {slide.title}
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 !text-white/75 sm:text-lg sm:leading-8">
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-lg bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold !text-white transition hover:bg-[var(--primary-hover)]"
            >
              Explore Services
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold !text-white backdrop-blur-sm transition hover:bg-white hover:!text-[#07111f]"
            >
              <Phone size={16} />
              Get in Touch
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2">
            {slides.map((item, index) => (
              <button
                key={item.label}
                onClick={() => setActiveSlide(index)}
                aria-label={`View ${item.label}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? "w-10 bg-[var(--primary)]"
                    : "w-5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;