import { EditcontactComponent } from './../editcontact/editcontact.component';
import { ContactComponent } from './contact/contact.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ContactService } from './../shared/contact.service';
import { Contact } from '../shared/contact.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  displayedColumns: string[] = ['first_name', 'last_name', 'phone', 'actions'];
  dataSource: MatTableDataSource<Contact>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  contactForm!: FormGroup;
  contacts!: Contact[]; 
  contact: Contact = new Contact();
  first_name: string;
  last_name: string;
  phone: string;
  width = "40%";
  height = "65%";

  constructor(private dialog: MatDialog, public contactService : ContactService, private fb : FormBuilder) {
    
    this.first_name = '',
    this.last_name = '',
    this.phone = '',

    this.dataSource = new MatTableDataSource(this.contacts);
  }

  ngOnInit() {
    this.contactService.getContacts()
      .subscribe((d) => {this.contacts = d});
  }

  ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }

  ngDoCheck() {
    this.dataSource = new MatTableDataSource(this.contacts);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editContact(row: Contact) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%"
    dialogConfig.width = this.width;
    dialogConfig.height = this.height;

    this.contactService.onEdit(row);
    this.dialog.open(EditcontactComponent, dialogConfig);
  }

  deleteContact(row: any) {
    console.log(row);
    this.contactService.deleteContact(row._id)
    .subscribe(
      () => console.log("record deleted")
    );
  }

  newContact(): void
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%"
    dialogConfig.width = this.width;
    dialogConfig.height = this.height;

    this.dialog.open(ContactComponent, dialogConfig);  
  }

}