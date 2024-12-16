import { MAIN_PAGE_ROUTE, TEAM_PAGE_ROUTE } from "../utils/ consts";
import MainPage from "../pages/MainPage";
import TeamPage from "../pages/Team";

export const publicRoutes = [
  {
    path: MAIN_PAGE_ROUTE,
    Component: MainPage,
  },
  {
    path: TEAM_PAGE_ROUTE,
    Component: TeamPage,
  },
];
