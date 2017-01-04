import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	@ViewChild('formRef') form;
  username;

  constructor() {
  	this.username = "John";
  }

  onSubmit(data) {
  	console.log(data)
  }

  ngAfterViewInit() {
  	this.form.valueChanges
  	.subscribe(v => console.table(v))
  }
}
