export default function CertificateCard({ cert, language }) {
  return (
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        block
        bg-white
        border border-gray-200
        rounded-2xl
        overflow-hidden
        transition-all
        hover:shadow-xl
        hover:scale-[1.02]
        hover:border-[var(--icons-color)]
      "
    >
      <img
        src={cert.image}
        alt={cert.title[language]}
        className="w-full h-44 object-cover"
      />

      <div className="p-5">
        <span className="text-xs px-2 py-1 rounded-md bg-[var(--bg-header)] border border-gray-200">
          {cert.certificateType[language]}
        </span>

        <h3 className="font-semibold text-lg mt-3">{cert.title[language]}</h3>

        <p className="text-sm text-gray-500 mt-1">{cert.issuer[language]}</p>

        <p className="text-xs text-gray-400 mt-2 line-clamp-2">
          {cert.description[language]}
        </p>

        <span className="text-xs text-gray-400 block mt-3">
          {cert.date[language]}
        </span>

        <div className="mt-4 text-sm text-[var(--icons-color)] font-medium">
          View Certificate →
        </div>
      </div>
    </a>
  );
}
