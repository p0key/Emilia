import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Icon,UilChartPie,UilCube } from '@iconscout/react-unicons';

export interface Route {
  name: string;
  icon?: IconProp | string | string[];
  iconSet?: 'font-awesome' | 'feather' | 'unicons';
  pages?: Route[];
  path?: string;
  pathName?: string;
  flat?: boolean;
  topNavIcon?: string;
  dropdownInside?: boolean;
  active?: boolean;
  new?: boolean;
  hasNew?: boolean;
}

export interface RouteItems {
  label: string;
  horizontalNavLabel?: string;
  icon: Icon;
  labelDisabled?: boolean;
  pages: Route[];
  megaMenu?: boolean;
  active?: boolean;
}

export const routes: RouteItems[] = [
  {
    label: 'dashboard',
    horizontalNavLabel: 'home',
    active: true,
    icon: UilChartPie,
    labelDisabled: true,
    pages: [
      {
        name: 'General', // Nombre de categoría
        icon: 'pie-chart',
        active: true,
        flat: true,
        pages: [
          {
            name: 'Resumen',
            path: '/',
            pathName: 'default-dashboard',
            topNavIcon: 'shopping-cart',
            active: true
          }
        ]
      }
    ]
  },
  {
    label: 'Aplicaciones',
    icon: UilCube,
    pages: [
      {
        name: 'Geolocalización',
        active: true,
        icon: 'map-pin',
        pages: [
          {
            name: 'Vista de administrador',
            active: true,
            pages: [
              {
                name: 'add-product',
                path: '/apps/e-commerce/admin/add-product',
                pathName: 'e-commerce-add-product',
                active: true
              },
              {
                name: 'products',
                path: '/apps/e-commerce/admin/products',
                pathName: 'e-commerce-products',
                active: true
              },
              {
                name: 'customers',
                path: '/apps/e-commerce/admin/customers',
                pathName: 'e-commerce-customers',
                active: true
              },
              {
                name: 'customer-details',
                path: '/apps/e-commerce/admin/customer-details',
                pathName: 'e-commerce-customer-details',
                active: true
              },
              {
                name: 'orders',
                path: '/apps/e-commerce/admin/orders',
                pathName: 'e-commerce-orders',
                active: true
              },
              {
                name: 'order-details',
                path: '/apps/e-commerce/admin/order-details',
                pathName: 'e-commerce-order-details',
                active: true
              },
              {
                name: 'refund',
                path: '/apps/e-commerce/admin/refund',
                pathName: 'e-commerce-refund',
                active: true
              }
            ]
          },
          {
            name: 'Vista de usuario',
            active: true,
            pages: [
              {
                name: 'homepage',
                path: 'apps/e-commerce/customer/homepage',
                pathName: 'e-commerce-fe-home',
                active: true
              },
              {
                name: 'product-details',
                path: 'apps/e-commerce/customer/product-details',
                pathName: 'e-commerce-fe-product-details',
                active: true
              },
              {
                name: 'products-filter',
                path: 'apps/e-commerce/customer/products-filter',
                pathName: 'e-commerce-fe-product-filter',
                active: true
              },
              {
                name: 'cart',
                path: 'apps/e-commerce/customer/cart',
                pathName: 'e-commerce-fe-cart',
                active: true
              },
              {
                name: 'checkout',
                path: 'apps/e-commerce/customer/checkout',
                pathName: 'e-commerce-fe-checkout',
                active: true
              },
              {
                name: 'shipping-info',
                path: 'apps/e-commerce/customer/shipping-info',
                pathName: 'e-commerce-fe-shipping-info',
                active: true
              },
              {
                name: 'profile',
                path: 'apps/e-commerce/customer/profile',
                pathName: 'e-commerce-fe-profile',
                active: true
              },
              {
                name: 'favorite-stores',
                path: 'apps/e-commerce/customer/favorite-stores',
                pathName: 'e-commerce-fe-favorite-stores',
                active: true
              },
              {
                name: 'wishlist',
                path: 'apps/e-commerce/customer/wishlist',
                pathName: 'e-commerce-fe-wishlist',
                active: true
              },
              {
                name: 'order-tracking',
                path: 'apps/e-commerce/customer/order-tracking',
                pathName: 'e-commerce-fe-order-tracking',
                active: true
              },
              {
                name: 'invoice',
                path: 'apps/e-commerce/customer/invoice',
                pathName: 'e-commerce-fe-invoice',
                active: true
              }
            ]
          }
        ]
      }
    ]
  }
];
