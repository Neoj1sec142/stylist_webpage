import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { ConfirmDialog } from '../dialogs/ConfirmDialog/ConfirmDialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

constructor(public dialog: MatDialog) { }

  openConfirmBox(question: string): Observable<boolean>{
    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '250px',
      data: { question: question }
    });
    return dialogRef.afterClosed()
  }

}
