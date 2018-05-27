import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
   public users: any = [];
  constructor(private af: AngularFireDatabase) {

  }

  ngOnInit() {
    this.getUserList();
  }


  getUserList() {
    const queryObservable = this.af.list('/user', {preserveSnapshot: true});
    queryObservable
      .subscribe(snapshots => {
      snapshots.forEach(snapshot => {
      this.users.push(snapshot.val());
    });
       console.log(this.users);
      })
  }

}
