import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {
  MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule
} from '@angular/material';

import {MatGridListModule} from '@angular/material/grid-list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { TableComponent } from './table.component';
import { DataService} from './data.service';
import {ResultObjComponent} from './resultObj.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ResultObjComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatToolbarModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
