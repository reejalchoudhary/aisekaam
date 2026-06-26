import { motion } from "motion/react";
import { LinkSolidIcon } from "./Icons";

export function CTA() {
  return (
    <section className="py-32">
      <div className="max-w-[1280px] mx-auto px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-[#114C5A] rounded-[24px] border border-[rgba(241,246,244,0.08)] overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(rgba(241, 246, 244, 0.2) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(241, 246, 244, 0.2) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 200, 1, 0.2) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 text-center py-24 px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-['JetBrains_Mono'] text-[52px] leading-[1.2] font-bold text-[#F1F6F4] mb-6 max-w-[900px] mx-auto"
            >
              Ready to Automate Your Entire Business?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[20px] text-[#D9E8E2] mb-10 max-w-[700px] mx-auto"
            >
              Join thousands of companies already scaling with AutomateAI.
              Start your free trial today, no credit card required.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="px-10 py-5 text-[18px] font-semibold bg-[#FFC801] text-[#172B36] rounded-[14px] hover:bg-[#FF9932] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                Start Building Today
              </button>

              <button className="flex items-center gap-2 px-10 py-5 text-[18px] font-semibold text-[#F1F6F4] border-2 border-[rgba(241,246,244,0.2)] rounded-[14px] hover:border-[#FFC801] transition-all duration-200">
                Schedule Demo
                <LinkSolidIcon size={18} color="#FFC801" />
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[14px] text-[#D9E8E2] mt-6"
            >
              Free 14-day trial · No credit card required · Cancel anytime
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}