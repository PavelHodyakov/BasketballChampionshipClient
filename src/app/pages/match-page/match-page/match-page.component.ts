import {Component, OnInit, ViewChild} from '@angular/core';
import {Match} from "../../../classes/match.class";
import {NgForm} from "@angular/forms";
import {MatchService} from "../../../services/match.service";
import {LoginService} from "../../../services/login.service";


@Component({
  selector: 'app-match-page',
  templateUrl: './match-page.component.html',
  styleUrls: ['./match-page.component.scss']
})
export class MatchPageComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  protected match: Match;

  constructor( private matchService: MatchService,  protected loginService: LoginService) { }

  ngOnInit() {
    this.match = new Match();
  }

  protected createMatch() {
    if (this.form.valid) {
      console.log('match:' ,this.match);
      this.matchService.createMatch(this.match)
        .subscribe((res: any) => {
          console.log('call res', res);
        });
    }
  }
}
