import clients from "../../data/clients";

const ClientsSection = () => {
  // seamless loop ke liye list ko duplicate kar diya (2 baar)
  const loopClients = [...clients, ...clients];

  return (
    <section className="overflow-hidden bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            Our Clients
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-[var(--heading)] sm:text-4xl">
            Trusted By Businesses Like Yours
          </h2>
        </div>

        {/* Scrolling logo strip */}
        <div className="relative mt-12">
          {/* left-right fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-32" />

          <div className="flex w-max animate-marquee gap-6">
            {loopClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex h-24 w-48 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-soft)]"
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-12 max-w-[80%] object-contain"
                  />
                ) : (
                  <span className="text-sm font-medium text-[var(--muted)]">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;