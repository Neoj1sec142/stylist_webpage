import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ImageGroup } from 'src/app/models/image-group.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-admin-image',
  templateUrl: './admin-image.component.html',
  styleUrls: ['./admin-image.component.css']
})
export class AdminImageComponent implements OnInit {
  iForm!: FormGroup;
  existingGroups: ImageGroup[] = [];
  constructor(private fb: FormBuilder, private portSvc: PortfolioService, private snack: MatSnackBar) { }

  ngOnInit() { 
    this.initForms(); 
    this.getGroups();
  }
  initForms(){
    this.iForm = this.fb.group({
      'img': ['', Validators.required],
      'img_description': [''],
      'img_group': [0, Validators.required]
    })
  }
  

  submitItem(){
    console.log(this.iForm.value)
    if(this.iForm.valid){
      // this.portSvc.createImg(this.iForm.value).subscribe(
      //   (res: any) => {
      //     console.log(res, "Success")
      //     this.snack.open('Image Created Successfully! =)', 'Close', {
      //       duration: 1500,
      //       panelClass: ['snackbar-success']
      //     })
      //   }, (error: any) => {
      //     console.log(error, "Error")
      //     this.snack.open('Error Creating Image =(', 'Close', {
      //       duration: 1500,
      //       panelClass: ['snackbar-error']
      //     })
      //   })
    }else{
      this.snack.open('Error: You didnt fill out the img or group. =(', 'Close', {
        duration: 1500,
        panelClass: ['snackbar-error']
      })
    }
  }
  reset(){ this.iForm.reset(); };
  private getGroups(){
    this.portSvc.getAllGroups().subscribe({
      next: (groups: ImageGroup[]) => {
        console.log(groups)
        this.existingGroups = groups;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
