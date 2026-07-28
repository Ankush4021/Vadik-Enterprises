import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import services from "../../data/services";

const ServicesGrid = () => {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[var(--heading)] sm:text-4xl">
            Our Professional IT Services
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--text)]">
            We provide comprehensive IT support, maintenance and
            infrastructure solutions tailored for businesses of all sizes.
          </p>
        </div>

        {/* Alternating rows */}
        <div className="mt-16 flex flex-col gap-20">
          {services.map((service, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={service.title}
                className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  isReversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  src={service.image}
                  alt={service.title}
                  className="h-[280px] w-full rounded-2xl object-cover sm:h-[340px]"
                />

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                >
                  <span className="block h-[3px] w-10 bg-[var(--primary)]" />

                  <h3 className="mt-5 text-2xl font-semibold text-[var(--heading)] sm:text-[28px]">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-md text-base leading-7 text-[var(--text)]">
                    {service.description}
                  </p>

                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
                  >
                    Request Service
                    <ArrowRight size={15} />
                  </Link>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;