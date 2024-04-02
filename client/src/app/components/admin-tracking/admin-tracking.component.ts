import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { TrackingIncrementor } from 'src/app/models/tracker.model';
import { TrackingService } from 'src/app/services/tracking.service';

@Component({
  selector: 'app-admin-tracking',
  templateUrl: './admin-tracking.component.html',
  styleUrls: ['./admin-tracking.component.css']
})
export class AdminTrackingComponent implements OnInit {
trackTab = 0;
tForm!: FormGroup;
trackers: TrackingIncrementor[] = [];
tDataSrc!: MatTableDataSource<TrackingIncrementor>;
tColumns: string[] = [ 
  'title', 'description', 'count', 'max_field_len', 
  'times_incremented', 'date_created', 'date_modified'
];
  constructor(
    private trackingSvc: TrackingService,
    private fb: FormBuilder,
    private snack: MatSnackBar
    ) { }

  ngOnInit() {
    this.initForm();
    this.getData()
  }


  private getData(){
    this.trackingSvc.getTrackers().subscribe(
      (trackers: TrackingIncrementor[]) => {
        console.log(trackers, "Success")
        this.trackers = trackers;
        this.tDataSrc = new MatTableDataSource<TrackingIncrementor>(this.trackers);
    }, (error: any) => { console.log(error, "Error") });
  }
  private initForm(){
    this.tForm = this.fb.group({
      'count': [0],
      'title': ['', Validators.required],
      'description': ['']
    })
  }
}
