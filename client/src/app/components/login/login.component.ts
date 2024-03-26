import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  login() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;

      this.userService.login(username, password).subscribe((tokens: any) => {
        // this.busySvc.increaseRequests();
        this.snackBar.open('Logged in successfully!', 'Close', {
          duration: 1500,
          panelClass: ['mat-toolbar', 'mat-primary']
        }).afterDismissed().subscribe(() =>{
          this.userService.refreshToken();
          // this.busySvc.decreaseRequests()
          this.router.navigate(['/']);
        });
      }, (error: any) => {
        this.snackBar.open('Login failed: ' + error.error, 'Close', {
          duration: 1500,
          panelClass: ['mat-toolbar', 'mat-warn']
        });
        console.log('Login failed:', error);
      });
    }
  }
}
