import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { UserService } from '../services/user.service';




@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        // private userService: UserService,
        private router: Router
    ) { }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // const isLoggedIn = this.userService.isAuthenticated();
    const isLoggedIn: boolean = true;
    if (!isLoggedIn) {
        this.router.navigate(['/login']);
        return false;
      }else{
        return true;
      }
  }
}