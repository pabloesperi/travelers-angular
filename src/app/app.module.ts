import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListAllPersonsComponent } from './list-all-persons/list-all-persons.component';

import { PersonServiceService } from './services/person-service.service'

import {HttpClientModule} from '@angular/common/http';
import { PersonByIdComponent } from './person-by-id/person-by-id.component';
import { NewpersonRegistrationComponent } from './newperson-registration/newperson-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAllPersonsComponent,
    PersonByIdComponent,
    NewpersonRegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PersonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
