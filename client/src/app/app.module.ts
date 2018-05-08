import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import {HttpService} from './http.service';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { MapComponent } from './map/map.component';
import { QuoteComponent } from './quote/quote.component';


@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    EditComponent,
    TableComponent,
    QuoteComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
