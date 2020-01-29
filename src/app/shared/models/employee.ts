import { Circus } from './circus';
export class Employee {
  id: number;
  name: string;
  job: string;
  description: string;
  avatarUrl: string;
  circus?: Circus;
}
