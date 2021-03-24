import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { Contact } from '../shared/contact.model';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {

  constructor(public contactService: ContactService,
              public dialog: MatDialog,
              public dialogRef: MatDialogRef<Contact>) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.contactService.editContact(this.contactService.form.value)
      .subscribe(() => console.log("success"));
      this.dialogRef.close();
  }
}
