import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorldAngular';

  //Like constructor, initialize first. Life cycle event
  ngOnInit(): void {
    this.title="Hello From BridgeLabz.";
  }
}
