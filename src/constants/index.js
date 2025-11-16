// index.js
export const servicesData = [
  {
    title: "Frontend Development",
    description:
      "I craft fast, accessible, and visually engaging web experiences. With modern frameworks and clean code practices, I focus on delivering smooth performance and delightful user interactions across all devices.",
    items: [
      {
        title: "Modern Frameworks",
        description: "(React, Next.js)",
      },
      {
        title: "UI/UX Implementation",
        description: "(Responsive Design, Animations, Accessibility)",
      },
      {
        title: "Performance Optimization",
        description: "(Code Splitting, Lazy Loading, SEO Best Practices)",
      },
    ],
  },
  {
    title: "Web Development",
    description:
      "I build responsive, pixel-perfect websites that blend design and functionality seamlessly. With a focus on clean code, accessibility, and performance, I ensure every site looks great and works flawlessly across all devices.",
    items: [
      {
        title: "Responsive Design",
        description: "(Adaptive layouts for all screen sizes and devices)",
      },
      {
        title: "Modern Frontend Tools",
        description: "(React, Next.js, Tailwind CSS)",
      },
      {
        title: "Performance & Accessibility",
        description: "(Optimized loading, SEO, and WCAG compliance)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Ai ChatBot",
    description:
      "An AI chatbot built with React.js that leverages the Gemini API for real-time conversational experiences, featuring a responsive, user-friendly interface and seamless interactions.",
    href: "https://auth-1.netlify.app/",
    image: "images/authentication.png",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "API" },
    ],
  },
  {
    id: 2,
    name: "Movie App",
    description:
      "A React.js movie app that lets users browse, search, and explore movies with a clean, responsive, and user-friendly interface.",
    href: "https://movie-we.netlify.app",
    image: "images/movie-app.png",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Tailwind css" }
    ],
  },
  {
    id: 3,
    name: "Apple Tech Marketplace",
    description:
      "An e-commerce platform for Apple products and accessories with deals and category filtering.",
    href: "https://github.com/",
    image: "images/apple-tech-store.jpg",
    frameworks: [
      { id: 1, name: "Blazor" },
      { id: 2, name: "ASP.NET Core" },
      { id: 3, name: "SQL Server" },
      { id: 4, name: "Bootstrap" },
    ],
  },
  {
    id: 4,
    name: "Electronics & Gadgets Store",
    description:
      "A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.",
    href: "https://github.com/",
    image: "images/electronics-store.jpg",
    frameworks: [
      { id: 1, name: "Vue.js" },
      { id: 2, name: "Laravel" },
      { id: 3, name: "MySQL" },
      { id: 4, name: "SCSS" },
    ],
  },
  {
    id: 5,
    name: "Home Decor Marketplace",
    description:
      "A curated collection of designer home decor items, including furniture and artisan vases.",
    href: "https://github.com/",
    image: "images/home-decor-store.jpg",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Firebase" },
      { id: 3, name: "GraphQL" },
      { id: 4, name: "Material UI" },
    ],
  },
  {
    id: 6,
    name: "Digital Game Store",
    description:
      "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
    href: "https://github.com/",
    image: "images/game-store.jpg",
    frameworks: [
      { id: 1, name: "Svelte" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Chakra UI" },
    ],
  },
];

export const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vinay-pandey-915310338/",
  },
  { name: "GitHub", href: "https://github.com/Vinay-pandey-coder" },
];
