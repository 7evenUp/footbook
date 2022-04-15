import { AppRoutes, AuthStackRoutes } from './types';

type RootRoutes = AuthStackRoutes & AppRoutes

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootRoutes {}
  }
}