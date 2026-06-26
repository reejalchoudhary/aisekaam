import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDownIcon } from "./Icons";

const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer:
      "Start using AutomateAI immediately with full access to all features. No credit card required. After 14 days, choose a plan that fits your needs or continue with our free tier.",
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer:
      "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades will be applied at the start of your next billing cycle. You'll receive prorated credits for any unused time.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer email support for all plans, priority support for Professional plans, and 24/7 premium support with dedicated account managers for Enterprise customers. All plans include comprehensive documentation and video tutorials.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We're SOC2 Type II certified and comply with GDPR, CCPA, and HIPAA standards. All data is encrypted at rest and in transit using industry-standard protocols. We also offer on-premise deployment for Enterprise customers.",
  },
  {
    question: "How does billing work for annual plans?",
    answer:
      "Annual plans are billed once per year and offer a 20% discount compared to monthly billing. You can pay via credit card, ACH transfer, or wire transfer. Enterprise customers can also arrange custom payment terms.",
  },
  {
    question: "What integrations do you support?",
    answer:
      "We support 200+ integrations with popular tools including Salesforce, Slack, Microsoft Teams, Google Workspace, AWS, Azure, and more. Professional and Enterprise plans include custom integration development.",
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#114C5A] rounded-[16px] border border-[rgba(241,246,244,0.08)] px-6 overflow-hidden transition-colors duration-300 hover:border-[rgba(255,200,1,0.3)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left gap-4"
      >
        <span className="font-['JetBrains_Mono'] text-[20px] font-bold text-[#F1F6F4] pr-4">
          {faq.question}
        </span>

        <span
          className="flex-shrink-0 transition-transform duration-300"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <ChevronDownIcon size={20} color="#FFC801" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            <p className="text-[16px] text-[#D9E8E2] leading-[1.6] pb-6">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="py-32">
      <div className="max-w-[900px] mx-auto px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['JetBrains_Mono'] text-[52px] font-bold text-[#F1F6F4] mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-[18px] text-[#D9E8E2]">
            Everything you need to know about AutomateAI
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-[16px] text-[#D9E8E2] mb-4">
            Still have questions?
          </p>

          <a
            href="#contact"
            className="text-[16px] text-[#FFC801] hover:text-[#FF9932] transition-colors font-semibold"
          >
            Contact our team →
          </a>
        </motion.div>
      </div>
    </section>
  );
}