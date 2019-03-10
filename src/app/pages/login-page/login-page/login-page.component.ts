import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Login} from "../../../classes/login.class";
import {LoginService} from "../../../services/login.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  protected login: Login;



  constructor(private loginService: LoginService) {

  }

  ngOnInit() {
    this.login = new Login();
  }



  protected auth() {
    if (this.form.valid) {
      this.loginService.auth(this.login);
        // .subscribe((res: boolean) => {
        //    console.log('call res', res);
        //
        // });
    }
  }

  protected  registryUser(){
    if(this.form.valid){
      this.loginService.registryUser(this.login);
    }
  }

}
