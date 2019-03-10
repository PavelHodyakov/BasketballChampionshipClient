import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  protected routes = [
    {
      name: 'Main Page',
      path: 'main'
    },
    {
    name: 'Team',
    path: 'team'
    },
    {
    name: 'Referee',
    path: 'referee'
    },
    {
      name: 'Match',
      path: 'match'
    },
    {
      name:'Login',
      path:'login'
    }
  ];

}
