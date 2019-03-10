import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamPageRoutingModule } from './team-page-routing.module';
import { TeamPageComponent } from './team-page/team-page.component';
import {FormControlsModule} from '../../core/form-controls/form-controls.module';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material';
import {TeamService} from '../../services/team.service';

@NgModule({
  declarations: [TeamPageComponent],
  imports: [
    CommonModule,
    TeamPageRoutingModule,
    FormsModule,
    FormControlsModule,
    MatButtonModule
  ],
  providers: [TeamService]
})
export class TeamPageModule { }
