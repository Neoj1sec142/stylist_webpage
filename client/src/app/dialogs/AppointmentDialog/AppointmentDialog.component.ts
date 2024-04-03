import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-AppointmentDialog',
  templateUrl: './AppointmentDialog.component.html',
  styleUrls: ['./AppointmentDialog.component.css']
})
export class AppointmentDialog implements OnInit {
aptForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AppointmentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { }
  ) {}

  ngOnInit() {

  }

  private initForm(){
    this.aptForm = this.fb.group({
      
    })
  }

}
