import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  showFiller = false;

}
// import {Component} from '@angular/core';

// /**
//  * @title Autosize sidenav
//  */
// @Component({
//   selector: 'app-nav-bar',
//   templateUrl: './nav-bar.component.html',
//   styleUrls: ['./nav-bar.component.scss']
// })
// export class SidenavAutosizeExample {
//   showFiller = false;
// }