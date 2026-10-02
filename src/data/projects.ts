export type Project = {
  title: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
};

export const featured = {
  title: "Resolutions",
  subtitle: "Sistema de vendas — PDV + loja online",
  description:
    "Projeto autoral, do banco de dados ao deploy. Loja online com carrinho e cupons, PDV com fluxo de balcão e caixa, baixa de estoque, comissão por vendedor e controle de acesso por papel (admin, gerente, vendedor, caixa e cliente).",
  highlights: [
    "O vendedor abre a venda no balcão; o caixa encontra pelo CPF e recebe",
    "Estoque baixa no pagamento e volta se a venda for cancelada",
    "Comissão congelada na taxa da época de cada venda",
    "API REST documentada no Swagger, com JWT e papéis",
  ],
  tags: ["React 19", "TypeScript", "Chakra UI", "NestJS", "Prisma", "PostgreSQL", "JWT"],
  cover: "/images/resolutions-capa.png",
  screens: [
    { src: "/images/resolutions-loja.png", label: "Loja online" },
    { src: "/images/resolutions-caixa.png", label: "Caixa" },
    { src: "/images/resolutions-comissoes.png", label: "Comissões" },
    { src: "/images/resolutions-api.png", label: "API (Swagger)" },
  ],
  links: [
    { label: "Ver a loja", href: "https://resolutions-front-end.vercel.app" },
    { label: "Documentação da API", href: "https://resolutions-api.onrender.com/docs" },
    { label: "Sobre o projeto", href: "https://github.com/dimascapelari/Resolutions" },
  ],
};

export const projects: Project[] = [
  {
    title: "Urna Eletrônica",
    description: "Simulação da urna eletrônica brasileira, com fluxo de votação e apuração.",
    tags: ["Vue.js", "JavaScript"],
    links: [{ label: "GitHub", href: "https://github.com/dimascapelari/urna-eletronica-vue" }],
  },
  {
    title: "API Node + TypeScript",
    description: "API REST com Node.js, Express e Prisma, tipada de ponta a ponta.",
    tags: ["Node.js", "Express", "Prisma", "TypeScript"],
    links: [{ label: "GitHub", href: "https://github.com/dimascapelari/api-node-typescript" }],
  },
  {
    title: "Estudos com NestJS",
    description: "Módulos, injeção de dependência, DTOs e validação com NestJS.",
    tags: ["NestJS", "TypeScript"],
    links: [{ label: "GitHub", href: "https://github.com/dimascapelari/nest-js" }],
  },
];
