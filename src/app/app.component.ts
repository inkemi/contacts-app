import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private selectedAddContact: string;


  constructor(private router: Router) {
    this.selectedAddContact = 'contact-app';
  }

  showContactListItem() {
    this.router.navigate(['/contact-list-item']);
  }

  showAddContact() {
    this.router.navigate(['/add-contact']);

  }
}
