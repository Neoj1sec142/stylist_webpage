import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackingIncrementor } from '../models/tracker.model';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})

export class TrackingService {
private apiUrl!: string;
  constructor(
    private http: HttpClient,
    private appSvc: AppService
    ) { this.apiUrl = this.appSvc.getApiUrl() + 'utils/tracking/'; }
  getTrackers(){
    return this.http.get<TrackingIncrementor[]>(this.apiUrl)
  }
  get(id: number){
    return this.http.get<TrackingIncrementor>(this.apiUrl + `${id}/`)
  }
  create(tracker: TrackingIncrementor){
    return this.http.post<TrackingIncrementor>(this.apiUrl + 'create/', tracker)
  }
  increment(id: number){
    return this.http.put<any>(this.apiUrl + `increment/${id}/`, {})
  }
  
}
