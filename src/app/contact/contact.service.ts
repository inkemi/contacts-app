import { Component } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';
import {FirebaseObjectObservable} from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contact: Observable<any[]>;

  constructor(afDb: AngularFireDatabase) {
    const afList = afDb.list('/contact');
    //afList.push({ LastName: 'Sukunimi', firstname: 'Mikko' });
    const listObservable = afList.snapshotChanges();
    listObservable.subscribe();
    afDb.list('/contact').valueChanges().subscribe(console.log);
  }
}
