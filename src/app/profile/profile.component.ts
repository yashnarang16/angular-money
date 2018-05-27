import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user;
  constructor() { }

  ngOnInit() {

    this.getUserInformation();
  }


  getUserInformation() {
    this.user = JSON.parse(sessionStorage.getItem('userDetails'))[0];
  }

}
