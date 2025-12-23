import {ITabsMain} from './tabsMain.types';
import {APP_ROUTE} from '@/constants/appRoutes.enums';

export const menuTabs: ITabsMain[] = [
  {
    id: 0,
    title: 'tab.home',
    page: APP_ROUTE.MAIN,
  },
  {
    id: 1,
    title: 'tab.shop',
    page: APP_ROUTE.MAIN,
  },
  {
    id: 2,
    title: 'tab.product',
    page: APP_ROUTE.MAIN,
  },
  {
    id: 3,
    title: 'tab.contact_us',
    page: APP_ROUTE.MAIN,
  },
  {
    id: 4,
    title: 'UI PAGE',
    page: APP_ROUTE.UI_PAGES,
  }
];