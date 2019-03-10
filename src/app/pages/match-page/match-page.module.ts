import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {FormControlsModule} from "../../core/form-controls/form-controls.module";
import {
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatButtonModule,
  MatFormFieldModule, MatInputModule, MatSelectModule
} from "@angular/material";
import {MatchPageRoutingModule} from "./match-page-routing.module";
import {MatchPageComponent} from "./match-page/match-page.component";
import {SelectComponent} from "../../core/select/select.component";
import {SelectRefereeComponent} from "../../core/select-referee/select-referee.component";

@NgModule({
  declarations: [MatchPageComponent, SelectComponent, SelectRefereeComponent],
  imports: [
    CommonModule,
    MatchPageRoutingModule,
    FormsModule,
    FormControlsModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class MatchPageModule { }
