import ColegioJoseFerreiraLogo from '@assets/svg/colegio-jose-ferreira.svg?react';
import DescomplicaLogo from '@assets/svg/descomplica.svg?react';
import EneSolucoesLogo from '@assets/svg/ene-solucoes.svg?react';
import VittaLogo from '@assets/svg/vitta.svg?react';

import { FunctionComponent, SVGProps } from 'react';

const baseTitle: string = 'Rogério Yokoi';

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

export const personalInfoData: PersonalInfoData[] = [
  {
    key: 'Nome',
    value: 'Rogério Yokoi',
  },
  {
    key: 'Idade',
    value: '40 anos',
  },
  {
    key: 'Nacionalidade',
    value: 'Brasileira',
  },
  {
    key: 'Residência',
    value: 'Uberaba / MG',
  },
  {
    key: 'Idiomas',
    value: 'Português (Nativo), Inglês (Técnico)',
  },
];

export const careerEducational: Career[] = [
  {
    Logo: DescomplicaLogo,
    startDate: '2024',
    endDate: '2028',
    institution: 'Descomplica - (Centro Universitário União das Américas)',
    title: 'Bacharel em Engenharia de Software',
  },
];

export const careerExperience: Career[] = [
  {
    Logo: VittaLogo,
    startDate: 'Jan de 2020',
    endDate: 'Fev de 2024',
    institution: 'Vitta - Tecnologia em Saúde',
    title: 'Desenvolvedor Front-End',
    description: [
      'Participação ativa nos rituais do Scrum, contribuindo para a melhoria contínua do processo de desenvolvimento.',
      'Mentoria e suporte a profissionais menos experientes, promovendo o crescimento e desenvolvimento da equipe.',
      'Arquitetura de novos projetos e análise de melhorias de projetos existentes.',
      'Colaboração com Product Owners e Managers sobre viabilidade e conformidade de novas implementações.',
      'Trabalho conjunto com Product Designers sobre padrões e viabilidade técnica de novos componentes e melhorias nos componentes atuais.',
      'Otimização de desempenho, melhorando o tempo de carregamento e a eficiência do código.',
      'Manutenção e desenvolvimento de projetos.',
      'Análise e desenvolvimento de componentes de UI, assegurando que sejam eficientes e de fácil manutenção.',
      'Alinhamento de projetos e demandas.',
      'Implementação de práticas de acessibilidade para garantir que as aplicações sejam utilizáveis por todos.',
      'Monitoramento e uso de analytics para medir a performance da aplicação e entender o comportamento do usuário.',
    ],
    technologies: [
      'JavaScript',
      'HTML',
      'CSS',
      'Vue',
      'React',
      'Stylus',
      'SCSS',
      'Node',
      'TypeScript',
      'Consumo de APIs',
      'Boas práticas de semântica HTML',
      'Cuidados com acessibilidade e usabilidade',
      'Prática de Code Review',
    ],
  },
  {
    Logo: EneSolucoesLogo,
    startDate: 'Fev de 2018',
    endDate: 'Jan de 2020',
    institution: 'ENE Soluções',
    title: 'Desenvolvedor Front-End',
    description: [
      'Participação ativa nos rituais do Scrum, contribuindo para a melhoria contínua do processo de desenvolvimento.',
      'Colaboração estreita com o time de design para garantir a excelência na experiência do usuário, fornecendo feedback e sugestões para aprimoramentos.',
      'Trabalho em conjunto com clientes, absorvendo e analisando as demandas do projeto para entregar soluções eficazes.',
      'Suporte a profissionais menos experientes, promovendo o crescimento e desenvolvimento da equipe.',
      'Análise e desenvolvimento de componentes de UI, assegurando que sejam eficientes e de fácil manutenção.',
      'Contribuição com ideias e sugestões sobre a arquitetura dos projetos, focando em soluções escaláveis e robustas.',
      'Implementação de designs responsivos para garantir uma ótima experiência em todos os dispositivos.',
      'Otimização de desempenho, melhorando o tempo de carregamento e a eficiência do código.',
      'Manutenção e atualização de código existente, corrigindo bugs e implementando melhorias.',
      'Documentação de código, garantindo que outros desenvolvedores possam entender e trabalhar facilmente no projeto.',
      'Configuração e uso de ferramentas de build para automatizar tarefas repetitivas e melhorar a eficiência do desenvolvimento.',
      'Integração com APIs, conectando o frontend com os serviços backend para fornecer funcionalidades completas.',
      'Participação em code reviews, garantindo a qualidade do código e a adesão às melhores práticas.',
      'Desenvolvimento de testes automatizados para assegurar a qualidade e a estabilidade do código.',
      'Implementação de práticas de acessibilidade para garantir que as aplicações sejam utilizáveis por todos.',
      'Análise de requisitos, trabalhando com stakeholders para definir e priorizar as funcionalidades do produto.',
    ],
    technologies: [
      'JavaScript',
      'HTML',
      'CSS',
      'Vue',
      'React',
      'Stylus',
      'SCSS',
      'Node',
      'TypeScript',
      'Consumo de APIs',
      'Boas práticas de semântica HTML',
      'Cuidados com acessibilidade e usabilidade',
      'Prática de Code Review',
    ],
  },
  {
    Logo: ColegioJoseFerreiraLogo,
    startDate: 'Mar de 2014',
    endDate: 'Jan de 2018',
    institution: 'Colégio Cenecista Dr. José Ferreira',
    title: 'Desenvolvedor Front-End',
    description: [
      'Arquitetura de novos projetos e análise de melhorias de projetos existentes.',
      'Colaboração com Product Owners e Managers sobre viabilidade e conformidade de novas implementações.',
      'Manutenção e atualização de código existente, corrigindo bugs e implementando melhorias.',
      'Criação de componentes de UI.',
      'Alinhamento de projetos e demandas.',
      'Condução de testes de usabilidade.',
    ],
    technologies: [
      'JavaScript',
      'HTML',
      'CSS',
      'Vue',
      'React',
      'Stylus',
      'SCSS',
      'Node',
      'TypeScript',
      'Consumo de APIs',
      'Boas práticas de semântica HTML',
      'Cuidados com acessibilidade e usabilidade',
      'Prática de Code Review',
    ],
  },
];
