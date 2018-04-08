import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the EliteApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EliteApi {
  private baseUrl = 'https://elite-schedule-app-i2-c0c91.firebaseio.com'
  private currentTourney:any = {}
  constructor(public http: Http) {}

  getTornaments() {
    return this.http.get(`${this.baseUrl}/tournaments.json`)
      .map(response =>{
        return response.json()
      })
  }

 getTournamentData(tourneyId) : Observable<any> {
  return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
    .map(response =>{
      this.currentTourney = response.json()
      return this.currentTourney
    })
 }


}
