import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(23,43,54,0.95)] backdrop-blur-[16px] border-b border-[rgba(241,246,244,0.06)]"
          : "bg-transparent"
      }`}
      style={{
        animation: "navbarFade 0.5s ease forwards",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-20">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span
              className="font-bold text-[20px] text-[#F1F6F4]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              AISeKaam
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Features", "Solutions", "Pricing", "Resources", "About"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[16px] text-[#D9E8E2] hover:text-[#FFC801] transition-colors duration-200"
                >
                  {item}
                </a>
              )
            )}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block px-6 py-2.5 text-[16px] font-semibold text-[#D9E8E2] border border-[rgba(241,246,244,0.2)] rounded-[14px] hover:border-[#FFC801] transition-all duration-200">
              Login
            </button>

            <button className="px-6 py-2.5 text-[16px] font-semibold bg-[#FFC801] text-[#172B36] rounded-[14px] hover:bg-[#FF9932] transition-all duration-200">
              Start Free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;