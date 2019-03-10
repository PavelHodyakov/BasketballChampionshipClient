import { Injectable } from '@angular/core';
import {RestService} from "./rest.service";
import {Login} from "../classes/login.class";


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(public restService: RestService) { this.result = false; }
  public result: boolean;
  public role: string;

  isAdmin(){
    if(this.result && this.role==='admin'){
      //console.log('resultioasjf:', this.result, this.role);
      return true;
    } else{
      //console.log('resultioasjf:', this.result, this.role);
      return false;
    }
  }

  public auth(login: Login){

    const params = {
      login: login.loginValue,
      password: login.password,
    };
    console.log("login, password: ", params);
    this.restService.doCall('login', params)
      .subscribe((res:ResponseLogin) => {
        this.result = res.result;
        this.role = res.rights;
        console.log('call res', res.rights, "  ", res.result);

      })
//    return this.restService.doCall('login', params);
  }

  public registryUser(login:Login){
    const params = {
      login: login.loginValue,
      password: login.password,
    };

    // let buf = new ArrayBuffer(16);
    // let bufView = new Uint16Array(buf);
    // let digest = crypto.subtle.digest('SHA-512', bufView);
    // params.password = String.fromCharCode.apply(null, digest);

    console.log("password: ",params.password);
    this.restService.doCall('registry', params)
      .subscribe((res: ResponseLogin) => {
        this.result = res.result;
        console.log('call res', res.rights, "  ", res.result);
      });
  }
}
export class ResponseLogin {
  set result(value: boolean) {
    this._result = value;
  }

  set rights(value: string) {
    this._rights = value;
  }
  get result(): boolean {
    return this._result;
  }

  get rights(): string {
    return this._rights;
  }

  private _result: boolean;
  private _rights: string;

  constructor(data?: any) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
