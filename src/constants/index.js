import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  homifystate,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  lingobingo,
  jobit,
  tripguide,
  threejs,
  meetbox,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "MERN Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "daisui",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Professional Course",
    company_name: "Complete web development course with Jhankar Mahbub",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2023 - Decembar 2023",
    points: [
      "Learned full-stack web development, covering both front-end and back-end technologies.Gained hands-on experience with JavaScript, React, Node.js, and MongoDB. Completed several real-world projects, enhancing problem-solving and teamwork skills.",
    ],
  },
  {
    title: "Bsc Honours in Physics",
    company_name: "Mohammadpur Central University College",
    icon: starbucks,
    iconBg: "#383E56",
    date: " 2019 - continue",

    points: [
      "Studied core concepts of physics, including classical mechanics, quantum mechanics, and thermodynamics.Engaged in practical laboratory experiments to complement theoretical knowledge and develop analytical skills.",
    ],
  },
  {
    title: "Higher Secondary School Certificate",
    company_name: "Gouripur Govt College",
    icon: shopify,
    iconBg: "#383E56",
    date: " Agust 2017 - April 2019",
    points: [
      "Focused on science subjects, including Physics, Chemistry, Mathematics, and Biology.Developed a strong academic foundation and critical thinking skills through regular coursework and exams.",
    ],
  },
  {
    title: "Secondary School Certificate",
    company_name: "Gouripur R.K. Govt. high School",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2011 - Feb 2016",
    points: [
      "Studied core subjects including Mathematics, Science, and English, laying a solid academic foundation.Actively participated in school events and extracurricular activities, fostering teamwork and leadership skills.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "LingoBingo",
    description:
      "LingoBingo is a Hindi learning website with Firebase authentication, interactive vocabulary games, and step-by-step lessons. It features a 'Punctuation Speak' tool for pronunciation practice and Toastify for real-time notifications, making learning Hindi engaging and effective for users at any level.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Daisyui",
        color: "orange-text-gradient",
      },
    ],
    image: lingobingo,
    frontend_github_link:
      "https://github.com/Irfankhan20/lingo-bingo-dictionary",

    backend_github_link:
      "https://github.com/Irfankhan20/lingo-bingo-dictionary",

    live_site_link: "https://lingobingo-hindi-learn.surge.sh/",
  },
  {
    name: "MeetBox",
    description:
      "MeetBox is a where customers can order spicy food. It features Firebase authentication for secure access, menu details highlighting food benefits, a customer review system for feedback,a mail system for inquiries.Toastify ensures users receive instant notifications for a seamless experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },

      {
        name: "email.js",
        color: "orange-text-gradient",
      },
    ],
    image: meetbox,
    frontend_github_link:
      "https://github.com/Irfankhan20/restaurant-food-management-client-site",

    backend_github_link:
      "https://github.com/Irfankhan20/restaurant-food-management-server-site",

    live_site_link: "https://assignment-eleven-website.web.app",
  },
  {
    name: "HomifyEstate",
    description:
      "HomifyEstate is a flat booking and rental platform created as a team project. It features Firebase authentication for security, SSLCommerz for payment processing, Toastify for real-time notifications, a review system and form for user feedback, and a mail system for customer inquiries.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },

      {
        name: "email.js",
        color: "orange-text-gradient",
      },
    ],
    image: homifystate,
    frontend_github_link: "https://github.com/Irfankhan20/homifyEsate-client",
    backend_github_link: "https://github.com/Irfankhan20/homifyEstate-server",
    live_site_link: "https://homifyestate-8556d.web.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
