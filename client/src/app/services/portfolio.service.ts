import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { ImageItem, ImageItemDto } from '../models/image-item.model';
import { HttpClient } from '@angular/common/http';
import { ImageGroup, ImageGroupDto } from '../models/image-group.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  apiUrl: string = this.appSvc.getApiUrl() + 'portfolio/';
  constructor(
    private http: HttpClient,
    private appSvc: AppService
    ) { }

  createImg(img: ImageItemDto){ return this.http.post<ImageItemDto>(this.apiUrl + 'img-item/create/', img); };
  deleteImg(id: number){ return this.http.delete<any>(this.apiUrl + 'img-item/destroy/' + `${id}/`); };
  getImg(id: number){ return this.http.post<ImageItem>(this.apiUrl + 'img-item/', `${id}/`); };

  getGroupSamples(){}
  getGroup(id: number){ return this.http.get<ImageGroup>(this.apiUrl + 'img-group/' + `${id}/`); }
  getAllGroups(){ return this.http.get<ImageGroup[]>(this.apiUrl + 'img-group/'); }
  createGroup(group: ImageGroupDto){ return this.http.post<ImageGroupDto>(this.apiUrl + 'img-group/create/', group); }
  deleteGroup(id: number){ return this.http.delete<any>(this.apiUrl + 'img-group/destroy/' + `${id}/`); }
}
