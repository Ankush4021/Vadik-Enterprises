import { motion } from "framer-motion";
import storyImg from "../../assets/hero/aboutSection.jpg"; // apni koi office/team photo lagado

const OurStory = () => {
  return (
    <section className="bg-[var(--background-soft)] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-2">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={storyImg}
            alt="Vadik Enterprises journey"
            className="h-[380px] w-full rounded-2xl object-cover sm:h-[440px]"
          />
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            Our Story
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] text-[var(--heading)] sm:text-4xl">
            Started With One Broken Printer
          </h2>

          <div className="mt-5 space-y-4 text-base leading-7 text-[var(--text)]">
            <p>
              Vadik Enterprises began small - fixing printers and computers
              for local businesses that couldn't get a technician to show up
              on time. Word spread fast, not because of marketing, but because
              we actually solved problems and stuck around after the job was
              done.
            </p>
            <p>
              Over the years, that grew into full IT support, networking,
              CCTV and everything a modern business needs to run smoothly. But
              the core hasn't changed - we still show up, we still fix things
              properly the first time, and we still treat every client like
              they're our only one.
            </p>
            <p>
              Today, we support businesses across industries, but we haven't
              forgotten where we started: with a phone call from someone who
              just needed their technology to work.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;