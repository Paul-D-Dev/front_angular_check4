export class Event {
  id: number;
  name: string;
  description: string;
  date: string;
  image: string;
  ticket: Ticket;
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
  promo?: number;
  isChild: boolean;
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
