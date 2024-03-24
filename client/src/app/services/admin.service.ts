import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { AppService } from './app.service';
import { RestrictedUrl } from '../helpers/article.data';

@Injectable()
export class AdminService {

    constructor(
        private storageSvc: StorageService,
        private appSvc: AppService
        ){ }
    login(pswd: string){ this.storageSvc.set("pwd", pswd) }
    logout(){ this.storageSvc.remove("pwd") }
    isAdmin(): boolean{ return true }
    isLoggedIn(){}

    allowedAdmin(route: string, restrictedRoutes: RestrictedUrl[]): boolean {
        const base: string = this.appSvc.getApiUrl()
        restrictedRoutes.forEach((url: RestrictedUrl) => {
            const fullName: string = base + url.url;
            if(fullName === route){
                return this.isAdmin();
            }
        })
        return true;
    }
}
