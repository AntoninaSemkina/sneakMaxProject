import {
  ABOUTCOMPANY_PAGE_ROUTE,
  CATALOG_PAGE_ROUTE,
  MAIN_PAGE_ROUTE,
  TEAM_PAGE_ROUTE,
} from "../utils/ consts";
import MainPage from "../pages/MainPage";
import TeamPage from "../pages/Team";
import CatalogPage from "../pages/CatalogPage";
import AboutCompanyPage from "../pages/AboutCompany";

export const publicRoutes = [
  {
    path: MAIN_PAGE_ROUTE,
    Component: MainPage,
  },
  {
    path: TEAM_PAGE_ROUTE,
    Component: TeamPage,
  },
  {
    path: CATALOG_PAGE_ROUTE,
    Component: CatalogPage,
  },
  {
    path: ABOUTCOMPANY_PAGE_ROUTE,
    Component: AboutCompanyPage,
  },
];
