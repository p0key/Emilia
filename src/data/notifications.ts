import { PageBreadcrumbItem } from 'components/common/PageBreadcrumb';
import team30 from 'assets/img/team/40x40/30.webp';
import team57 from 'assets/img/team/40x40/57.webp';
import team59 from 'assets/img/team/40x40/59.webp';
import team58 from 'assets/img/team/40x40/58.webp';
import team60 from 'assets/img/team/40x40/60.webp';
import team34 from 'assets/img/team/40x40/34.webp';
export const notificationsBreadcrumbItems: PageBreadcrumbItem[] = [
  {
    label: 'Pages',
    url: '#!'
  },
  {
    label: 'Notifications',
    active: true
  }
];

export interface Notification {
  id: number | string;
  avatar?: string;
  name: string;
  detail?: string;
  interaction: string;
  interactionIcon: string;
  ago: string;
  icon: string;
  time: string;
  date: string;
  read: boolean;
  // avatarPlaceholder?: boolean;
}

export const notifications: Notification[] = [
  {
    id: '1',
    avatar: team30,
    name: 'Usuario',
    interactionIcon: '✔️',
    interaction: 'Ha cambiado el estado de un evento',
    detail: 'En peligro -> Zona limpia',
    ago: '10m',
    icon: 'clock',
    time: '10:41 AM ',
    date: 'March 27, 2024',
    read: true
  }
];
