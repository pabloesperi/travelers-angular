import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListAllPersonsComponent } from './list-all-persons/list-all-persons.component';

import { PersonServiceService } from './services/person-service.service'

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListAllPersonsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PersonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
