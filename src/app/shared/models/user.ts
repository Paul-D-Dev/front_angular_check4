import { Ticket } from './ticket';
export class User {
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
