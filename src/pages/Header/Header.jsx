import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", target: "home" },
    { label: "Services", target: "pricing" },
    { label: "Team", target: "team" },
    { label: "Gallery", target: "gallery" },
    { label: "About", target: "about" },
    { label: "Contact", target: "contact" },
    { label: "Appointment", target: "appointment" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-[100] px-4">
      <div className="mx-auto max-w-5xl bg-white/80 backdrop-blur-md border border-gray-100 shadow-xl transition-all duration-300 ">
        <nav className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="text-xl font-bold text-black">RAINBOW</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            {menuItems.map((item) => (
              <li
                key={item.label}
                onClick={() => scrollToSection(item.target)}
                className="relative cursor-pointer transition-colors hover:text-black
                           after:absolute after:left-0 after:-bottom-1
                           after:h-[2px] after:w-0 after:bg-black
                           after:transition-all after:duration-300
                           hover:after:w-full"
              >
                {item.label}
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden mt-2 overflow-hidden bg-white/95 backdrop-blur-lg shadow-2xl transition-all duration-500 ease-in-out border border-gray-100
        ${
          open
            ? "max-h-96 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-4 p-6 text-gray-800 font-semibold uppercase tracking-wider text-sm">
          {menuItems.map((item) => (
            <li
              key={item.label}
              onClick={() => {
                scrollToSection(item.target);
                setOpen(false);
              }}
              className="hover:text-blue-600 transition-colors border-b border-gray-50 pb-2 last:border-0 cursor-pointer"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
