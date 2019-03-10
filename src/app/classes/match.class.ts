export class Match {

  teamHost: string;
  teamGuest: string;
  date: string;
  referee: string;

  constructor(data?: any) {
    if (data) {
      Object.assign(this, data);
    }
  }

}
