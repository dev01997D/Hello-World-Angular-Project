import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorldAngular';
  imgUrl="";
  url;
  userName: string = "";
  nameError: string ="";

  //Like constructor, initialize first. Life cycle event
  ngOnInit(): void {
    this.title="Hello From BridgeLabz.";
    this.imgUrl="../assets/bridgelabz.jpg";
    this.url="https://www.bridgelabz.com/";
  }

  onClick($event){
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

  onInput($event) {
    console.log("Change Event Occured!", $event.data);
    const nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if (nameRegex.test(this.userName)){
      this.nameError="";
      return;
    }
    else {
      this.nameError="Name is Incorrect";
      return;
    }
  }
}
