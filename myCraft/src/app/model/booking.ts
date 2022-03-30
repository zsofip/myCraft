import { Appointment } from './appointment';

export class Booking {
  [key: string]: any;
  id: number = 0;
  name: string = '';
  email: string = '';
  package: number = 0;
  appointment: Appointment = new Appointment();
}


