import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbSocial } from "react-icons/tb";
import { FiClock } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
// component
import SocialLinks from "../components/SocialLinks";
import ContactItem from "../components/ContactItem";
export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 px-4 bg-[var(--bg-about)] ">
      <div className="flex flex-col items-center text-center mb-20">
        <span className="mb-4">
          <h2 className="border border-gray-300 py-1 px-3 rounded-xl text-xs font-semibold bg-[var(--bg-header)]">
            Contact
          </h2>
        </span>

        <h2 className="text-3xl font-bold mb-4">Let’s work together</h2>

        <p className="max-w-2xl text-sm md:text-base text-gray-600 leading-relaxed">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-8">
          {/* Contact Information */}
          <div className="flex flex-col gap-3 bg-white rounded-xl p-6 shadow-sm border border-gray-300">
            <div className="inline-flex gap-3 items-center">
              <IoChatbubbleEllipsesOutline className="text-[#e462ab] text-2xl" />
              <h2 className="font-semibold">Contact Information</h2>
            </div>

            <div className="px-8 space-y-5">
              <ContactItem
                icon={<CgMail />}
                title="Gmail"
                value="daniashaghouri@gmail.com"
                color="text-blue-400"
              />

              <ContactItem
                icon={<MdOutlineLocationOn />}
                title="Location"
                value="Bursa, Türkiye"
                color="text-red-400"
              />

              <ContactItem
                icon={<FiClock />}
                title="Response time"
                value="Usually replies within 24 hours"
                color="text-emerald-400"
              />
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-3 bg-white rounded-xl p-6 shadow-sm border border-gray-300">
            <div className="inline-flex gap-3 items-center">
              <TbSocial className="text-[#e462ab] text-2xl" />
              <h2 className="font-semibold">Social Media</h2>
            </div>

            <SocialLinks show={["linkedin", "github"]} className="px-7" />
          </div>
        </div>

        {/* RIGHT COLUMN – FORM */}
        <div>
          <form className="bg-white border border-gray-300 rounded-xl px-8 py-6 space-y-6 shadow-sm">
            <h2 className="font-semibold">Send Message</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div>
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#e462ab]"
                />
              </div>

              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#e462ab]"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2"></label>
              <input
                type="text"
                placeholder="What is this message about?"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#e462ab]"
              />
            </div>

            <div>
              <label className="block mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Tell me about your project..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:border-[#e462ab]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#e462ab] text-white font-medium py-3 rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
