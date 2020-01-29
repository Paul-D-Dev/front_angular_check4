import { Employee } from './employee';
export class Circus {
  id: number;
  name: string;
  phone: string;
  address: Address;
  employees: Employee[];
  events: Event[];
}

interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  image: string;
}

interface Address {
  id: number;
  street: string;
  town: string;
  zip: number;
  x?: any;
  y?: any;
}
