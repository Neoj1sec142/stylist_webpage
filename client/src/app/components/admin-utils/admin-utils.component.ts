import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryGroup } from 'src/app/models/category-group.model';
import { Category } from 'src/app/models/category.model';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-admin-utils',
  templateUrl: './admin-utils.component.html',
  styleUrls: ['./admin-utils.component.css']
})
export class AdminUtilsComponent implements OnInit {
  selectedGroup: CategoryGroup | null = null; 
  selectedGroupCats: Category[] = [];
  cForm!: FormGroup;
  cgForm!: FormGroup;
  catTab = 0;
  groups: CategoryGroup[] = []
  dummyCats: Category[] = [
    {id: 0, name: "Long Cuts"},{id: 1, name: "Medium Length Cuts"},{id: 2, name: "Pixie Cuts"},
    {id: 3, name: "Mens Cuts"},{id: 4, name: "Highlighting"},{id: 5, name: "Toning"}
  ]
  dummyGroups: CategoryGroup[] = [
    {id: 0, title: "something1", categories: []},
    {id: 1, title: "something2", categories: []}
  ]
  
  constructor(
    private fb: FormBuilder,
    private snack: MatSnackBar,
    private utilSvc: UtilityService
    ) { }

  ngOnInit() {
    this.initCForm();
    this.initCGForm();
    this.getCatGroups();
  }

  onSubmit(){
    switch(this.catTab){
      case 0:
        this.submitCategory();
        break;
      case 1:
        this.submitCategoryGroup();
        break;
      case 2:
        //adding
        break;
      default:
        break;
    }
  }
  moveChip(cat: Category){
    if(!this.selectedGroupCats.includes(cat)){
      this.dummyCats.filter(c => c.id !== cat.id);
      this.selectedGroupCats.push(cat);
    }
  }

  changeCat(event: any){
    console.log(event, "EVENT")
  }
  reset(){
    this.cForm.reset();
    this.cgForm.reset();
    //adding
  }

  private submitCategory(){
    if(!this.cForm.valid){ 
      this.snack.open('You have not filled out the box.', 'Close', {
        duration: 1500
      })
      return 
    }
    this.utilSvc.createCat(this.cForm.value).subscribe(
      (res: any) => {
        console.log(res, "Success")
        this.snack.open('Your Category Has Been Created Successfully! =)', 'Close', {
          duration: 1500
        })
      }, (error: any) => {
        console.log(error, "Error")
        this.snack.open(`Error: ${error} =(`, 'Close', {
          duration: 1500
        })
      })
  }
  private submitCategoryGroup(){
    if(!this.cgForm.valid){ 
      this.snack.open('You have not filled out the box.', 'Close', {
        duration: 1500
      })
      return 
    }
    this.utilSvc.createCatGroup(this.cgForm.value).subscribe(
      (res: any) => {
        console.log(res, "Success")
        this.snack.open('Your Category Group Has Been Created Successfully! =)', 'Close', {
          duration: 1500
        })
      }, (error: any) => {
        console.log(error, "Error")
        this.snack.open(`Error: ${error} =(`, 'Close', {
          duration: 1500
        })
      })
  }
  private updateCategoryGroup(){

  }
  private getCatGroups(){
    this.utilSvc.getCatGroups().subscribe(
      (groups: CategoryGroup[]) => {
        console.log(groups, "Success")
        this.groups = groups;
      }, (error: any) => {
        console.log(error, 'Error')
      })
  }
  private initCForm(){
    this.cForm = this.fb.group({
      'name': ['', Validators.required]
    })
  }
  private initCGForm(){
    this.cgForm = this.fb.group({
      'title': ['', Validators.required],
    })
  }
}
