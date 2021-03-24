import { Contact } from './contact.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  selectedContact!: Contact;
  contacts!: Contact[];

  url = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup(
    {
      _id: new FormControl(''),
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl(''),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    __v: new FormControl(0)
    }
  );

  initializeFormGroup() {
    this.form.setValue(
      {
        _id: '',
        first_name: '',
        last_name: '',
        phone: '',
        __v: 0
      }
    )
  };

  onEdit(row: Contact)  {
    this.form.setValue(row);
  }
  
  // retrieving contacts
  getContacts() : Observable<any> {
    return this.http.get<Contact[]>(this.url + "contacts");
  }

  // update contact 
  editContact(newContact: Contact) : Observable<any> {
    console.log(newContact._id);
    return this.http.put(this.url+'contact/'+newContact._id, newContact);
  }

  // add contact
  addContact(newContact: Contact) {
    return this.http.post(this.url+'contact/', newContact);
  }

  // delete contact
  deleteContact(id: any) : Observable<any>{
    return this.http.delete<any>(this.url + "contact/" + id);
  }  

}
