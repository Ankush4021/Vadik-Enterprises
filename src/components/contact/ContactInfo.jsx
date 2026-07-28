import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const PHONE = "+91 99973 36450";
const EMAIL = "support@vadikenterprises.com";
const ADDRESS = "New Delhi, India";

const infoItems = [
  {
    icon: Phone,
    title: "Call Us",
    value: PHONE,
    href: `tel:${PHONE}`,
  },
  {
    icon: Mail,
    title: "Email Us",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: ADDRESS,
    href: null,
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat, 9:00 AM - 7:00 PM",
    href: null,
  },
];

const ContactInfo = () => {
  return (
    <section className="bg-white px-6 pt-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {infoItems.map((item, index) => {
            const Wrapper = item.href ? "a" : "div";

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Wrapper
                  href={item.href || undefined}
                  className="flex h-full flex-col items-start rounded-2xl border border-[var(--border)] bg-[var(--background-soft)] p-6 transition-colors hover:border-[var(--primary)]/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                    <item.icon size={20} className="text-[var(--primary)]" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-[var(--heading)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--text)]">
                    {item.value}
                  </p>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;