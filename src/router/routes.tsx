import {
  ABOUTCOMPANY_PAGE_ROUTE,
  CATALOG_PAGE_ROUTE,
  MAIN_PAGE_ROUTE,
  PRODUCT_PAGE_ROUTE,
  SELECT_PAGE_ROUTE,
  TEAM_PAGE_ROUTE,
} from "../utils/ consts";
import MainPage from "../pages/MainPage";
import TeamPage from "../pages/Team";
import CatalogPage from "../pages/CatalogPage";
import AboutCompanyPage from "../pages/AboutCompany";
import ProductPage from "../pages/ProductPage";
import Basket from "../components/Basket";
import SelectPage from "../pages/SelectPage";

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
  {
    path: PRODUCT_PAGE_ROUTE,
    Component: ProductPage,
  },
  {
    path: SELECT_PAGE_ROUTE,
    Component: SelectPage,
  },
  {
    path: "/basket",
    Component: Basket,
  },
];
