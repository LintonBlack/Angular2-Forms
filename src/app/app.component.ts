import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username;

  constructor() {
  	this.username = "John";
  }

  onSubmit(data) {
  	console.log(data)
  }
}
