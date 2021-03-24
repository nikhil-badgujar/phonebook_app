import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { Contact } from '../shared/contact.model';

@Component({
  selector: 'app-matconfirmdialog',
  templateUrl: './matconfirmdialog.component.html',
  styleUrls: ['./matconfirmdialog.component.css']
})
export class MatconfirmdialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<Contact>) { }

  ngOnInit(): void {
  }

  closeDialogf(res: boolean){
    this.dialogRef.close(false);
  }

  closeDialogt(res: boolean){
    this.dialogRef.close(true);
  }
}
