import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseUrl: string = "http://127.0.0.1/";
  public apiUrl: string = this.baseUrl + 'api/'
  constructor() { }
  getApiUrl(){ return this.apiUrl; }
}
