import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RefereePageComponent} from './referee-page/referee-page.component';

const routes: Routes = [
  {
    path: '',
    component: RefereePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefereePageRoutingModule {
}
