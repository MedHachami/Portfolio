import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  travlog,
  django,
  machine,
  html,
  hpy,
  css,
  reactjs,
  hiq,
  mongodb,
  git,
  figma,
  docker,
  fms,
  flutter,
  drf,
  threejs,
  Vanshika,
  nodejs,
  laravel,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
const services = [
  {
    title: "React/Laravel Developer",
    icon: web,
  },
  {
    title: "MERN StacK Developer",
    icon: creator,
  },
  {
    title: "Entrepreneur",
    icon: backend,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Laravel",
    icon: laravel,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  
  {
    title: "ReactJS Developer",
    company_name: "Exploring React",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Sep 2022 - Present",
    points: [
      "Developing and maintaining web applications using ReactJS.",
      "Creating web apps to solve real-life problems in collaboration with other developers.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Using backend technologies to make the web apps more robust.",
    ],
  },
  {
    title: "Backend & API Development",
    company_name: "Express REST API ",
    icon: nodejs,
    iconBg: "#383E56",
    date: "May 2022 - Present",
    points: [
      "Designing the API endpoints that will expose the application's data and functionality to the clients.",
      "Implementing serializers to convert complex data types into JSON or other formats suitable for API responses.",
      "Implementing authentication mechanisms and setting up permissions to control access to API endpoints. (JWT , FIREBASE)",
      "Supporting file uploads through the API and managing file storage and retrieval. (AWS S3 )",
    ],
  },
  {
    title: "Backend & API Development",
    company_name: "LARAVEL REST API ",
    icon: laravel,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Designing the API endpoints that will expose the application's data and functionality to the clients.",
      "Implementing serializers to convert complex data types into JSON or other formats suitable for API responses.",
      "Implementing authentication mechanisms and setting up permissions to control access to API endpoints. (Sanctum or Passport and use also spatie permissions  )",
      "Supporting file uploads through the API and managing file storage and retrieval using (AWS S3 or Spatie Media )",
    ],
  },
  
];

const projects = [
  {
    name: "Travlog",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "appdev",
        color: "pink-text-gradient",
      },
    ],
    image: travlog,
    source_code_link: "https://github.com/britster03",
  },
  {
    name: "FundMyStartup",
    description:
      "A startup funding website can be a great way to help connect entrepreneurs with investors and facilitate the funding process.",
    tags: [
      {
        name: "web",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: fms,
    source_code_link: "https://github.com/britster03",
  },
  {
    name: "HealthIQ",
    description:
      "A healthcare-related project for a medical app. It has a module for automatically arranging appointments based on the patient's chosen health status. With two apps, access to Doctor & Patient is simple.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "machinelearning",
        color: "pink-text-gradient",
      },
    ],
    image: hiq,
    source_code_link: "https://github.com/britster03",
  },
  {
    name: "HappyCart",
    description:
      " A Shopping Cart web app enabled with Firebase authetication & real-time payments using Stripe API.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "stripeapi",
        color: "pink-text-gradient",
      },
    ],
    image: hpy,
    source_code_link: "https://github.com/britster03",
  },
  {
    name: "DRF Blog Website",
    description:
      "A Django DRF App with ReactJS Front-End. Includes JWT Token Authentication, CRUD, Image Uploading/Handling & Social Logins with React and DRF.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "djangoRESTAPI",
        color: "green-text-gradient",
      },
      {
        name: "django",
        color: "pink-text-gradient",
      },
    ],
    image: drf,
    source_code_link: "https://github.com/britster03",
  },
];

export { services, technologies, experiences, projects };