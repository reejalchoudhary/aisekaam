import { motion } from "motion/react";

export function TrustedCompanies() {
  const companies = [
    "TechCorp",
    "GlobalInc",
    "DataFlow",
    "CloudSync",
    "AutoScale",
    "InnovateLab",
  ];

  return (
    <section className="py-24 border-t border-[rgba(241,246,244,0.06)]">
      <div className="max-w-[1280px] mx-auto px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-['JetBrains_Mono'] text-[18px] text-[#D9E8E2] mb-12">
            Trusted by innovative teams worldwide
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="flex items-center justify-center"
              >
                <div className="font-['JetBrains_Mono'] text-[16px] text-[#D9E8E2] opacity-50 hover:opacity-100 transition-opacity duration-200">
                  {company}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}