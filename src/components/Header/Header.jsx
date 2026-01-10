// icons
import { CiLight } from "react-icons/ci";

export default function Header() {
  return (
    <header className="fixed top-4 left-0 w-full z-50  ">
      <nav
        className="mx-auto max-w-4xl bg-[var(--bg-header)]
       px-6 py-2 rounded-xl flex items-center justify-between"
      >
        <div className="text-xl font-bold text-gradient">Portfolio</div>

        <ul className="hidden md:flex gap-10 text-black font-medium">
          <li className="cursor-pointer rounded-md hover:bg-[var(--color-white)] hover:shadow-md transition-all px-2 py-1">
            About Me
          </li>
          <li className="cursor-pointer rounded-md hover:bg-[var(--color-white)] hover:shadow-md transition-all px-2 py-1">
            Projects
          </li>
          <li className="cursor-pointer rounded-md hover:bg-[var(--color-white)] hover:shadow-md transition-all px-2 py-1">
            Skills
          </li>
          <li className="cursor-pointer rounded-md hover:bg-[var(--color-white)] hover:shadow-md transition-all px-2 py-1">
            Contact
          </li>
        </ul>

        <button className="rounded-md p-1 border border-gray-300 hover:bg-[var(--icon-hover)]">
          <CiLight className="w-5 h-5" />
        </button>
      </nav>
    </header>
  );
}
