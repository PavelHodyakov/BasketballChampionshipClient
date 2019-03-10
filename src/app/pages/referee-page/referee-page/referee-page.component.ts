import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Referee} from "../../../classes/referee.class";
import {RefereeService} from "../../../services/referee.service"
import {LoginService} from "../../../services/login.service";

@Component({
  selector: 'app-referee-page',
  templateUrl: './referee-page.component.html',
  styleUrls: ['./referee-page.component.scss']
})
export class RefereePageComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  protected  referee: Referee;

  constructor( private refereeService: RefereeService, protected loginService: LoginService) { }

  ngOnInit() {
    this.referee = new Referee();
  }

  protected addReferee() {
    if (this.form.valid) {
      this.refereeService.addReferee(this.referee)
        .subscribe((res: any) => {
          console.log('call res', res);
        });
    }
  }
  protected excludeReferee() {
    if (this.form.valid) {
      this.refereeService.excludeReferee(this.referee)
        .subscribe((res: any) => {
          console.log('call res', res);
        });
    }
  }

}
