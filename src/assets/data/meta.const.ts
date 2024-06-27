const baseTitle: string = 'Rogério Yokoi';

export type Page = 'home' | 'about';

export interface Meta {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url: string;
}

export const baseDescription: string =
  'Sou um brasileiro, situado em Minas Gerais. Um engenheiro de software front-end, motivado pela minha paixão em criar experiências digitais intuitivas e refinadas. Especializo-me em desenvolver interfaces limpas e amigáveis para usuário, assim como aplicações web. Meu compromisso está em criar soluções de software excepcionais que impactem positivamente a vida dos usuários e enriqueçam suas interações digitais.';

export const baseKeywords: string =
  'Engenheiro de Software Front-End, Desenvolvedor Front - End, UI / UX, Desenvolvimento de Aplicações Web, React Developer, Desenvolvedor React, Vue.js Developer, Desenvolvedor Vue.js, Desenvolvedor JavaScript, Design de Interfaces, Desenvolvimento de Interfaces de Usuário';

export const tecnicalKeywords: string =
  'HTML5, CSS3, JavaScript, TypeScript, React, Vue.js, Angular, Sass/Less, Tailwind CSS, Bootstrap, Responsive Design, Web Performance Optimization, Accessibility (A11Y), Cross-Browser Compatibility';

export const toolingKeywords: string = 'Git, CI/CD, Agile/Scrum, Figma, Prototyping, Wireframing, Usability Testing';

export const projectKeywords: string =
  'Projetos de Desenvolvimento Web, Casos de Estudo, Projetos Pessoais, Experiência Profissional, Trabalhos Recentes';

export const metas: Record<Page, Meta> = {
  home: {
    title: `${baseTitle} | Engenheiro de Software Front-End`,
    description: baseDescription,
    keywords: `${baseKeywords}, ${tecnicalKeywords}, ${toolingKeywords}, ${projectKeywords}`,
    image: '/logomarca.png',
    url: 'https://www.rogerioyokoi.com',
  },
  about: {
    title: 'About Us',
    description: 'Learn more about us',
    keywords: 'about, information',
    image: '/logomarca.png',
    url: 'https://www.rogerioyokoi.com/sobre-mim',
  },
};
