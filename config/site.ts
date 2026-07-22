export const siteConfig = {
  name: "FEMAR LOGISTICS SAC",
  description: "Servicios de carga y aduanas profesionales. Plataforma logística integral con más de 12 meses de garantía de funcionamiento.",
  url: "https://femarlogistics.com",
  ogImage: "https://femarlogistics.com/og.jpg",
  author: "FEMAR LOGISTICS SAC",
  links: {
    whatsapp: "https://wa.me/51999999999", // To be replaced with real number
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
  mainNav: [
    {
      title: "Inicio",
      href: "/",
      isHash: false,
    },
    {
      title: "Nosotros",
      href: "/nosotros",
      isHash: false,
    },
    {
      title: "Servicios",
      href: "/servicios",
      isHash: false,
    },
    {
      title: "Blog",
      href: "/blog",
      isHash: false,
    },
    {
      title: "Contacto",
      href: "/contacto",
      isHash: false,
    },
  ],
  credits: {
    text: "Diseño y desarrollo por fastpagepro.com",
    url: "https://www.fastpagepro.com",
    name: "fastpagepro.com"
  }
};

export type SiteConfig = typeof siteConfig;
