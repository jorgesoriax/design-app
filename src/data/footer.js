import {
  BehanceLogo,
  DribbbleLogo,
  InstagramLogo,
  PinterestLogo,
} from "phosphor-react";

const footer = {
  utility: [
    {
      header: "Contacto",
      items: [
        {
          title: "contact@example.com",
          href: "mailto:test",
        },
        {
          title: "contact@example.com",
          href: "mailto:test",
        },
      ],
    },
    {
      header: "Nosotros",
      items: [
        {
          title: "Quiénes somos",
          href: "#",
        },
      ],
    },
    {
      header: "Recursos",
      items: [
        {
          title: "Términos y condiciones",
          href: "#",
        },
        {
          title: "Aviso de privacidad",
          href: "#",
        },
      ],
    },
  ],
  secondary: [
    {
      title: "/ @rdesign 2023",
      href: "",
    },
    {
      title: "Contenido secundario",
      href: "#",
    },
    {
      title: "Contenido secundario",
      href: "#",
    },
  ],
  socialMedia: [
    {
      title: "Instagram",
      href: "https://www.instagram.com/",
      phIcon: <InstagramLogo size={24} weight="fill" />,
    },
    {
      title: "Pinterest",
      href: "https://www.pinterest.com.mx/",
      phIcon: <PinterestLogo size={24} weight="fill" />,
    },
    {
      title: "Dribbble",
      href: "https://dribbble.com/",
      phIcon: <DribbbleLogo size={24} weight="fill" />,
    },
    {
      title: "Behance",
      href: "https://www.behance.net/",
      phIcon: <BehanceLogo size={24} weight="fill" />,
    },
  ],
};

export default footer;
