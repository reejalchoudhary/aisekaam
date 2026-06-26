import { motion } from "motion/react";

export function Footer() {
  const footerLinks = {
    Product: [
      "Features",
      "Integrations",
      "Pricing",
      "Enterprise",
      "Changelog",
      "API",
    ],
    Company: [
      "About",
      "Careers",
      "Blog",
      "Press",
      "Partners",
      "Contact",
    ],
    Resources: [
      "Documentation",
      "Guides",
      "Support",
      "Community",
      "Status",
      "Security",
    ],
    Legal: [
      "Privacy",
      "Terms",
      "Compliance",
      "Cookies",
      "Licenses",
      "GDPR",
    ],
  };

  return (
    <footer className="bg-[#114C5A] border-t border-[rgba(241,246,244,0.06)]">
      <div className="max-w-[1280px] mx-auto px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="font-['JetBrains_Mono'] text-[24px] font-bold text-[#F1F6F4] mb-4">
              AutomateAI
            </div>

            <p className="text-[14px] text-[#D9E8E2] mb-6 leading-[1.6]">
              Enterprise AI automation platform trusted by teams worldwide.
            </p>

            <div className="mb-6">
              <label className="text-[14px] font-semibold text-[#F1F6F4] mb-2 block">
                Subscribe to our newsletter
              </label>

              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 bg-[rgba(23,43,54,0.6)] border border-[rgba(241,246,244,0.08)] rounded-[10px] text-[14px] text-[#F1F6F4] placeholder-[#D9E8E2]/50 focus:outline-none focus:border-[#FFC801] transition-colors"
                />

                <button className="px-5 py-2.5 bg-[#FFC801] text-[#172B36] text-[14px] font-semibold rounded-[10px] hover:bg-[#FF9932] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-['JetBrains_Mono'] text-[16px] font-bold text-[#F1F6F4] mb-4">
                {category}
              </h3>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-[14px] text-[#D9E8E2] hover:text-[#FFC801] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="pt-8 border-t border-[rgba(241,246,244,0.06)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-[14px] text-[#D9E8E2]">
              © 2026 AutomateAI. All rights reserved.
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#twitter"
                aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(241,246,244,0.05)] border border-[rgba(241,246,244,0.08)] hover:border-[#FFC801] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 4.01c-1 .49-2 .69-3 .69-1.25-1.25-3-1-4 0-.6.6-1 1.5-1 2.5v1c-3.5.17-6.5-1-9-4 0 0-4.5 8 5 12-2 1.5-4 2-6 2 9.5 5.5 21 0 21-11.5 0-.28-.03-.56-.08-.83 1.08-1 1.58-2 2.08-3.67z"
                    stroke="#D9E8E2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(241,246,244,0.05)] border border-[rgba(241,246,244,0.08)] hover:border-[#FFC801] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    stroke="#D9E8E2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="4"
                    cy="4"
                    r="2"
                    stroke="#D9E8E2"
                    strokeWidth="2"
                  />
                </svg>
              </a>

              <a
                href="#github"
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(241,246,244,0.05)] border border-[rgba(241,246,244,0.08)] hover:border-[#FFC801] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
                    stroke="#D9E8E2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(241,246,244,0.05)] border border-[rgba(241,246,244,0.08)] hover:border-[#FFC801] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"
                    stroke="#D9E8E2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z"
                    stroke="#D9E8E2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}