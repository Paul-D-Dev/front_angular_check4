export class Ticket {
  id: number;
  name: string;
  price: number;
  promo?: number;
  isChild: boolean;
  event?: Event;
  users: User[];
}

interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  image: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  birthday: string;
  avatarUrl: string;
  role: string;
  activated: boolean;
  tickets: Ticket[];
}

