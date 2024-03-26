import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';




@Injectable({
  providedIn: 'root'
})
export class StaffGuard implements CanActivate {
    private readonly staffRoles: string[] = ['admin', 'staff'];
    constructor(
        private userService: UserService,
        private router: Router
    ) { }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const isLoggedIn = this.userService.isAuthenticated();

    if (!isLoggedIn) {
        this.router.navigate(['/login']);
        return false;
      }else{
          const role = this.userService.getUserRole();
          
          if(role && !this.staffRoles.includes(role)){
              this.router.navigate(['/login']);
              return false;
          }
      }

    return true;
  }
}