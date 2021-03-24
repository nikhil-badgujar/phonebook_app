import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {

  constructor(public contactService: ContactService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.contactService.editContact(this.contactService.form.value)
      .subscribe(() => console.log("success"));
    
  }
}
