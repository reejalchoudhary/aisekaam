import { useState } from "react";
import { motion } from "motion/react";
import { LinkSolidIcon } from "./Icons";

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [currency, setCurrency] = useState("USD");

  const currencySymbols = {
    USD: "$",
    EUR: "€",
    INR: "₹",
  };

  const prices = {
    monthly: {
      USD: {
        starter: 49,
        professional: 149,
        enterprise: 499,
      },
      EUR: {
        starter: 45,
        professional: 135,
        enterprise: 450,
      },
      INR: {
        starter: 3999,
        professional: 11999,
        enterprise: 39999,
      },
    },

    annual: {
      USD: {
        starter: 39,
        professional: 119,
        enterprise: 399,
      },
      EUR: {
        starter: 35,
        professional: 108,
        enterprise: 360,
      },
      INR: {
        starter: 3199,
        professional: 9599,
        enterprise: 31999,
      },
    },
  };

  const currentPrices = prices[billingCycle][currency];
  const symbol = currencySymbols[currency];

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams",
      price: currentPrices.starter,
      popular: false,
      features: [
        "5 active workflows",
        "10,000 tasks/month",
        "Basic analytics",
        "Email support",
        "99.5% uptime SLA",
        "API access",
      ],
    },
    {
      name: "Professional",
      description: "For growing businesses",
      price: currentPrices.professional,
      popular: true,
      features: [
        "Unlimited workflows",
        "100,000 tasks/month",
        "Advanced analytics",
        "Priority support",
        "99.9% uptime SLA",
        "Custom integrations",
        "Team collaboration",
        "Dedicated account manager",
      ],
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: currentPrices.enterprise,
      popular: false,
      features: [
        "Unlimited everything",
        "Custom task limits",
        "Real-time analytics",
        "24/7 premium support",
        "99.98% uptime SLA",
        "Enterprise integrations",
        "Advanced security",
        "Custom SLA",
        "On-premise deployment",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-32">
      <div className="max-w-[1280px] mx-auto px-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="font-['JetBrains_Mono'] text-[52px] font-bold text-[#F1F6F4] mb-4">
            Simple, Transparent Pricing
          </h2>

          <p className="text-[18px] text-[#D9E8E2] max-w-[700px] mx-auto mb-12">
            Choose the plan that fits your needs. All plans include
            14-day free trial.
          </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">

          <div className="flex items-center gap-3 bg-[#114C5A] rounded-[14px] p-1.5 border border-[rgba(241,246,244,0.08)]">

            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2.5 text-[14px] font-semibold rounded-[10px] transition-all duration-200 ${
                billingCycle === "monthly"
                  ? "bg-[#FFC801] text-[#172B36]"
                  : "text-[#D9E8E2] hover:text-[#F1F6F4]"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-2.5 text-[14px] font-semibold rounded-[10px] transition-all duration-200 ${
                billingCycle === "annual"
                  ? "bg-[#FFC801] text-[#172B36]"
                  : "text-[#D9E8E2] hover:text-[#F1F6F4]"
              }`}
            >
              Annual
              <span className="ml-2 text-[12px] text-[#FF9932]">
                Save 20%
              </span>
            </button>

          </div>


          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-[140px] px-4 py-3 bg-[#114C5A] border border-[rgba(241,246,244,0.08)] rounded-[14px] text-[#D9E8E2] outline-none focus:border-[#FFC801] transition-colors"
          >
            <option value="USD">USD $</option>
            <option value="EUR">EUR €</option>
            <option value="INR">INR ₹</option>
          </select>

        </div>

      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {plans.map((plan, index) => (

          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className={`relative bg-[#114C5A] rounded-[24px] border p-8 transition-all duration-300 ${
              plan.popular
                ? "border-[#FFC801] shadow-[0_0_40px_rgba(255,200,1,0.15)]"
                : "border-[rgba(241,246,244,0.08)] hover:border-[#FFC801]"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="bg-[#FFC801] text-[#172B36] text-[12px] font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              </div>
            )}
            <div className="mb-6">
              <h3 className="font-['JetBrains_Mono'] text-[26px] font-bold text-[#F1F6F4] mb-2">
                {plan.name}
              </h3>

              <p className="text-[14px] text-[#D9E8E2]">
                {plan.description}
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-[20px] text-[#F1F6F4]">
                  {symbol}
                </span>

                <span className="font-['JetBrains_Mono'] text-[60px] font-bold text-[#F1F6F4]">
                  {plan.price}
                </span>

                <span className="text-[16px] text-[#D9E8E2]">
                  /{billingCycle === "monthly" ? "mo" : "yr"}
                </span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 mt-0.5">
                    <LinkSolidIcon
                      size={18}
                      color="#FFC801"
                    />
                  </span>

                  <span className="text-[16px] text-[#D9E8E2]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-4 text-[16px] font-semibold rounded-[14px] transition-all duration-200 ${
                plan.popular
                  ? "bg-[#FFC801] text-[#172B36] hover:bg-[#FF9932]"
                  : "bg-transparent text-[#F1F6F4] border border-[rgba(241,246,244,0.2)] hover:border-[#FFC801]"
              }`}
            >
              {plan.name === "Enterprise"
                ? "Contact Sales"
                : "Start Free Trial"}
            </button>

            <p className="text-[12px] text-[#D9E8E2] text-center mt-4">
              14-day money back guarantee
            </p>

          </motion.div>

        ))}

      </div>

    </div>

  </section>
  );
}

export default Pricing;