import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  conatctMethods = [
    {id : 1, method : 'email'},
    {id : 2, method : 'message'},
    {id : 3, method : 'phone'}

  ]
  constructor() { }
  log(x:any){
    console.log(x);
  }
  submit(f:any){
    console.log(f);
    console.log("The value is: "+ f.value.firstname+ " "+ f.value.comment);
  }
  
}
