import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;
  fullname: string;
  emailaddress: string;
  phonenumber: number;
  password: string;
  constructor() { }

  ngOnInit() {
  }

}
