import { useState, useEffect } from "react";

const navItems = [
  
  { name: "Platform", id: "platform" },
  { name: "Features", id: "features" },
  { name: "Reviews", id: "testimonials" },
  { name: "Plans", id: "pricing" },
  { name: "FAQs", id: "faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("features");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(23,43,54,0.85)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)]"
          : "bg-transparent"
      }`}
      style={{
        animation: "navbarFade .5s ease forwards",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-20">
        <div className="h-20 flex items-center justify-between">

          <a
            href="#hero"
            className="text-[22px] font-bold text-[#F1F6F4]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            AISeKaam
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative text-[16px] transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-[#FFC801]"
                    : "text-[#D9E8E2] hover:text-[#FFC801]"
                }`}
              >
                {item.name}

                <span
                  className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-[#FFC801] transition-all duration-300 ${
                    activeSection === item.id
                      ? "w-full"
                      : "w-0"
                  }`}
                />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">

            <button className="hidden md:block px-6 py-2.5 rounded-xl border border-[rgba(255,255,255,0.18)] text-[#F1F6F4] hover:border-[#FFC801] hover:text-[#FFC801] transition-all duration-300">
              Login
            </button>

            <button className="px-6 py-2.5 rounded-xl bg-[#FFC801] text-[#172B36] font-semibold hover:bg-[#FFB300] transition-all duration-300">
              Start Free
            </button>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;