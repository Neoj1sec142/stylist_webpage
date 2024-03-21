import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    get(item: string){ return sessionStorage.getItem(item); };
    getParsed(item: string){ return JSON.parse(sessionStorage.getItem(item) ?? ""); };
    set(key: string, item: string){ return sessionStorage.setItem(key, item); };
    setRaw(key: string, item: string){ return sessionStorage.setItem(key, JSON.stringify(item)); };
    remove(item: string){ return sessionStorage.removeItem(item); };
    exists(item: string){ return !!sessionStorage.getItem(item); };
    clear(){ return sessionStorage.clear(); };
}
