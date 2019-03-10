import { Injectable } from '@angular/core';
import {RestService} from "./rest.service";
import {Match} from "../classes/match.class";

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private restService: RestService) { }

  public createMatch(match: Match){
    const params = {
      teamHost: match.teamHost,
      teamGuest: match.teamGuest,
      date: match.date,
      referee: match.referee
    };
    return this.restService.doCall('createMatch', params);
  }
}
