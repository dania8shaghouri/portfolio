import { useState } from "react";
// icons
import { CiLight } from "react-icons/ci";
import { HiX } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const menuItems = [
    { label: "About Me", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-4 left-0 w-full z-50">
      <nav
        className="mx-auto max-w-4xl bg-[var(--bg-header)]
        px-6 py-2 rounded-xl flex items-center justify-between relative"
      >
        {/* Logo */}
        <div className="text-xl font-bold text-gradient">Portfolio</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-black font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="cursor-pointer rounded-md
      hover:bg-[var(--color-white)]
      hover:shadow-md transition-all px-2 py-1"
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button className="rounded-md p-1 border border-gray-300 hover:bg-[var(--icon-hover)]">
            <CiLight className="w-5 h-5 " />
          </button>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1 rounded-md border border-gray-300 hover:bg-[var(--icon-hover)]"
          >
            {isOpen ? <HiX size={22} /> : <RxHamburgerMenu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul
            className="absolute top-full left-0 w-full 
            bg-[var(--bg-header)] rounded-xl shadow-lg
            flex flex-col  gap-4 p-4 md:hidden
            border-t border-gray-200"
          >
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="cursor-pointer rounded-md hover:border hover:border-gray-200 hover:rounded-lg hover:bg-white
                transition-all px-2 py-2 text-start font-medium"
              >
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
