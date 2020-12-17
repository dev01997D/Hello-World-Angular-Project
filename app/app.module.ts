// app.module.ts - Indicating this is a TypeScript file
//                  essentially Provides Strong Type Checking

//Importing core modules of Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Whenever CLI is used to generate new components and services, it
// will automatically update this file to import and add them here.
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Further using @NgModules decorator we provide additional metadata to 
// specify the Components, the Services, the Imports, etc.. Further
// Decorators are used while processing, instantiation and at runtime.
@NgModule({

  // Components are added here, Essentially the classes that has views,
  // they are Components, Directives and Pipes.
  declarations: [
    AppComponent
  ],

  // Various imports needed for application can be added here
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormsModule
  ],

// Typically Services like http-services are added to providers
  providers: [],

  // The root component which is the main view of the application. Only the 
  // root module has this property and it indicates the component that's 
  // gonna be bootstrapped.
  bootstrap: [AppComponent]
})
export class AppModule { }
