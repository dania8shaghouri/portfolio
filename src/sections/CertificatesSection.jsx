import CertificateCard from "../components/cards/CertificateCard";
import { certificatesData } from "../data/certificatesData";

export default function CertificatesSection({ language }) {
  return (
    <section id="certificates" className="py-20 px-4 bg-[var(--bg-about)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="border border-gray-300 py-1 px-3 rounded-xl text-xs font-semibold bg-[var(--bg-header)] inline-block">
            {language === "tr" ? "Sertifikalar" : "Certificates"}
          </h2>

          <h2 className="text-3xl font-bold mt-4">
            {language === "tr" ? "Sertifikalarım" : "My Certifications"}
          </h2>

          <p className="text-sm text-gray-600 max-w-2xl mx-auto mt-3">
            {language === "tr"
              ? "Frontend ve full-stack geliştirme becerilerimi destekleyen kurslar ve sertifikalar."
              : "Courses and certifications that support my frontend and full-stack development skills."}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {certificatesData.map((cert, i) => (
            <CertificateCard key={i} cert={cert} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
}
