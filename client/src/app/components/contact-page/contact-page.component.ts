import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  constructor(private dialogSvc: DialogService){ }
  ngOnInit() { }

  aptForm(){
    this.dialogSvc.openAptBox().subscribe(
      (res: any) => {
        console.log(res)
      })
  }
}
