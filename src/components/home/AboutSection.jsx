import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import aboutImage from "../../assets/hero/aboutSection.jpg"; 

const highlights = [
  "15+ years serving businesses across industries",
  "Certified technicians for every service",
  "End-to-end IT support under one roof",
];

const AboutSection = () => {
  return (
    <section className="bg-[var(--background-soft)] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-2">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <img
            src={aboutImage}
            alt="Vadik Enterprises team at work"
            className="h-[420px] w-full rounded-2xl object-cover"
          />

          {/* Floating stat card */}
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-white p-6 shadow-xl sm:block">
            <p className="text-3xl font-semibold text-[var(--primary)]">
              15+
            </p>
            <p className="mt-1 text-sm text-[var(--text)]">
              Years of Experience
            </p>
          </div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            Who We Are
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] text-[var(--heading)] sm:text-4xl">
            Your Technology Partner, Not Just a Vendor
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--text)]">
            Vadik Enterprises has been helping businesses stay connected,
            secure and productive for over 15 years. From IT infrastructure
            to CCTV, networking and printer support - we handle it all, so
            you can focus on running your business.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            {highlights.map((point) => (
              <div key={point} className="flex items-center gap-3">
                <CheckCircle2
                  size={18}
                  className="shrink-0 text-[var(--primary)]"
                />
                <span className="text-sm text-[var(--text)]">{point}</span>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)]"
          >
            More About Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;