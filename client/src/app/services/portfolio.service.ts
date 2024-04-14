import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { UserService } from './user.service';
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
    private appSvc: AppService,
    private userSvc: UserService
    ) { }

  createImg(img: ImageItemDto){ 
    const data = new FormData();
    data.append('img', img.img);
    data.append('img_description', img.img_description);
    data.append('img_group', img.img_group.toString());
    const headers = this.userSvc.getAuthHeaders();
    headers.append('accept', 'multipart/form-data')
    return this.http.post<ImageItemDto>(this.apiUrl + 'img-item/create/', data, headers); 
  };
  deleteImg(id: number){ 
    const headers = this.userSvc.getAuthHeaders();
    return this.http.delete<any>(this.apiUrl + 'img-item/destroy/' + `${id}/`, headers); 
  };
  getImg(id: number){ return this.http.post<ImageItem>(this.apiUrl + 'img-item/', `${id}/`); };

  getGroupSamples(){}
  getGroup(id: number){ return this.http.get<ImageGroup>(this.apiUrl + 'img-group/' + `${id}/`); }
  getAllGroups(){ return this.http.get<ImageGroup[]>(this.apiUrl + 'img-group/'); }
  createGroup(group: ImageGroupDto){ 
    const headers = this.userSvc.getAuthHeaders();
    console.log(headers)
    return this.http.post<ImageGroupDto>(this.apiUrl + 'img-group/create/', group, headers); 
  }
  deleteGroup(id: number){ 
    const headers = this.userSvc.getAuthHeaders();
    return this.http.delete<any>(this.apiUrl + 'img-group/destroy/' + `${id}/`, headers); 
  }
}
