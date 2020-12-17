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
}
