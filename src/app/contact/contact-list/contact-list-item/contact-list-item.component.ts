import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Contact} from '../../contact';

@Component({
  selector: 'ca-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})

    export class ContactListItemComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}
