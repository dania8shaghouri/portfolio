// icons
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbSocial } from "react-icons/tb";
import { FiClock } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { IoIosSend } from "react-icons/io";
// component
import SocialLinks from "../components/SocialLinks";
import ContactItem from "../components/ui/ContactItem";
import Button from "../components/ui/Button";
import AnimatedSection from "../components/AnimatedSection";
//
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
//
import toast from "react-hot-toast";

const content = {
  en: {
    badge: "Contact",
    title: "Let’s work together",
    description:
      "I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
    infoTitle: "Contact Information",
    socialTitle: "Social Media",
    formTitle: "Send Message",

    labels: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
    },

    placeholders: {
      name: "Your name",
      email: "you@example.com",
      subject: "What is this message about?",
      message: "Tell me about your project...",
    },

    contact: {
      email: "Gmail",
      location: "Location",
      response: "Response time",
      responseValue: "Usually replies within 24 hours",
      locationValue: "Bursa, Türkiye",
    },

    button: {
      sending: "Sending...",
      send: "Send Message",
    },
  },

  tr: {
    badge: "İletişim",
    title: "Birlikte çalışalım",
    description:
      "Yeni projeler, yaratıcı fikirler veya iş fırsatları hakkında konuşmaya her zaman açığım.",

    infoTitle: "İletişim Bilgileri",
    socialTitle: "Sosyal Medya",
    formTitle: "Mesaj Gönder",

    labels: {
      name: "İsim",
      email: "E-posta",
      subject: "Konu",
      message: "Mesaj",
    },

    placeholders: {
      name: "Adınız",
      email: "ornek@mail.com",
      subject: "Mesaj konusu nedir?",
      message: "Projeniz hakkında yazın...",
    },

    contact: {
      email: "E-posta",
      location: "Konum",
      response: "Yanıt süresi",
      responseValue: "Genelde 24 saat içinde dönüş yaparım",
      locationValue: "Bursa, Türkiye",
    },

    button: {
      sending: "Gönderiliyor...",
      send: "Mesaj Gönder",
    },
  },
};

export default function ContactSection({ language }) {
  const text = content[language];

  const formRef = useRef(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const name = form.user_name.value.trim();
    const email = form.user_email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    toast
      .promise(
        emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        ),
        {
          loading: "Sending message...",
          success: "Message sent successfully 🚀",
          error: "Message could not be sent 😕",
        },
      )
      .then(() => form.reset())
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="relative py-20 px-4">
      {/* HEADER */}
      <div className="flex flex-col items-center text-center mb-20">
        <h2 className="border border-gray-300 py-1 px-3 rounded-xl text-xs font-semibold bg-[var(--bg-header)]">
          {text.badge}
        </h2>

        <h2 className="text-3xl font-bold mb-4">{text.title}</h2>

        <p className="max-w-2xl text-sm md:text-base text-gray-600">
          {text.description}
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <AnimatedSection direction="left">
          <div className="flex flex-col gap-8">
            {/* INFO */}
            <div className="flex flex-col gap-3 bg-[var(--bg-about)] rounded-xl p-6 shadow-sm border border-gray-300">
              <h2 className="font-semibold">{text.infoTitle}</h2>

              <div className="px-8 space-y-5">
                <ContactItem
                  icon={<CgMail />}
                  title={text.contact.email}
                  value="daniashaghouri@gmail.com"
                  color="text-blue-400"
                />

                <ContactItem
                  icon={<MdOutlineLocationOn />}
                  title={text.contact.location}
                  value={text.contact.locationValue}
                  color="text-red-400"
                />

                <ContactItem
                  icon={<FiClock />}
                  title={text.contact.response}
                  value={text.contact.responseValue}
                  color="text-emerald-400"
                />
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex flex-col gap-3 bg-[var(--bg-about)] rounded-xl p-6 shadow-sm border border-gray-300">
              <h2 className="font-semibold">{text.socialTitle}</h2>
              <SocialLinks show={["linkedin", "github"]} className="px-7" />
            </div>
          </div>
        </AnimatedSection>

        {/* FORM */}
        <AnimatedSection direction="right">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-[var(--bg-about)] border border-gray-300 rounded-xl px-8 py-6 space-y-6 shadow-sm"
          >
            <h2 className="font-semibold">{text.formTitle}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div>
                <label>{text.labels.name}</label>
                <input
                  name="user_name"
                  placeholder={text.placeholders.name}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm"
                />
              </div>

              <div>
                <label>{text.labels.email}</label>
                <input
                  name="user_email"
                  type="email"
                  placeholder={text.placeholders.email}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm"
                />
              </div>
            </div>

            <div>
              <label>{text.labels.subject}</label>
              <input
                name="subject"
                placeholder={text.placeholders.subject}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm"
              />
            </div>

            <div>
              <label>{text.labels.message}</label>
              <textarea
                name="message"
                rows="2"
                placeholder={text.placeholders.message}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm"
              />
            </div>

            <Button variant="pink" className="w-full" disabled={loading}>
              {loading ? text.button.sending : text.button.send}
            </Button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
