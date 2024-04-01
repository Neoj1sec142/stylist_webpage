import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-utils',
  templateUrl: './admin-utils.component.html',
  styleUrls: ['./admin-utils.component.css']
})
export class AdminUtilsComponent implements OnInit {
  cForm!: FormGroup;
  cgForm!: FormGroup;
  catTab = 0;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initCForm();
  }

  initCForm(){
    this.cForm = this.fb.group({
      'name': ['', Validators.required]
    })
  }
  initCGForm(){
    this.cgForm = this.fb.group({
      'title': ['', Validators.required],
    })
  }
}
