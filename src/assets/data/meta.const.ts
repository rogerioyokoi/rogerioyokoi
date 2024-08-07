import { FunctionComponent, SVGProps } from 'react';

const baseTitle: string = 'Rogério Yokoi';

export type IconProp = FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }>;

export type Page = 'home' | 'about';

export interface Meta {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url: string;
}

export interface PersonalInfoStats {
  reference: string;
  text: string;
  highlight: string;
}

export interface PersonalInfoData {
  key: string;
  value: string;
}

export interface Career {
  Logo?: FunctionComponent<SVGProps<SVGSVGElement>>;
  startDate: string;
  endDate?: string;
  institution: string;
  title: string;
  description?: string | string[];
  technologies?: string[];
}

export interface Skill {
  Icon?: IconProp;
  name: string;
  color: string;
}

export const baseDescription: string =
  'Sou Um engenheiro de software front-end, brasileiro, situado em Minas Gerais e motivado pela minha paixão em criar experiências digitais intuitivas e refinadas. Me especializei em desenvolver interfaces com design limpo e de aspecto amigável aos olhos dos usuários. Meus estudos e atuação são voltados para aplicações web e mobile; buscando sempre presar pelo meu compromisso em criar soluções de software excepcionais. Sigo portanto, empenhado para que o meu trabalho impacte positivamente a vida dos usuários finais e enriqueçam suas interações digitais.';

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

export const personalInfoStats: PersonalInfoStats[] = [
  {
    reference: '+10',
    text: 'anos de',
    highlight: 'experiência',
  },
  {
    reference: '+6',
    text: 'anos com',
    highlight: 'ReactJS',
  },
  {
    reference: '+2',
    text: 'anos com',
    highlight: 'VueJS (2)',
  },
  {
    reference: '+2',
    text: 'anos com',
    highlight: 'Angular 2+',
  },
];
