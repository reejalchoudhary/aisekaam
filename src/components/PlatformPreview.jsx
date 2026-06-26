import { motion } from "motion/react";
import {
  ChartPieIcon,
  CogIcon,
  SearchIcon,
  CubeIcon,
  ArrowPathIcon,
  ArrowTrendingUpIcon,
} from "./Icons";

const widgets = [
  { label: "Analytics", Icon: ChartPieIcon },
  { label: "Automation", Icon: CogIcon },
  { label: "Search", Icon: SearchIcon },
  { label: "Infrastructure", Icon: CubeIcon },
  { label: "Workflows", Icon: ArrowPathIcon },
];

export function PlatformPreview() {
  return (
    <section id="platform" className="py-32 bg-[#172B36]">
      <div className="max-w-[1280px] mx-auto px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['JetBrains_Mono'] text-[52px] font-bold text-[#F1F6F4] mb-4">
            Your Command Center
          </h2>

          <p className="text-[18px] text-[#D9E8E2] max-w-[700px] mx-auto">
            A unified platform to monitor, manage, and optimize all your
            automated workflows.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="bg-[#114C5A] rounded-[24px] border border-[rgba(241,246,244,0.08)] overflow-hidden shadow-2xl">
            <div className="flex min-h-[600px]">

              <div className="w-64 bg-[rgba(23,43,54,0.6)] border-r border-[rgba(241,246,244,0.06)] p-6">

                <div className="font-['JetBrains_Mono'] text-[18px] font-bold text-[#F1F6F4] mb-8">
                  AISeKaam
                </div>

                <nav className="space-y-2">
                  {[
                    "Dashboard",
                    "Workflows",
                    "Analytics",
                    "Pipelines",
                    "Settings",
                  ].map((item, i) => (
                    <div
                      key={item}
                      className={`px-4 py-2.5 rounded-lg text-[14px] transition-colors ${
                        i === 0
                          ? "bg-[#FFC801] text-[#172B36] font-semibold"
                          : "text-[#D9E8E2] hover:bg-[rgba(241,246,244,0.05)]"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-[rgba(241,246,244,0.06)]">

                  <div className="text-[11px] text-[#D9E8E2] uppercase tracking-widest mb-4 opacity-50">
                    Modules
                  </div>

                  <div className="space-y-3">

                    {widgets.map(({ label, Icon }) => (

                      <div
                        key={label}
                        className="flex items-center gap-3 group cursor-pointer"
                      >
                        <Icon
                          size={16}
                          color="#FFC801"
                          className="flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity"
                        />

                        <span className="text-[13px] text-[#D9E8E2] group-hover:text-[#FFC801] transition-colors">
                          {label}
                        </span>
                      </div>

                    ))}

                  </div>

                </div>

              </div>

              <div className="flex-1 p-8">

                <div className="flex items-center justify-between mb-8 pb-6 border-b border-[rgba(241,246,244,0.06)]">

                  <div>
                    <h3 className="font-['JetBrains_Mono'] text-[24px] font-bold text-[#F1F6F4]">
                      Overview
                    </h3>

                    <p className="text-[14px] text-[#D9E8E2] mt-1">
                      Real-time monitoring and insights
                    </p>
                  </div>

                  <div className="flex gap-3">

                    <button className="px-4 py-2 text-[14px] text-[#D9E8E2] border border-[rgba(241,246,244,0.2)] rounded-lg hover:border-[#FFC801] transition-colors">
                      Export
                    </button>

                    <button className="px-4 py-2 text-[14px] bg-[#FFC801] text-[#172B36] font-semibold rounded-lg hover:bg-[#FF9932] transition-colors">
                      New Workflow
                    </button>

                  </div>

                </div>

                <div className="grid grid-cols-3 gap-6 mb-8">

                  {[
                    {
                      label: "Active Workflows",
                      value: "1,247",
                      change: "+12.5%",
                      Icon: ArrowPathIcon,
                    },
                    {
                      label: "Total Automations",
                      value: "152K",
                      change: "+8.2%",
                      Icon: CogIcon,
                    },
                    {
                      label: "Success Rate",
                      value: "98.7%",
                      change: "+2.1%",
                      Icon: ArrowTrendingUpIcon,
                    },
                  ].map((metric, i) => (
                    <div
                      key={i}
                      className="bg-[rgba(23,43,54,0.4)] rounded-[16px] p-5 border border-[rgba(241,246,244,0.05)]"
                    >
                      <div className="flex items-center gap-2 mb-2">

                        <metric.Icon size={14} color="#FFC801" />

                        <div className="text-[12px] text-[#D9E8E2]">
                          {metric.label}
                        </div>

                      </div>

                      <div className="font-['JetBrains_Mono'] text-[28px] font-bold text-[#F1F6F4]">
                        {metric.value}
                      </div>

                      <div className="text-[12px] text-[#FFC801] mt-1">
                        {metric.change}
                      </div>

                    </div>
                  ))}

                </div>
                <div className="grid grid-cols-2 gap-6">

                  <div className="bg-[rgba(23,43,54,0.4)] rounded-[16px] p-5 border border-[rgba(241,246,244,0.05)]">

                    <div className="flex items-center gap-2 mb-4">
                      <ArrowTrendingUpIcon size={14} color="#FFC801" />
                      <div className="text-[14px] font-semibold text-[#F1F6F4]">
                        Performance Trend
                      </div>
                    </div>

                    <div className="flex items-end gap-2 h-32">

                      {[45, 62, 55, 75, 68, 85, 78, 92, 88, 95, 91, 97].map(
                        (height, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-[#FFC801] to-[#FF9932] rounded-t"
                            style={{ height: `${height}%` }}
                          />
                        )
                      )}

                    </div>

                  </div>

                  <div className="bg-[rgba(23,43,54,0.4)] rounded-[16px] p-5 border border-[rgba(241,246,244,0.05)]">

                    <div className="flex items-center gap-2 mb-4">
                      <ChartPieIcon size={14} color="#FFC801" />
                      <div className="text-[14px] font-semibold text-[#F1F6F4]">
                        Active Pipeline
                      </div>
                    </div>

                    <div className="space-y-3">

                      {[
                        {
                          name: "Data Ingestion",
                          status: "Running",
                          progress: 85,
                        },
                        {
                          name: "Processing",
                          status: "Active",
                          progress: 62,
                        },
                        {
                          name: "Analysis",
                          status: "Queued",
                          progress: 30,
                        },
                      ].map((task, i) => (
                        <div key={i}>

                          <div className="flex items-center justify-between mb-1.5">

                            <div className="text-[12px] text-[#D9E8E2]">
                              {task.name}
                            </div>

                            <div className="text-[10px] text-[#FFC801]">
                              {task.status}
                            </div>

                          </div>

                          <div className="h-2 bg-[rgba(23,43,54,0.6)] rounded-full overflow-hidden">

                            <div
                              className="h-full bg-gradient-to-r from-[#FFC801] to-[#FF9932] rounded-full"
                              style={{ width: `${task.progress}%` }}
                            />

                          </div>

                        </div>
                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}