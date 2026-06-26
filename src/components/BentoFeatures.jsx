import { useState, useEffect } from "react";
import { motion } from "motion/react";

import {
  ChartPieIcon,
  CogIcon,
  SearchIcon,
  ArrowTrendingUpIcon,
  CubeIcon,
  ArrowPathIcon,
} from "./Icons";

const features = [
  {
    id: "1",
    Icon: ChartPieIcon,
    title: "Advanced Analytics",
    description:
      "Real-time insights and data visualization to track performance and make data-driven decisions.",
    stat: "10x faster insights",
  },
  {
    id: "2",
    Icon: CogIcon,
    title: "Intelligent Automation",
    description:
      "Automate complex workflows with AI-powered decision-making and smart routing.",
    stat: "85% time saved",
  },
  {
    id: "3",
    Icon: SearchIcon,
    title: "AI-Powered Search",
    description:
      "Natural language search across all your data with instant, relevant results.",
    stat: "99% accuracy",
  },
  {
    id: "4",
    Icon: ArrowTrendingUpIcon,
    title: "Scalable Growth",
    description:
      "Grow from startup to enterprise without changing your infrastructure.",
    stat: "500% capacity",
  },
  {
    id: "5",
    Icon: CubeIcon,
    title: "Enterprise Infrastructure",
    description:
      "Bank-level security with 99.98% uptime and global redundancy.",
    stat: "SOC2 certified",
  },
  {
    id: "6",
    Icon: ArrowPathIcon,
    title: "Seamless Workflows",
    description:
      "Connect all your tools and automate end-to-end business processes.",
    stat: "200+ integrations",
  },
];

function BentoCard({ feature, colSpan, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`${colSpan} bg-[#114C5A] rounded-[24px] border border-[rgba(241,246,244,0.08)] p-8 hover:border-[#FFC801] transition-all duration-300 group`}
    >
      <div className="mb-6 transition-transform duration-300 group-hover:scale-105">
        <feature.Icon size={32} color="#FFC801" />
      </div>

      <h3 className="font-['JetBrains_Mono'] text-[26px] font-bold text-[#F1F6F4] mb-3">
        {feature.title}
      </h3>

      <p className="text-[16px] text-[#D9E8E2] mb-4 leading-[1.6]">
        {feature.description}
      </p>

      <div className="text-[14px] text-[#FFC801] font-['JetBrains_Mono']">
        {feature.stat}
      </div>
    </motion.div>
  );
}
export function BentoFeatures() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState("");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sectionHeader = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="font-['JetBrains_Mono'] text-[52px] font-bold text-[#F1F6F4] mb-4 max-sm:text-[32px]">
        Enterprise-Grade Features
      </h2>

      <p className="text-[18px] text-[#D9E8E2] max-w-[700px] mx-auto max-sm:text-[16px]">
        Everything you need to automate, scale, and optimize your business
        operations.
      </p>
    </motion.div>
  );

  if (!isMobile) {
    return (
      <section id="features" className="py-32">
        <div className="max-w-[1280px] mx-auto px-20">
          {sectionHeader}

          <div className="grid grid-cols-12 gap-6">

            <BentoCard
              feature={features[0]}
              colSpan="col-span-12 md:col-span-6 lg:col-span-5"
              delay={0}
            />

            <BentoCard
              feature={features[1]}
              colSpan="col-span-6 md:col-span-3 lg:col-span-3"
              delay={0.1}
            />

            <BentoCard
              feature={features[2]}
              colSpan="col-span-6 md:col-span-3 lg:col-span-4"
              delay={0.2}
            />

            <BentoCard
              feature={features[3]}
              colSpan="col-span-6 md:col-span-3 lg:col-span-3"
              delay={0.3}
            />

            <BentoCard
              feature={features[4]}
              colSpan="col-span-6 md:col-span-3 lg:col-span-4"
              delay={0.4}
            />

            <BentoCard
              feature={features[5]}
              colSpan="col-span-12 md:col-span-6 lg:col-span-5"
              delay={0.5}
            />

          </div>

        </div>

      </section>
    );
  }
    return (
    <section id="features" className="py-32">
      <div className="max-w-[1280px] mx-auto px-8">
        {sectionHeader}

        <div className="space-y-4">

          {features.map((feature, index) => (

            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              className="bg-[#114C5A] rounded-[20px] border border-[rgba(241,246,244,0.08)] overflow-hidden"
            >

              <button
                onClick={() =>
                  setActiveIndex(
                    activeIndex === index.toString()
                      ? ""
                      : index.toString()
                  )
                }
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:bg-[rgba(241,246,244,0.03)]"
              >

                <div className="flex items-center gap-4">

                  <feature.Icon
                    size={30}
                    color="#FFC801"
                  />

                  <div className="font-['JetBrains_Mono'] text-[20px] font-bold text-[#F1F6F4]">
                    {feature.title}
                  </div>

                </div>

                <div className="text-[#FFC801] text-[28px] font-light">
                  {activeIndex === index.toString()
                    ? "−"
                    : "+"}
                </div>

              </button>

              {activeIndex === index.toString() && (

                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                  className="px-6 pb-6"
                >

                  <p className="text-[16px] text-[#D9E8E2] leading-[1.6] mb-4">
                    {feature.description}
                  </p>

                  <div className="text-[14px] text-[#FFC801] font-['JetBrains_Mono']">
                    {feature.stat}
                  </div>

                </motion.div>

              )}

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
