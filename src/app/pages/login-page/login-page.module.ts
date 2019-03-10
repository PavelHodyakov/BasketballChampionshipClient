import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import {TeamPageRoutingModule} from "../team-page/team-page-routing.module";
import {FormsModule} from "@angular/forms";
import {FormControlsModule} from "../../core/form-controls/form-controls.module";
import {MatButtonModule} from "@angular/material";
import {LoginPageRoutingModule} from "./login-page-routing.module";

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    FormsModule,
    FormControlsModule,
    MatButtonModule
  ]
})
export class LoginPageModule { }
