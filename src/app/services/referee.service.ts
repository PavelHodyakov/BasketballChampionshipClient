import { Injectable } from '@angular/core';
import {RestService} from "./rest.service";
import {Referee} from "../classes/referee.class";

@Injectable({
  providedIn: 'root'
})
export class RefereeService {

  constructor(private restService: RestService) { }

  public addReferee(referee: Referee){
    const params = {
      firstName: referee.firstName,
      secondName: referee.lastName,
      city: referee.city
    };
    return this.restService.doCall('createReferee', params);
  }

  public excludeReferee(referee: Referee){
    const params = {
      firstName: referee.firstName,
      secondName: referee.lastName,
      city: referee.city
    };
    return this.restService.doCall('excludeReferee', params);
  }

  public getReferee(){
    return this.restService.doGet('getReferee');
  }
}
