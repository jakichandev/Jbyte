import type { Project } from "../types/Project/Project";

export const projects: Array<Project> = [
  {
    slug: "meteo-master",
    label: "MeteoMaster",
    image: "meteo.png",
    body: "My Vanilla JS weather app using OpenWeather API to get real-time weather data",
    stack: [
      { icon: "html.svg", name: "HTML" },
      { icon: "javascript.svg", name: "JavaScript" },
      { icon: "tailwind.svg", name: "Tailwind CSS" },
    ],
    links: {
      github: "https://github.com/jakichandev/my_meteo",
    },
  },
  {
    slug: "tifodb",
    label: "Tifodb",
    image: "tifodb.png",
    body: `A football database app to search all info about fans of your favorite team (rivalries, friendship, stadium, groups etc.).
    You can test and manage data using this demo account: email: test@test.it | password: TestTest`,
    stack: [
      { icon: "react.svg", name: "React" },
      { icon: "tailwind.svg", name: "Tailwind CSS" },
      { icon: "firebase.svg", name: "Firebase" },
    ],
    featured: true,
    links: {
      github: "https://github.com/jakichandev/tifodb",
      online: "https://tifodb.netlify.app/",
    },
  },
  {
    slug: "vibeshare",
    label: "Vibeshare",
    image: "vibeshare.png",
    body: "Chat with a simulated authentication (Local storage) to share positive vibes with other users",
    stack: [
      { icon: "react.svg", name: "React" },
      { icon: "tailwind.svg", name: "Tailwind CSS" },
      { icon: "typescript.svg", name: "TypeScript" },
    ],
    featured: true,
    links: {
      github: "https://github.com/jakichandev/vibeshare",
      online: "https://vibeshare-gray.vercel.app/",
    },
  },
  {
    slug: "freecodecamp-currency-converter",
    label: "FreeCodeCamp Currency Converter",
    image: "currency_converter.png",
    body: "A currency converter app built as part of the FreeCodeCamp curriculum using React and Styled Components",
    stack: [
      { icon: "react.svg", name: "React" },
      { icon: "styled_components.svg", name: "Styled Components" },
      { icon: "typescript.svg", name: "TypeScript" },
    ],
    links: {
      github: "https://github.com/jakichandev/FreeCodeCamp-CurrencyConverter",
    },
  },
  {
    slug: "jbyte-portfolio",
    label: "Jbyte Portfolio",
    image: "jbyte.png",
    body: "My personal portfolio built with React and TailwindCSS to showcase my skills and projects.",
    stack: [
      { icon: "react.svg", name: "React" },
      { icon: "tailwind.svg", name: "Tailwind CSS" },
      { icon: "typescript.svg", name: "TypeScript" },
    ],
    featured: true,
    links: {
      github: "https://github.com/jakichandev/Jbyte",
    },
  },
  {
    slug: "refrigerator-manager",
    label: "Refrigerator Manager",
    image: "",
    body: "A refrigerator management app to learn Zustand (in progress)",
    stack: [{ icon: "react.svg", name: "React" }],
    links: {
      github: "https://github.com/jakichandev/Zustand-Refrigerator",
    },
  },
];
