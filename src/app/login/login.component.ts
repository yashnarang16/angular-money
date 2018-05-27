import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isLoggedIn;
  user_displayName
  user_email
  uid
  constructor(private authService: AuthServiceService, private router: Router) {
    // this.authService.getAuthStatus()
    //   .subscribe(
    //   (auth) => {
    //     if (auth == null) {
    //       this.isLoggedIn = false;
    //       this.user_displayName = '';
    //       this.user_email = '';
    //       this.router.navigate(['login']);
    //     } else {
    //       this.isLoggedIn = true;
    //       this.uid = auth.uid;
    //       this.user_displayName = auth.displayName;
    //       this.user_email = auth.email;
    //       this.router.navigate(['home']);
    //     }
    //   });
  }

  ngOnInit() {
if (this.isLoggedIn) {
      const user = {
        uid: this.uid,
        email: this.user_email,
        name: this.user_displayName
      }
      console.log(user);
      sessionStorage.setItem('userinfo', user.toString());
    }
  }


  login() {
    this.authService.getSignIn()
      .then((success) => {
        this.router.navigate(['home']);
      }).catch((err) => {
        alert('error');
      })
  }

}
