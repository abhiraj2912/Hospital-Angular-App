import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientEntryComponent } from './patient-entry/patient-entry.component';
import { PatientsearchComponent } from './patientsearch/patientsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientEntryComponent,
    PatientsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
