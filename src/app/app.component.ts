import { Component, ViewChild } from '@angular/core';

import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/combineLatest";
import "rxjs/add/operator/filter";

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
  	Observable.combineLatest(
  		this.form.statusChanges,
  		this.form.valueChanges,
  		(status, value) => ({status, value}))
    //Only get changes when status is VALID
    .filter(({status}) => status === 'VALID')
    .subscribe(({value})=> console.table(value))
  	
  }
}
