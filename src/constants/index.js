import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  evento,
  django,
  machine,
  html,
  hpy,
  css,
  reactjs,
  scrum,
  hiq,
  mongodb,
  git,
  figma,
  docker,
  flutter,
  drf,
  threejs,
  Vanshika,
  nodejs,
  laravel,
  chatApp,
  subSync
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
    title: "MERN Stack Developer",
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
  {
    title: "Scrum Master",
    company_name: "Agile Project Management & Team Leadership",
    icon: scrum,
    iconBg: "#383E56",
    date: "Sep 2023 - Present",
    points: [
      "Collaborating closely with Product Owners to refine the product backlog, prioritize user stories, and ensure alignment with business objectives.",
      "Facilitating Scrum ceremonies including daily stand-ups, sprint planning, sprint reviews, and retrospectives to foster collaboration, communication, and transparency. Removing impediments and resolving conflicts to ensure smooth and uninterrupted progress of sprint goals.",
      "Tracking and monitoring project progress using Agile tools such as  Trello and Github Projects, and providing regular updates to stakeholders.",
      "Guiding and coaching development teams on Agile principles and Scrum practices to enhance productivity and deliver high-quality software products.",
    ],
  },
  
];

const projects = [
  {
    name: "Evento",
    description:
      "Creation of an innovative platform dedicated to the management and booking of event spaces",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "webapp",
        color: "pink-text-gradient",
      },
    ],
    image: evento,
    source_code_link: "https://github.com/britster03",
  },
  {
    name: "SubSync",
    description:
      "This project consists of presenting the latest news, articles, using resource consumption (RSS). In addition to this, it includes other features such as adding comments, the possibility of adding articles to favorites, etc.",
    tags: [
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "media",
        color: "blue-text-gradient",
      },

      {
        name: "webapp",
        color: "pink-text-gradient",
      },
    ],
    image: subSync,
    source_code_link: "https://github.com/britster03",
  },
  {
    name: "Chat rooms",
    description:
      "This project consists of presenting the latest news, articles, using resource consumption (RSS). In addition to this, it includes other features such as adding comments, the possibility of adding articles to favorites, etc.",
    tags: [
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "media",
        color: "blue-text-gradient",
      },

      {
        name: "webapp",
        color: "pink-text-gradient",
      },
    ],
    image: chatApp,
    source_code_link: "https://github.com/britster03",
  },
  
];

export { services, technologies, experiences, projects };