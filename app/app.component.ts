import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorldAngular';
  imgUrl="";

  //Like constructor, initialize first. Life cycle event
  ngOnInit(): void {
    this.title="Hello From BridgeLabz.";
    this.imgUrl="../assets/bridgelabz.jpg"
  }
}
