import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isLoggedIn;
  public user_displayName;
  public user_email;
  public uid;
  constructor(private authService: AuthServiceService, private router: Router) {
    this.authService.getAuthStatus()
      .subscribe(
      (auth) => {
        if (auth == null) {
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['login']);
        } else {
          this.isLoggedIn = true;
          this.uid = auth.uid;
          this.user_displayName = auth.displayName;
          this.user_email = auth.email;
          sessionStorage.setItem('userDetails', JSON.stringify(auth.providerData));
          this.router.navigate(['home']);
        }
      });

  }

  ngOnInit() {
  }

  logout() {
    this.authService.getSignOut()
      .then((success) => {
        sessionStorage.clear();
        this.router.navigate(['/login']);
      }).catch((err) => {
        alert('something went wrong');
      })
  }

}
