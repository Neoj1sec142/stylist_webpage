import { Component, ElementRef, OnInit } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private el: ElementRef,
    public loadingSvc: LoadingService) { }
  ngOnInit(){ }
  
}
