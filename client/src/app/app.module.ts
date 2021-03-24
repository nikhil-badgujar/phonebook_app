import { MatIconModule } from '@angular/material/icon'
import { DialogService } from './shared/dialog.service';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';  
import { ContactService } from './shared/contact.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contacts/contact/contact.component';
import { MatTableModule } from '@angular/material/table';
import { EditcontactComponent } from './editcontact/editcontact.component';
import { MatconfirmdialogComponent } from './matconfirmdialog/matconfirmdialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactComponent,
    EditcontactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,    
    MatIconModule,
  ],
  providers: [
    ContactService,
    DialogService
  ],
  bootstrap: [AppComponent],
  entryComponents: [MatconfirmdialogComponent]
})
export class AppModule { }
