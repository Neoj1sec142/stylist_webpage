import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import { CategoryGroup } from '../models/category-group.model';
import { Appointment, AppointmentDto } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private apiUrl!: string;
  constructor(private appSvc: AppService, private http: HttpClient)
  { this.apiUrl = this.appSvc.getApiUrl() + 'utils/'; }


  getCats(){ return this.http.get<Category[]>(this.apiUrl + 'cat/'); };
  getCat(id: number){ return this.http.get<Category[]>(this.apiUrl + `cat/${id}/`); };
  createCat(cat: Category){ return this.http.post<Category>(this.apiUrl + 'cat/create/', cat); };
  deleteCat(id: number){ return this.http.delete<any>(this.apiUrl + `cat/destroy/${id}/`); };

  getCatGroups(){ return this.http.get<CategoryGroup[]>(this.apiUrl + 'cat-group/'); };
  getCatGroup(id: number){ return this.http.get<CategoryGroup[]>(this.apiUrl + `cat-group/${id}/`); };
  createCatGroup(group: CategoryGroup){ return this.http.post<CategoryGroup>(this.apiUrl + 'cat-group/create/', group); };
  updateCatGroup(group: CategoryGroup){ return this.http.put<CategoryGroup>(this.apiUrl + 'cat-group/update/', group); };
  deleteCatGroup(id: number){ return this.http.delete<any>(this.apiUrl + `cat-group/destroy/${id}/`); };


  getApts(){ return this.http.get<Appointment[]>(this.apiUrl + 'appointment/'); }
  getApt(id?: number){ return this.http.get<Appointment>(this.apiUrl + `appointment/${id}/`); }
  createApt(apt: AppointmentDto){ return this.http.post<Appointment>(this.apiUrl + 'appointment/create/', apt); }
  updateApt(apt: Appointment){ return this.http.put<Appointment>(this.apiUrl + `appointment/${apt.id}/`, apt); }
  deleteApt(id: number){ return this.http.delete<any>(this.apiUrl + `appointment/${id}/`); }
}
