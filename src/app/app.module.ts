import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
// import {MaterialComponentsModule} from './material-components/material-components.module';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactListItemComponent} from './contact/contact-list/contact-list-item/contact-list-item.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import {environment} from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import {AddContactComponent} from './contact/contact-list/add-contact/add-contact.component';

const routes: Routes = [
  {
    path: 'add-contact',
    component: AddContactComponent
  },
  {
    path: 'contact-list-item',
    component: ContactListItemComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
