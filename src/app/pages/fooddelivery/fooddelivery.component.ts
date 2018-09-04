import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-fooddelivery',
  templateUrl: './fooddelivery.component.html',
  styleUrls: ['./fooddelivery.component.css']
})
export class FooddeliveryComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  ngOnInit() {
  }

}
