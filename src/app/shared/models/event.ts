import { User } from './user';

export class Event {
  id: number;
  name: string;
  description: string;
  date: string;
  image: string;
  tickets: Ticket[];
  circus: Circus;
}


interface Circus {
  id: number;
  name: string;
  phone: string;
  address: Address;
  employees: Employees[];
  events: Event[];
}

interface Ticket {
  id: number;
  name: string;
  price: number;
  quantity: number;
  sumOrder: number;
  promo?: number;
  isChild: boolean;
  users: User[];
}

interface Address {
  id: number;
  street: string;
  town: string;
  zip: number;
  x?: any;
  y?: any;
}

interface Employees {
  id: number;
  name: string;
  job: string;
  description: string;
  avatarUrl: string;
  circus?: Circus;
}
