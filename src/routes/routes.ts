import { RouteObject, createBrowserRouter } from 'react-router-dom';
import Home from '../components/pages/home/home';
import RootPage from '../components/pages/rootPage/rootPage';

import Skills from '@/components/pages/skills/skills';
import { HomeIcon } from '@heroicons/react/24/outline';
import { ComponentType } from 'react';

import { PersonalSkillIcon } from '@assets/data/icons';

/**
 * Interface for navigation route configuration.
 */
export interface RouteNavConfig {
  /** The unique identifier for the route */
  id: string;
  /** The path of the route */
  path: string;
  /** The React component to render for the route */
  component: ComponentType;
  /** The name of the route, used for display purposes */
  name: string;
  /** The icon associated with the route */
  Icon: ComponentType;
  /** An optional description for the route */
  description?: string;
}

/**
 * Enumeration of route IDs for navigation.
 */
export enum ROUTES_NAV_IDS {
  /** Home route ID */
  HOME = '/',
  ABOUT = '/sobre-mim',
  SKILLS = '/habilidades',
}

/**
 * Array of route navigation configurations.
 */
export const navRoutes: RouteNavConfig[] = [
  {
    id: ROUTES_NAV_IDS.HOME,
    path: ROUTES_NAV_IDS.HOME,
    component: Home,
    name: 'Início',
    Icon: HomeIcon,
  },
  {
    id: ROUTES_NAV_IDS.SKILLS,
    path: ROUTES_NAV_IDS.SKILLS,
    component: Skills,
    name: 'Habilidades',
    Icon: PersonalSkillIcon,
  },
];

/**
 * Array of child routes generated from the route navigation configurations.
 */
export const childrenRoutes: RouteObject[] = navRoutes.map(
  (route: RouteNavConfig): RouteObject => ({
    path: route.path,
    id: route.id,
    Component: route.component,
  })
);

/**
 * Array of base routes for the application.
 */
export const baseRoutes: RouteObject[] = [
  {
    path: ROUTES_NAV_IDS.HOME,
    Component: RootPage,
    children: childrenRoutes,
  },
];

/**
 * Creates a browser router using the defined routes.
 */
const router = createBrowserRouter(baseRoutes);

export default router;
