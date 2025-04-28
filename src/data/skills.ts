interface Skill {
  name: string;
  level: number;
}

interface SkillCategories {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
}

export const skills: SkillCategories = {
  frontend: [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "TailwindCSS", level: 90 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "REST APIs", level: 85 },
    { name: "Firebase", level: 70 },
  ],
  tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "Responsive Design", level: 90 },
    { name: "SEO Basics", level: 75 },
    { name: "VS Code", level: 95 },
    { name: "Figma (Basics)", level: 65 },
  ],
};