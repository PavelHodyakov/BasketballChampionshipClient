import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {Team} from '../classes/team.class';
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private restService: RestService) {
  }

  public addTeam(team: Team) {
    // const params = new HttpParams()
    //   .append('team', team.name)
    //   .append('city', team.city);
    const params = {
      name: team.name,
      city: team.city
    }
    //console.log('name: ' + team.name + ' city: ' + team.city);
    return this.restService.doCall('createTeam', params);
  }

  public excludeTeam(team: Team){
    const params = {
      name: team.name,
      city: team.city
    }
    console.log('name: ' + team.name + ' city: ' + team.city);
    return this.restService.doCall('excludeTeam', params);
  }

  public getTeam(){
    return this.restService.doGet("getTeam");
  }
}
