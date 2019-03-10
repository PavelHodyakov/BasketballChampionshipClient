export class Referee {

  firstName: string;
  lastName: string;
  city: string;
  id: number;

  constructor(data?: any) {
    if (data) {
      Object.assign(this, data);
    }
  }

}
