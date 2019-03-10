import { Injectable } from '@angular/core';
import {Team} from "../classes/team.class";
import {RestService} from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private restService: RestService) { }

  public getData() {
    // const params = new HttpParams()
    //   .append('team', team.name)
    //   .append('city', team.city);
    // const params = {
    //   name: team.name,
    //   city: team.city
    // }
    //console.log('name: ' + team.name + ' city: ' + team.city);
    return this.restService.doGet('getMatches');
  }
}
