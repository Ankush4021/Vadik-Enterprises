import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajeev Malhotra",
    role: "Owner, Malhotra Textiles",
    quote:
      "Humara server baar baar down ho jaata tha. Vadik ke bande ne ek hi visit mein root cause pakad liya. Ab 6 months ho gaye, koi issue nahi.",
    initials: "RM",
  },
  {
    name: "Priya Sharma",
    role: "Admin Head, Sharma Diagnostics",
    quote:
      "CCTV lagwana tha 3 branches mein, quote sabse pehle inhone diya aur time pe kaam khatam kiya. Thoda expensive laga but quality dikhti hai footage mein.",
    initials: "PS",
  },
  {
    name: "Arun Kapoor",
    role: "Director, Kapoor Exports",
    quote:
      "Networking ka pura setup badalwaya office shift karte waqt, weekend pe kaam kiya taaki Monday se office chal sake.",
    initials: "AK",
  },
  {
    name: "Neha Verma",
    role: "Office Manager, Verma & Associates",
    quote:
      "Printer baar baar jam ho raha tha. Inhone asli problem batayi — printer purana ho gaya tha. Honest advice mili, part nahi becha jabardasti.",
    initials: "NV",
  },
  {
    name: "Sandeep Yadav",
    role: "Founder, Yadav Logistics",
    quote:
      "Support call karo toh usually within an hour revert mil jaata hai. Chote business ke liye ye cheez badi matter karti hai.",
    initials: "SY",
  },
  {
    name: "Meenal Joshi",
    role: "HR Manager, Joshi Enterprises",
    quote:
      "Laptop crash ho gaya tha data ke saath, panic ho gaye the. Inhone same din recover kar diya. Emergency mein bas itna hi chahiye hota hai.",
    initials: "MJ",
  },
];

const CARDS_PER_VIEW = 3;

const TestimonialsSection = () => {
  // start batata hai ki array mein kahan se 3 cards dikhani hain
  const [start, setStart] = useState(0);

  const next = () => {
    setStart((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setStart((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // start se lekar 3 testimonials nikalo, end pe pahuch ke wapas shuru se jod do
  const visibleCards = [];
  for (let i = 0; i < CARDS_PER_VIEW; i++) {
    visibleCards.push(testimonials[(start + i) % testimonials.length]);
  }

  return (
    <section className="bg-[var(--background-soft)] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        {/* Heading */}
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            Client Feedback
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-[var(--heading)] sm:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCards.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-[var(--border)] bg-white p-7"
            >
              <Quote size={24} className="text-[var(--primary)]/25" fill="currentColor" />

              <p className="mt-4 text-sm leading-6 text-[var(--text)]">
                "{t.quote}"
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10 text-sm font-semibold text-[var(--primary)]">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--heading)]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[var(--muted)]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonials"
            className="rounded-full border border-[var(--border)] bg-white p-2.5 text-[var(--heading)] hover:bg-[var(--primary)] hover:text-white"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonials"
            className="rounded-full border border-[var(--border)] bg-white p-2.5 text-[var(--heading)] hover:bg-[var(--primary)] hover:text-white"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;