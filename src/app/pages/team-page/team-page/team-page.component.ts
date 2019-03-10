import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Team} from '../../../classes/team.class';
import {TeamService} from '../../../services/team.service';
import {LoginService} from "../../../services/login.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  protected team: Team;

  constructor(private teamService: TeamService,  protected loginService: LoginService) {
  }

  ngOnInit() {
    this.team = new Team();
  }

  protected addTeam() {
    if (this.form.valid) {
      this.teamService.addTeam(this.team)
        .subscribe((res: any) => {
          console.log('call res', res);
        });
    }
  }

  protected excludeTeam() {
    if (this.form.valid) {
      this.teamService.excludeTeam(this.team)
        .subscribe((res: any) => {
          console.log('call res', res);
        });
    }
  }

}
