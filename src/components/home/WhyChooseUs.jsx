import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Users,
  Wrench,
  Headset,
  BadgeIndianRupee,
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "15+ years of hands-on experience handling IT setups for businesses of every size.",
  },
  {
    icon: Clock,
    title: "Fast Response Time",
    description:
      "Most issues attended within hours, not days — because downtime costs you money.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Technicians",
    description:
      "Skilled and trained professionals you can trust with your critical business systems.",
  },
  {
    icon: Wrench,
    title: "Complete Solutions",
    description:
      "IT support, networking, CCTV, printers — everything under one roof, no juggling vendors.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description:
      "Round-the-clock assistance whenever something needs urgent attention.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Honest Pricing",
    description:
      "Transparent quotes with no hidden charges — you know exactly what you're paying for.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[var(--background-soft)] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-[var(--heading)] sm:text-4xl">
            Businesses Trust Vadik Enterprises
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--text)]">
            We don't just fix problems — we build reliable IT foundations
            businesses can depend on every single day.
          </p>
        </div>

        {/* Reason cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group rounded-2xl border border-[var(--border)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--primary)]/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 transition-colors duration-300 group-hover:bg-[var(--primary)]">
                <reason.icon
                  size={22}
                  className="text-[var(--primary)] transition-colors duration-300 group-hover:text-white"
                />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-[var(--heading)]">
                {reason.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--text)]">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;