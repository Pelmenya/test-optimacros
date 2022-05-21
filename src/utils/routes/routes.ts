import { MainPage } from '../../pages/main-page/main-page';

export interface Route {
  name: string;
  path: string;
  exact: boolean;
  component: JSX.Element;
}

export const ROUTES = [
  {
    name: 'main',
    path: '/',
    element: MainPage,
  },
];
