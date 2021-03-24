import { MatconfirmdialogComponent } from './../matconfirmdialog/matconfirmdialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(){
    return this.dialog.open(MatconfirmdialogComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
      position: { top: "10px" },
      disableClose: true
    });
  }
}
