import {
  ArrowTrendingUpIcon,
  CubeIcon,
  CogIcon,
  ChartPieIcon,
  SearchIcon,
  ArrowPathIcon,
  LinkSolidIcon,
} from "./Icons";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#172B36]">
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(241,246,244,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(241,246,244,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,200,1,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-20 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div
          className="opacity-0 animate-[fadeLeft_.7s_ease_forwards]"
          style={{ animationDelay: ".2s" }}
        >
          <div className="inline-block px-4 py-1.5 bg-[rgba(241,246,244,0.05)] border border-[rgba(241,246,244,0.08)] rounded-full mb-8">
            <span
              className="text-[14px] text-[#FFC801]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Enterprise AI Automation
            </span>
          </div>

          <h1
            className="font-bold text-[#F1F6F4] mb-8 leading-[1.1]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "72px",
            }}
          >
            Automate Every Workflow.
            <br />
            Scale Every Decision.
            <br />
            <span className="text-[#FFC801]">
              Powered by Intelligent AI.
            </span>
          </h1>

          <p className="text-[18px] leading-[1.5] text-[#D9E8E2] mb-10 max-w-[580px]">
            Transform your enterprise operations with our AI-powered automation
            platform. Streamline workflows, optimize decision-making, and unlock
            unprecedented efficiency across your organization.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button className="px-8 py-4 text-[16px] font-semibold bg-[#FFC801] text-[#172B36] rounded-[14px] hover:bg-[#FF9932] transition-all duration-200 shadow-lg">
              Start Free Trial
            </button>

            <button className="flex items-center gap-2 px-8 py-4 text-[16px] font-semibold text-[#F1F6F4] border border-[rgba(241,246,244,0.2)] rounded-[14px] hover:border-[#FFC801] transition-all duration-200">
              Book Demo
              <LinkSolidIcon size={16} color="#FFC801" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                value: "99.98%",
                label: "uptime",
              },
              {
                value: "150K+",
                label: "automations",
              },
              {
                value: "42",
                label: "countries",
              },
              {
                value: "SOC2",
                label: "compliant",
              },
            ].map((stat) => (
              <div key={stat.label} className="flex items-start gap-2">
                <ArrowTrendingUpIcon
                  size={16}
                  color="#FFC801"
                  className="mt-1.5 flex-shrink-0"
                />

                <div>
                  <div
                    className="font-bold text-[#FFC801]"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "24px",
                    }}
                  >
                    {stat.value}
                  </div>

                  <div className="text-[14px] text-[#D9E8E2] mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative opacity-0 animate-[fadeRight_.7s_ease_forwards]"
          style={{ animationDelay: ".4s" }}
        >
          <div className="relative bg-[#114C5A] rounded-[24px] border border-[rgba(241,246,244,0.08)] p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[rgba(241,246,244,0.06)]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF9932]" />
                <div className="w-3 h-3 rounded-full bg-[#FFC801]" />
                <div className="w-3 h-3 rounded-full bg-[#D9E8E2]" />
              </div>

              <div className="flex items-center gap-2">
                <CubeIcon size={14} color="#FFC801" />

                <div
                  className="text-[12px] text-[#D9E8E2]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  Live Dashboard
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-[rgba(23,43,54,0.4)] rounded-[16px] p-4">
                <div className="flex items-center gap-2 mb-3">
                  <ChartPieIcon size={14} color="#FFC801" />

                  <div className="text-[12px] text-[#D9E8E2]">
                    Revenue Analytics
                  </div>
                </div>

                <div className="flex items-end gap-1.5 h-24">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 95, 75, 88, 92].map(
                    (height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-[#FFC801] to-[#FF9932] rounded-t opacity-80"
                        style={{
                          height: `${height}%`,
                        }}
                      />
                    )
                  )}
                </div>
              </div>
                            <div className="grid grid-cols-2 gap-3">
                <div className="bg-[rgba(23,43,54,0.4)] rounded-[12px] p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <CogIcon size={12} color="#FFC801" />
                    <div className="text-[10px] text-[#D9E8E2]">
                      Active Workflows
                    </div>
                  </div>

                  <div
                    className="font-bold text-[#FFC801]"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "20px",
                    }}
                  >
                    1,247
                  </div>

                  <div className="flex items-center gap-1 mt-1">
                    <ArrowTrendingUpIcon size={10} color="#FFC801" />
                    <div className="text-[10px] text-[#D9E8E2]">
                      +12.5% this week
                    </div>
                  </div>
                </div>

                <div className="bg-[rgba(23,43,54,0.4)] rounded-[12px] p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <ArrowPathIcon size={12} color="#FFC801" />
                    <div className="text-[10px] text-[#D9E8E2]">
                      Success Rate
                    </div>
                  </div>

                  <div
                    className="font-bold text-[#FFC801]"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "20px",
                    }}
                  >
                    98.7%
                  </div>

                  <div className="flex items-center gap-1 mt-1">
                    <ArrowTrendingUpIcon size={10} color="#FFC801" />
                    <div className="text-[10px] text-[#D9E8E2]">
                      +2.1% improvement
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[rgba(23,43,54,0.4)] rounded-[12px] p-3">
                <div className="flex items-center gap-1.5 mb-2">
                  <SearchIcon size={12} color="#FFC801" />
                  <div className="text-[10px] text-[#D9E8E2]">
                    Recent Activity
                  </div>
                </div>

                <div className="space-y-2">
                  {[
                    "Workflow completed",
                    "Data synced",
                    "Report generated",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFC801]" />
                      <div className="text-[10px] text-[#D9E8E2]">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className="absolute -top-4 -right-4 bg-[#114C5A] rounded-[12px] border border-[rgba(241,246,244,0.08)] p-3 shadow-lg animate-[floatUp_3s_ease-in-out_infinite]"
          >
            <div className="text-[10px] text-[#D9E8E2] mb-1">
              CPU Usage
            </div>

            <div
              className="font-bold text-[#FFC801]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "16px",
              }}
            >
              23.4%
            </div>
          </div>

          <div
            className="absolute -bottom-4 -left-4 bg-[#114C5A] rounded-[12px] border border-[rgba(241,246,244,0.08)] p-3 shadow-lg animate-[floatDown_4s_ease-in-out_infinite]"
          >
            <div className="text-[10px] text-[#D9E8E2] mb-1">
              Tasks/min
            </div>

            <div
              className="font-bold text-[#FFC801]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "16px",
              }}
            >
              847
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;