import { User } from './user';
import { Event } from './event';

export class Ticket {
  id: number;
  name: string;
  price: number;
  quantity: number;
  promo?: number;
  isChild: boolean;
  event?: number;
  user: User;
}
