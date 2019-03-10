export class Login {

  loginValue: string;
  password: string;

  constructor(data?: any) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
