import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { provideZoneChangeDetection } from '@angular/core';
import { AppComponent } from './app.component';  // AppComponent as a standalone component
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

@NgModule({
  declarations: [
    // No need to add AppComponent here if it's standalone
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    ,  // Add HttpClientModule here
  ],
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(withEventReplay()),
    HttpClient
  ],
  // You don't need to bootstrap AppComponent like before
})
export class AppModule { }
