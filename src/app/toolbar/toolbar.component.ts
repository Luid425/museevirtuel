import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  userState: boolean = false;
  menuState: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  displayUser() {
    this.userState = !this.userState;
  }
  displayMenu() {
    this.menuState = !this.menuState;
  }
}
