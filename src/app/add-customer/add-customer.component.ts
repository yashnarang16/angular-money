import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  public userForm: FormGroup;
  item: FirebaseListObservable<any>;
  public uid: any;
  constructor(public fb: FormBuilder, private af: AngularFireDatabase, private authService: AuthServiceService, private router: Router) {
    this.authService.getAuthStatus()
      .subscribe(
      (auth) => {
        if (auth == null) {
          this.router.navigate(['login']);
        } else {
          this.uid = auth.uid;
        }
      });
    this.initliazeForm();
    this.item = this.af.list('/user');

  }

  ngOnInit() {
  }

  initliazeForm() {
    this.userForm = this.fb.group({
      'uid': [this.uid],
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
      'mobilenumber': [null, Validators.required],
      'dob': [null, Validators.required],
      'balance': [0.0]
    });
  }

  addUser() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      const result = this.item.push(this.userForm.value);
      result.then(function (data) {
        console.log(data);
      }).catch(function (data) {
        console.log(data);
      })
    }
  }

}
