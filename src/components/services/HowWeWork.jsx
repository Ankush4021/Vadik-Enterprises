import { motion } from "framer-motion";
import { PhoneCall, ClipboardList, Wrench, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "You Reach Out",
    description: "Call, email or fill the contact form — tell us what's going on.",
  },
  {
    icon: ClipboardList,
    title: "We Assess",
    description: "We understand your setup and suggest the right solution, no upselling.",
  },
  {
    icon: Wrench,
    title: "We Get to Work",
    description: "Our technicians handle the job — installation, repair or setup.",
  },
  {
    icon: ThumbsUp,
    title: "You're Sorted",
    description: "We stick around to make sure everything runs smoothly after.",
  },
];

const HowWeWork = () => {
  return (
    <section className="bg-[var(--background-soft)] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            Our Process
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-[var(--heading)] sm:text-4xl">
            How We Work
          </h2>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* connecting line - desktop only */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-[var(--border)] lg:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-white">
                <step.icon size={22} className="text-[var(--primary)]" />
              </div>

              <span className="mt-4 text-xs font-semibold text-[var(--primary)]">
                Step {index + 1}
              </span>

              <h3 className="mt-1 text-base font-semibold text-[var(--heading)]">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--text)]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;