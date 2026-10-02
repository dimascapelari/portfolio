export const profile = {
  name: "Dimas Capelari",
  role: "Desenvolvedor Full Stack",
  tagline: "Do Figma ao deploy.",
  summary:
    "Crio sites, sistemas web e APIs sob medida — do layout no Figma ao código publicado.",
  photo: "https://github.com/dimascapelari.png",
  location: "São José do Rio Pardo, SP · trabalho remoto",
  email: "dimas.capelari@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/dimas-capelari",
    github: "https://github.com/dimascapelari",
  },
};

export const about = [
  "Há mais de 4 anos desenvolvo portais e sistemas web de ponta a ponta: telas em React e TypeScript, APIs em NestJS e Node.js, banco de dados, CI/CD e deploy.",
  "Antes do código fui designer gráfico — daí vem o cuidado com o visual e com a experiência de quem usa. Hoje transformo telas do Figma em interfaces responsivas quase todo dia.",
  "Também fui instrutor de tecnologia e tive minha própria empresa de informática, o que me deu comunicação clara e foco em resolver o problema do cliente.",
];

const devicon = (path: string) =>
  `https://raw.githubusercontent.com/devicons/devicon/master/icons/${path}`;

export const stack = [
  { name: "React", icon: devicon("react/react-original.svg") },
  { name: "TypeScript", icon: devicon("typescript/typescript-original.svg") },
  { name: "JavaScript", icon: devicon("javascript/javascript-original.svg") },
  { name: "Node.js", icon: devicon("nodejs/nodejs-original.svg") },
  { name: "NestJS", icon: devicon("nestjs/nestjs-original.svg") },
  { name: "PostgreSQL", icon: devicon("postgresql/postgresql-original.svg") },
  { name: "Prisma", icon: devicon("prisma/prisma-original.svg") },
  { name: "Vue.js", icon: devicon("vuejs/vuejs-original.svg") },
  { name: "Figma", icon: devicon("figma/figma-original.svg") },
  { name: "Azure DevOps", icon: devicon("azuredevops/azuredevops-original.svg") },
  { name: "Git", icon: devicon("git/git-original.svg") },
  { name: "HTML/CSS", icon: devicon("html5/html5-original.svg") },
];
