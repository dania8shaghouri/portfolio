import shot1 from "/src/assets/img/Screenshot 2026-01-14 135255.png";
import shot2 from "/src/assets/img/Screenshot 2026-01-14 135124.png";
import shot3 from "/src/assets/img/Screenshot 2026-01-14 134935.png";

// e-commerce react
import eco1 from "/src/assets/img/E1.png";
import eco2 from "/src/assets/img/E2.png";
import eco3 from "/src/assets/img/E3.png";

export const projects = [
  {
    company: "Scramblebit Marketing & Software Ltd.",
    role: {
      en: "Frontend Developer Intern",
      tr: "Frontend Geliştirici Stajyeri",
    },
    meta: [
      { icon: "calendar", value: "June 2024 – July 2024" },
      {
        icon: "location",
        value: {
          en: "Istanbul, Turkey",
          tr: "İstanbul, Türkiye",
        },
      },
      {
        icon: "work",
        value: {
          en: "Internship",
          tr: "Staj",
        },
      },
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    description: {
      en: [
        "Developed a web-based table reservation and food ordering system.",
        "Designed frontend modules such as restaurant introduction pages, event listings, and chef profiles.",
        "Built static user registration and login interfaces.",
        "Implemented an interactive menu system with cart functionality.",
        "Created fully responsive reservation forms for mobile, tablet, and desktop devices.",
      ],
      tr: [
        "Web tabanlı masa rezervasyonu ve yemek sipariş sistemi geliştirdim.",
        "Restoran tanıtım sayfaları, etkinlik listeleri ve şef profilleri gibi frontend modülleri tasarladım.",
        "Statik kullanıcı kayıt ve giriş arayüzleri oluşturdum.",
        "Etkileşimli menü sistemi ve sepet fonksiyonunu geliştirdim.",
        "Mobil, tablet ve masaüstü cihazlar için tamamen responsive rezervasyon formları oluşturdum.",
      ],
    },
    links: {
      live: "https://locantajs.netlify.app/",
    },
  },

  {
    company: "Scramblebit Marketing & Software Ltd.",
    role: {
      en: "Full Stack Web Developer Intern",
      tr: "Full Stack Web Geliştirici Stajyeri",
    },
    meta: [
      { icon: "calendar", value: "August 2024 – September 2024" },
      {
        icon: "location",
        value: {
          en: "Istanbul, Turkey",
          tr: "İstanbul, Türkiye",
        },
      },
      {
        icon: "work",
        value: {
          en: "Internship",
          tr: "Staj",
        },
      },
    ],
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    description: {
      en: [
        "Developed a functional e-commerce web application with end-to-end features.",
        "Implemented product listing, search functionality, cart management, and checkout flow.",
        "Stored and managed order data using MongoDB.",
        "Actively contributed to both frontend and backend development processes.",
        "Gained hands-on experience with RESTful APIs and database integration.",
      ],
      tr: [
        "Uçtan uca özelliklere sahip işlevsel bir e-ticaret web uygulaması geliştirdim.",
        "Ürün listeleme, arama, sepet yönetimi ve ödeme akışını implement ettim.",
        "Sipariş verilerini MongoDB ile yönettim.",
        "Frontend ve backend geliştirme süreçlerine aktif katkı sağladım.",
        "RESTful API ve veritabanı entegrasyonu konusunda deneyim kazandım.",
      ],
    },
    screenshots: [shot1, shot2, shot3],
  },

  {
    company: "Graduation Project",
    role: {
      en: "Web-based Project Tracking and Management System",
      tr: "Web Tabanlı Proje Takip ve Yönetim Sistemi",
    },
    meta: [
      { icon: "calendar", value: "2024" },
      {
        icon: "academic",
        value: {
          en: "TÜBİTAK 2209-A Supported Academic Project",
          tr: "TÜBİTAK 2209-A Destekli Akademik Proje",
        },
      },
      {
        icon: "location",
        value: {
          en: "University",
          tr: "Üniversite",
        },
      },
    ],
    tech: ["Vue.js", "Node.js"],
    description: {
      en: [
        "Developed a web-based system aimed at reducing time and resource loss caused by manual and paper-based project management processes in universities.",
        "Designed a role-based structure supporting admin, advisor, and student users.",
        "Digitalized project tracking, evaluation, approval, and reporting workflows.",
        "Built a user-friendly, dynamic, and sustainable architecture using Vue.js on the frontend and Node.js on the backend.",
      ],
      tr: [
        "Üniversitelerde manuel ve kâğıt tabanlı proje yönetiminden kaynaklanan zaman ve kaynak kaybını azaltmayı amaçlayan web tabanlı bir sistem geliştirdim.",
        "Admin, danışman ve öğrenci kullanıcılarını destekleyen rol tabanlı bir yapı tasarladım.",
        "Proje takip, değerlendirme, onay ve raporlama süreçlerini dijitalleştirdim.",
        "Vue.js ile frontend ve Node.js ile backend kullanarak kullanıcı dostu, dinamik ve sürdürülebilir bir mimari oluşturdum.",
      ],
    },
  },

  {
    company: "Restaurant Web Application",
    role: {
      en: "Personal Frontend Project (Ongoing)",
      tr: "Kişisel Frontend Projesi (Devam Ediyor)",
    },
    meta: [
      { icon: "calendar", value: "Ongoing" },
      {
        icon: "personal",
        value: {
          en: "Personal Project",
          tr: "Kişisel Proje",
        },
      },
      {
        icon: "location",
        value: {
          en: "Remote",
          tr: "Uzaktan",
        },
      },
    ],
    tech: ["React", "Tailwind CSS", "React Router"],
    description: {
      en: [
        "Rebuilding a previously developed restaurant website using modern React architecture.",
        "Implemented a component-based frontend structure with reusable UI components.",
        "Focused on clean, maintainable, and scalable code practices.",
      ],
      tr: [
        "Daha önce geliştirilmiş bir restoran web sitesini modern React mimarisi ile yeniden inşa ediyorum.",
        "Yeniden kullanılabilir UI bileşenleri ile component tabanlı bir yapı oluşturdum.",
        "Temiz, sürdürülebilir ve ölçeklenebilir kod yazımına odaklandım.",
      ],
    },
    links: {
      live: "https://resorantapp.netlify.app/",
      github: "https://github.com/dania8shaghouri/restorantTailwindReact",
    },
  },

  {
    company: "Novatech Store",
    role: {
      en: "Personal Full Stack Project (Ongoing)",
      tr: "Kişisel Full Stack Projesi (Devam Ediyor)",
    },
    meta: [
      { icon: "calendar", value: "2026" },
      {
        icon: "personal",
        value: {
          en: "Personal Project",
          tr: "Kişisel Proje",
        },
      },
      {
        icon: "location",
        value: {
          en: "Remote",
          tr: "Uzaktan",
        },
      },
    ],
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST API",
      "JWT",
    ],

    description: {
      en: [
        "Developed a full-stack e-commerce application with JWT authentication and role-based authorization.",
        "Implemented product listing, dynamic product detail pages, wishlist, shopping cart, checkout flow and order management.",
        "Built advanced product filtering and sorting by category, brand, availability, price, popularity and newest products.",
        "Designed a responsive user interface with reusable React components, skeleton loading states and custom SVG animations.",
        "Developed secure RESTful APIs using Express.js, MongoDB, Helmet, Rate Limiting and Zod validation.",
        "Currently redesigning the admin dashboard with modern analytics and management features.",
      ],

      tr: [
        "JWT tabanlı kimlik doğrulama ve rol bazlı yetkilendirme içeren full-stack bir e-ticaret uygulaması geliştirdim.",
        "Ürün listeleme, dinamik ürün detay sayfaları, favoriler, sepet, checkout akışı ve sipariş yönetimi özelliklerini geliştirdim.",
        "Kategori, marka, stok durumu, fiyat, popülerlik ve yeniliğe göre gelişmiş filtreleme ve sıralama özellikleri ekledim.",
        "Yeniden kullanılabilir React bileşenleri, skeleton loading ekranları ve özel SVG animasyonları ile responsive bir kullanıcı arayüzü tasarladım.",
        "Express.js, MongoDB, Helmet, Rate Limiting ve Zod kullanarak güvenli RESTful API'ler geliştirdim.",
        "Modern analiz ve yönetim özelliklerine sahip yeni bir Admin Dashboard üzerinde geliştirmelere devam ediyorum.",
      ],
    },

    links: {
      live: "https://ecommerce-frontend-lyart-one.vercel.app/",
      github: "https://github.com/dania8shaghouri/e-commerce",
    },
    screenshots: [eco1, eco2, eco3],
  },
];
