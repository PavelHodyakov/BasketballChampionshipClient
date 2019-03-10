import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import {FormControlsModule} from '../../core/form-controls/form-controls.module';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {StudentService} from '../../services/student.service';
import { DataTableComponent } from '../../core/data-table/data-table.component';

@NgModule({
  declarations: [MainPageComponent,  DataTableComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    FormsModule,
    FormControlsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [StudentService]
})
export class MainPageModule { }
