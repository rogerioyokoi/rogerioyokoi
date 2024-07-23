import { FunctionComponent, SVGProps } from 'react';

import {
  AmplitudeIcon,
  AnalyticsIcon,
  AngularIcon,
  AxiosIcon,
  BitbucketIcon,
  BootstrapIcon,
  CSSIcon,
  CyPressIcon,
  GithubIcon,
  GitIcon,
  HTMLIcon,
  JavascriptIcon,
  JestIcon,
  JiraIcon,
  KanbanIcon,
  LogRocketIcon,
  MethodsIcon,
  MixpanelIcon,
  NodeIcon,
  QualityIcon,
  ReactIcon,
  SassIcon,
  ScrumIcon,
  SentryIcon,
  SoftSkillIcon,
  SonarQubeIcon,
  TailwindIcon,
  TechIcon,
  TestingLibraryIcon,
  ToolsIcon,
  TypescriptIcon,
  ViteIcon,
  VitestIcon,
  VueIcon,
  VuexIcon,
  WebpackIcon,
} from './icons';

export type IconProp = FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }>;

export interface Skill {
  Icon?: IconProp;
  name: string;
  color: string;
}

export interface SkillCollection {
  title: string;
  Icon: IconProp;
  data: Skill[];
  key: string;
}

export const softSkills: Skill[] = [
  { name: 'Liderança', color: '#FF6F00' },
  { name: 'Comunicação', color: '#1976D2' },
  { name: 'Colaboração', color: '#009688' },
  { name: 'Pensamento crítico', color: '#673AB7' },
  { name: 'Resiliência', color: '#8BC34A' },
  { name: 'Persistência', color: '#8BC34A' },
  { name: 'Capacidade analítica', color: '#2196F3' },
];

export const tecnologyFrameworks: Skill[] = [
  { name: 'HTML', color: '#E34F26', Icon: HTMLIcon },
  { name: 'CSS', color: '#1572B6', Icon: CSSIcon },
  { name: 'JavaScript', color: '#F7DF1E', Icon: JavascriptIcon },
  { name: 'TypeScript', color: '#3178C6', Icon: TypescriptIcon },
  { name: 'SASS', color: '#CC6699', Icon: SassIcon },
  { name: 'React', color: '#61DAFB', Icon: ReactIcon },
  { name: 'Angular', color: '#DD0031', Icon: AngularIcon },
  { name: 'Vue', color: '#4FC08D', Icon: VueIcon },
  { name: 'Node.js', color: '#339933', Icon: NodeIcon },
  { name: 'Tailwind CSS', color: '#38B2AC', Icon: TailwindIcon },
  { name: 'Bootstrap', color: '#7952B3', Icon: BootstrapIcon },
];

export const toolsPlatforms: Skill[] = [
  { name: 'Git', color: '#F05032', Icon: GitIcon },
  { name: 'GitHub Actions', color: '#2088FF', Icon: GithubIcon },
  { name: 'Bitbucket Pipelines', color: '#0052CC', Icon: BitbucketIcon },
  { name: 'Jira', color: '#0052CC', Icon: JiraIcon },
  { name: 'Vite', color: '#646CFF', Icon: ViteIcon },
  { name: 'Axios', color: '#5A29E4', Icon: AxiosIcon },
  { name: 'Vuex', color: '#41B883', Icon: VuexIcon },
  { name: 'Webpack', color: '#8DD6F9', Icon: WebpackIcon },
];

export const qualityAndTests: Skill[] = [
  { name: 'Jest', color: '#C21325', Icon: JestIcon },
  { name: 'Vitest', color: '#6E9F18', Icon: VitestIcon },
  { name: 'SonarQube', color: '#4E9BCD', Icon: SonarQubeIcon },
  { name: 'Testing Library', color: '#E33332', Icon: TestingLibraryIcon },
  { name: 'CyPress', color: '#69D3A7', Icon: CyPressIcon },
];

export const metricObservability: Skill[] = [
  { name: 'Sentry', color: '#362d59', Icon: SentryIcon },
  { name: 'Mixpanel', color: '#7856FF', Icon: MixpanelIcon },
  { name: 'LogRocket', color: '#764ABC', Icon: LogRocketIcon },
  { name: 'Amplitude', color: '#00A7CF', Icon: AmplitudeIcon },
];

export const metodologyPratics: Skill[] = [
  { name: 'Scrum', color: '#6A1B9A', Icon: ScrumIcon },
  { name: 'Kanban', color: '#0288D1', Icon: KanbanIcon },
  { name: 'Metodologias ágeis', color: '#8BC34A' },
  { name: 'Elaboração de testes', color: '#FFC107' },
  { name: 'Resolução de problemas', color: '#FF5722' },
  { name: 'Web Design Responsivo', color: '#9C27B0' },
  { name: 'Consumo de APIs', color: '#FFEB3B' },
  { name: 'SEO', color: '#607D8B' },
  { name: 'Heurísticas', color: '#795548' },
  { name: 'Ergonomia de Software', color: '#795548' },
  { name: 'Arquitetura Hexagonal', color: '#FF9800' },
  { name: 'Atomic Design', color: '#3F51B5' },
];

export const skillsCollection: SkillCollection[] = [
  {
    title: 'Habilidades interpressoais',
    key: 'habilidades-interpessoais',
    Icon: SoftSkillIcon,
    data: softSkills,
  },
  {
    title: 'Tecnologias e frameworks',
    key: 'tecnologia-frameworks',
    Icon: TechIcon,
    data: tecnologyFrameworks,
  },
  {
    title: 'Testes e qualidade',
    key: 'testes-qualidade',
    Icon: QualityIcon,
    data: qualityAndTests,
  },
  {
    title: 'Ferramentas e plataformas',
    key: 'ferramentas-plataformas',
    Icon: ToolsIcon,
    data: toolsPlatforms,
  },
  {
    title: 'Métricas e observabilidade',
    key: 'metricas-observabilidade',
    Icon: AnalyticsIcon,
    data: metricObservability,
  },
  {
    title: 'Metodologias e práticas',
    key: 'metodologias-praticas',
    Icon: MethodsIcon,
    data: metodologyPratics,
  },
];
