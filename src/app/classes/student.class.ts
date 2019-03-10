export class Student {

  firstName: string;
  lastName: string;
  id: number;

  constructor(data?: any) {
    if (data) {
      Object.assign(this, data);
    }
  }

}
