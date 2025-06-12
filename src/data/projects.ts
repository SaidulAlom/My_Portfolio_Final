export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "Built using React.js and TailwindCSS to showcase my work and skills.",
    image: "https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React.js", "TailwindCSS", "TypeScript"],
    demoLink: "#",
    githubLink: "https://github.com/SaidulAlom",
  },
  {
    id: 2,
    title: "Job Portal Web App",
    description: "Developed a full-stack job listing and application portal using React.js, Node.js, Express.js, and MongoDB.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    demoLink: "https://jovial-crumble-052572.netlify.app/",
    githubLink: "https://github.com/SaidulAlom",
  },
  {
    id: 3,
    title: "E-commerce Website",
    description: "Created an online shopping platform with Next.js and MongoDB, featuring authentication and dynamic product pages.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Next.js", "MongoDB", "Stripe", "TailwindCSS"],
    demoLink: "#",
    githubLink: "https://github.com/SaidulAlom",
  },
  {
    id: 4,
    title: "Weather App",
    description: "JavaScript-based app fetching real-time weather data from an external API.",
    image: "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["JavaScript", "CSS", "Weather API"],
    demoLink: "https://weather-app-gamma-eight-59.vercel.app/",
    githubLink: "https://github.com/SaidulAlom/weather-app.git",
  },
  {
    id: 5,
    title: "Mini Projects",
    description: "Calculator and Digital Clock built using JavaScript and DOM manipulation.",
    image: "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["JavaScript", "HTML", "CSS", "DOM"],
    demoLink: "#",
    githubLink: "https://github.com/SaidulAlom",
  }
];