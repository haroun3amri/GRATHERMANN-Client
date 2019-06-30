import { Component, OnInit } from '@angular/core';
import {usersMock} from "../fake-api/users-fake";
import {User} from "../Models/user";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  users = usersMock;
  actuelUser : User;


  constructor() { }

  ngOnInit() {
    this.actuelUser = this.users[0];
  }

}
