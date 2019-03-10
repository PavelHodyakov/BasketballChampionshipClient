import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: './pages/main-page/main-page.module#MainPageModule'
  },
  {
      path: 'team',
      loadChildren: './pages/team-page/team-page.module#TeamPageModule'
    },
  {
    path: 'referee',
    loadChildren: './pages/referee-page/referee-page.module#RefereePageModule'
  }
  ,
  {
    path: 'match',
    loadChildren: './pages/match-page/match-page.module#MatchPageModule'
  },
  {
    path: 'login',
    loadChildren: './pages/login-page/login-page.module#LoginPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
