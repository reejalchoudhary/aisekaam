import { motion } from "motion/react";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "AutomateAI has transformed how we handle data workflows. The platform's intelligence and reliability have enabled us to scale operations 10x without adding headcount.",
      name: "Sarah Chen",
      role: "CTO",
      company: "TechCorp Global",
      rating: 5,
    },
    {
      quote:
        "The best automation platform we've used. Intuitive, powerful, and backed by exceptional support. Our team productivity increased by 85% in just 3 months.",
      name: "Michael Rodriguez",
      role: "VP of Operations",
      company: "DataFlow Systems",
      rating: 5,
    },
    {
      quote:
        "Enterprise-grade security with startup-level ease of use. AutomateAI handles our most critical workflows with 99.98% uptime. Absolutely mission-critical for us.",
      name: "Emily Thompson",
      role: "Head of Engineering",
      company: "CloudSync Inc",
      rating: 5,
    },
  ];

  return (
    <section className="py-32 border-t border-[rgba(241,246,244,0.06)]">
      <div className="max-w-[1280px] mx-auto px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['JetBrains_Mono'] text-[52px] font-bold text-[#F1F6F4] mb-4">
            Trusted by Industry Leaders
          </h2>

          <p className="text-[18px] text-[#D9E8E2] max-w-[700px] mx-auto">
            See what our customers have to say about transforming their
            operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="bg-[#114C5A] rounded-[24px] border border-[rgba(241,246,244,0.08)] p-8 hover:border-[#FFC801] transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="#FFC801"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 0l2.5 6.5L19 7.5l-5 4.5L15.5 19 10 15.5 4.5 19 6 12 1 7.5l6.5-1z" />
                  </svg>
                ))}
              </div>

              <div className="mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="mb-4 opacity-30"
                >
                  <path
                    d="M9.5 14c-1.4 0-2.5-1.1-2.5-2.5S8.1 9 9.5 9 12 10.1 12 11.5 10.9 14 9.5 14zm13 0c-1.4 0-2.5-1.1-2.5-2.5S21.1 9 22.5 9 25 10.1 25 11.5 23.9 14 22.5 14z"
                    fill="#FFC801"
                  />
                  <path
                    d="M7 20c0-3.9 1.3-7 4-9H7v-2h7v7h-2v-4c-2.2 1.6-3 4.4-3 8H7zm13 0c0-3.9 1.3-7 4-9h-4v-2h7v7h-2v-4c-2.2 1.6-3 4.4-3 8h-2z"
                    fill="#FFC801"
                  />
                </svg>

                <p className="text-[16px] text-[#D9E8E2] leading-[1.6]">
                  {testimonial.quote}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFC801] to-[#FF9932] flex items-center justify-center">
                  <span className="font-['JetBrains_Mono'] text-[18px] font-bold text-[#172B36]">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>

                <div>
                  <div className="font-['JetBrains_Mono'] text-[16px] font-bold text-[#F1F6F4]">
                    {testimonial.name}
                  </div>

                  <div className="text-[14px] text-[#D9E8E2]">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}