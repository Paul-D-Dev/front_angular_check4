
import { Ticket } from './ticket';
import { Circus } from './circus';

export class Event {
  id: number;
  name: string;
  description: string;
  date: string;
  image: string;
  priceAdult: number;
  quantity: number;
  tickets: Ticket[];
  circus: Circus;
}

