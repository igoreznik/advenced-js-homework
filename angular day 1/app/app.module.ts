import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MultipleTableComponent } from './multiple-table/multiple-table.component';
import { PepoleInfoComponent } from './pepole-info/pepole-info.component';


@NgModule({
  declarations: [
    AppComponent,
    MultipleTableComponent,
    PepoleInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
