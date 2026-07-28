import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import services from "../../data/services";

const ServicesSection = () => {
  return (
    <section className="bg-[var(--background-soft)] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            What We Offer
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-[var(--heading)] sm:text-4xl">
            Services Built Around Your Business
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--text)]">
            From day-to-day IT support to full infrastructure setup — we cover
            everything a growing business needs.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-8 transition-all duration-300 hover:border-[var(--primary)]/30 hover:shadow-2xl hover:shadow-[var(--primary)]/10"
            >
              {/* Big faint number - background accent */}
              <span className="absolute right-6 top-4 text-5xl font-bold text-[var(--heading)]/5 transition-colors duration-300 group-hover:text-[var(--primary)]/10">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-[var(--border)] bg-white transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)]">
                <service.icon
                  size={24}
                  className="text-[var(--primary)] transition-colors duration-300 group-hover:text-white"
                />
              </div>

              <h3 className="relative mt-6 text-lg font-semibold text-[var(--heading)]">
                {service.title}
              </h3>

              <p className="relative mt-2 text-sm leading-6 text-[var(--text)]">
                {service.description}
              </p>

              {/* Bottom line that grows on hover */}
              <div className="relative mt-6 h-[2px] w-8 bg-[var(--border)] transition-all duration-300 group-hover:w-16 group-hover:bg-[var(--primary)]" />

              <Link
                to="/services"
                className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)]"
              >
                Learn more
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Simple CTA below the grid */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-6">
          <p className="text-base text-[var(--text)]">
            Not sure which service fits your business?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)]"
          >
            Talk to Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;