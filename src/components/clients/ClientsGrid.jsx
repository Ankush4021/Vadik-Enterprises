import { motion } from "framer-motion";
import clients from "../../data/clients";

const ClientsGrid = () => {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            Our Network
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-[var(--heading)] sm:text-4xl">
            Businesses That Trust Us
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--text)]">
            From small offices to growing enterprises, we've partnered with
            businesses across industries to keep their technology running.
          </p>
        </div>

        {/* Logo grid */}
        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex h-28 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-soft)] p-6"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-14 max-w-full object-contain"
                />
              ) : (
                <span className="text-sm font-medium text-[var(--muted)]">
                  {client.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsGrid;