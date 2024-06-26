import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ImageGroup } from 'src/app/models/image-group.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-admin-manage',
  templateUrl: './admin-manage.component.html',
  styleUrls: ['./admin-manage.component.css']
})
export class AdminManageComponent implements OnInit {
  gForm!: FormGroup;
  selectedTab = 0;
  constructor(
    private fb: FormBuilder,
    private snack: MatSnackBar,
    private portSvc: PortfolioService
    ){ }
  
  
  ngOnInit() {
    this.initForms()
  }
  initForms(){
    this.gForm = this.fb.group({
      'client_name': ['', Validators.required],
      'client_email': ['', Validators.email],
      'client_social': [''],
      'style_description': ['', Validators.required]
    })
  }
  
  submitGroup(){
    if(this.gForm.valid){
      this.portSvc.createGroup(this.gForm.value).subscribe(
        (res: any) => {
          console.log(res, "Success")
          this.snack.open('Image Group Created Successfully! =)', 'Close', {
            duration: 1500,
            panelClass: ['snackbar-success']
          })
        }, (error: any) => {
          console.log(error, "Error")
          this.snack.open('Error Creating Image Group =(', 'Close', {
            duration: 1500,
            panelClass: ['snackbar-error']
          })
        })
    }else{
      this.snack.open('Error: You didnt fill out the name or description. =(', 'Close', {
        duration: 1500,
        panelClass: ['snackbar-error']
      })
    }
  }
  
  reset(){ this.gForm.reset(); };
}
