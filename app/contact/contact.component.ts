import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  model: any = {};

  constructor() { }

  onSubmit() {
    alert('Thank You For Contact Us \n We will connect you soon!!!');
  }

  ngOnInit() {
  }

}
