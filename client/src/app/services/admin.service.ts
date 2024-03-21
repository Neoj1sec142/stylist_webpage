import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class AdminService {

    constructor(private storageSvc: StorageService){ }
    login(){ this.storageSvc.set("pwd", "") }
    logout(){}
    isAdmin(){}
    isLoggedIn(){}
}
