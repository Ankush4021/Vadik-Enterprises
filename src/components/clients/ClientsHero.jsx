import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import clientsHeroImg from "../../assets/hero/clientsHero.jpg"; // apni koi acchi image lagado

const ClientsHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#07111f] px-6 py-24 sm:px-10 sm:py-28 lg:px-16">
      <img
        src={clientsHeroImg}
        alt="Vadik Enterprises Clients"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#07111f]/40 via-[#07111f]/55 to-[#07111f]/75" />

      <div className="relative z-10 mx-auto max-w-[1280px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 flex items-center justify-center gap-2 text-sm text-white/80">
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white/60">Our Clients</span>
          </div>

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[var(--primary)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              Our Clients
            </span>
            <span className="h-px w-8 bg-[var(--primary)]" />
          </div>

          <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.1] tracking-[-0.03em] !text-white sm:text-5xl md:text-6xl">
            Trusted By <span className="text-[var(--primary)]">Businesses</span> We Serve
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 !text-white/70 sm:text-lg sm:leading-8">
            Over the years, we've built lasting relationships with businesses
            across industries - here are some of the names we're proud to
            work with.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsHero;