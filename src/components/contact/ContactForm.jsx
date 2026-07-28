import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // yaha apna form submission logic daal dena (API call, email service, etc.)
    console.log(formData);
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[720px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            Send a Message
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-[var(--heading)] sm:text-4xl">
            We'd Love to Hear From You
          </h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-10 flex flex-col gap-5"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="rounded-lg border border-[var(--border)] bg-[var(--background-soft)] px-4 py-3 text-sm text-[var(--heading)] outline-none focus:border-[var(--primary)]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="rounded-lg border border-[var(--border)] bg-[var(--background-soft)] px-4 py-3 text-sm text-[var(--heading)] outline-none focus:border-[var(--primary)]"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="rounded-lg border border-[var(--border)] bg-[var(--background-soft)] px-4 py-3 text-sm text-[var(--heading)] outline-none focus:border-[var(--primary)]"
          />

          <textarea
            name="message"
            placeholder="Tell us what you need..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="resize-none rounded-lg border border-[var(--border)] bg-[var(--background-soft)] px-4 py-3 text-sm text-[var(--heading)] outline-none focus:border-[var(--primary)]"
          />

          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)]"
          >
            Send Message
            <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;