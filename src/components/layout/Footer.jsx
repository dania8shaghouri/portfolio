import SocialLinks from "../SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-about)] border-t border-gray-300 mt-24">
      <div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* 1. Portfolio */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gradient  text-center">
            Portfolio
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed text-center">
            Frontend Developer focused on building clean, responsive, and
            user-friendly interfaces using modern web technologies.
          </p>

          <p className="text-gray-500 text-center">
            Built with 🩵<span className="font-medium">React</span> &{" "}
            <span className="font-medium">Tailwind CSS</span>
          </p>
        </div>

        {/* 2. Quick Links */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-center">Quick Links</h3>

          <ul className="space-y-2 text-sm text-center">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-[#005b4b] transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-600 hover:text-[#005b4b] transition"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-600 hover:text-[#005b4b] transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-600 hover:text-[#005b4b] transition"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-600 hover:text-[#005b4b] transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* 3. Follow Me */}
        <div className="space-y-4 text-center">
          <h3 className="font-semibold text-lg text-center">Follow Me</h3>

          <p className="text-sm text-gray-600 text-center">
            Follow me for new projects, updates, and professional insights.
          </p>

          <SocialLinks />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Dania. All rights reserved.
      </div>
    </footer>
  );
}
