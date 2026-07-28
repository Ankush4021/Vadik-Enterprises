import { motion } from "framer-motion";
import { Target, Eye, CheckCircle2 } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            What Drives Us
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-[var(--heading)] sm:text-4xl">
            Our Mission & Vision
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--background-soft)] p-8 sm:p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10">
              <Target size={22} className="text-[var(--primary)]" />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[var(--heading)]">
              Our Mission
            </h3>

            <p className="mt-3 text-sm leading-7 text-[var(--text)]">
              To give businesses reliable, no-nonsense technology support so
              they can focus on running and growing their business instead of
              worrying about system downtime, security gaps or outdated
              hardware. We believe good IT support should feel invisible — it
              should just work.
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {[
                "Fast, honest support with no hidden costs",
                "Solutions tailored to your actual business needs",
                "Long-term reliability, not quick fixes",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-[var(--text)]">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--primary)]" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--background-soft)] p-8 sm:p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10">
              <Eye size={22} className="text-[var(--primary)]" />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[var(--heading)]">
              Our Vision
            </h3>

            <p className="mt-3 text-sm leading-7 text-[var(--text)]">
              To become the most trusted technology partner for small and
              mid-sized businesses in the region — known not just for
              technical skill, but for showing up when it matters and treating
              every client's business like our own.
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {[
                "Building lasting relationships, not one-time projects",
                "Staying ahead with the latest reliable technology",
                "Growing alongside the businesses we serve",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-[var(--text)]">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--primary)]" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;