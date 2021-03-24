import { EditcontactComponent } from './../../editcontact/editcontact.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contact } from 'src/app/shared/contact.model';
import { ContactService } from 'src/app/shared/contact.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  contactForm!: FormGroup;
  contacts!: Contact[]; 
  contact: Contact = new Contact();
  

  constructor(public contactService: ContactService, 
              private fb: FormBuilder,
              public dialog: MatDialog) { 

    this.buildContactForm();
    
  }

  buildContactForm(){
    this.contactForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: [''],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    })
  }

  ngOnInit() {
    this.reload();
  }

  onSubmit() {
    console.log(this.contactService.form.value);
    this.contactService.addContact(this.contactService.form.value)
      .subscribe((d) => console.log(d));
    
  }

  reload(){
    this.contactService.form.reset();
    this.contactService.initializeFormGroup();
    //this.dialogRef.close();
  }

  // onClear() {
  //   this.contactService.form.reset();
  //   this.contactService.initializeFormGroup();
  // }


}
