import { AfterViewInit, Component, OnInit } from '@angular/core';
import { haircutFacts } from '../../helpers/article.data'

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  funFacts: string[] = haircutFacts;
  usps: any[]= []
  constructor() { }

  ngOnInit() {
  }
  
}
