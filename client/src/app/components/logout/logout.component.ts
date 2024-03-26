import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  requested: boolean = false;
  constructor(
    private userSvc: UserService,
    private router: Router
  ) { }
  
  loginAgain(){ this.router.navigate(['/login'])};
  ngOnInit() :void{ if(!this.requested)this.logoutUser() };
  logoutUser(): void{
    this.userSvc.logout();
    this.userSvc.removeUser();
    this.requested = true;
  }

}
