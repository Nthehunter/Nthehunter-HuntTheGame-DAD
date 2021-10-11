import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  send: boolean = false;
  visibleName: boolean = false;
  visibleEmail: boolean = false;
  visibleMessage: boolean = false;
  fname: any;
  fmessage: any;
  femail: any;


  constructor() {

  }

  ngOnInit(): void {
  }

  post(message: any) {
    let send_count = 0;

    var email = this.femail;
    var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(this.fname, message, this.femail)

    if (this.fname == null) {
      this.visibleName = true;
    }

    if (this.femail == null) {
      this.visibleEmail = true;
    }
    if (message == "") {
      this.visibleMessage = true;
    }

    if (Object.keys(this.fname).length < 3) {
      this.visibleName = true;
    }
    else{
      this.visibleName = false;
      send_count++;
    }

    if (email.match(EMAIL_REGEX)) {
      console.log("ok")
      this.visibleEmail = false
      send_count++;
    }
    else {
      this.visibleEmail = true
    }

    if(message.length < 10){
      this.visibleMessage = true;
    }else{
      this.visibleMessage= false;
      send_count++;
    }

    if(send_count == 3){
      this.send = true;
    }else{
      this.send = false;
    }

  }

}
