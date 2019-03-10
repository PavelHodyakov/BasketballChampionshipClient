export class Team {

  name: string;
  city: string;

  constructor(data?: any) {
    if (data) {
      Object.assign(this, data);
    }
  }

}
