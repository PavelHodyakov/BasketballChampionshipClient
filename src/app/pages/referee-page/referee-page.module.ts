import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefereePageComponent } from './referee-page/referee-page.component';
import {RefereePageRoutingModule} from "../referee-page/referee-page-routing.module";
import {FormsModule} from "@angular/forms";
import {FormControlsModule} from "../../core/form-controls/form-controls.module";
import {MatButtonModule} from "@angular/material";

@NgModule({
  declarations: [RefereePageComponent],
  imports: [
    CommonModule,
    RefereePageRoutingModule,
    FormsModule,
    FormControlsModule,
    MatButtonModule
  ]
})
export class RefereePageModule { }
