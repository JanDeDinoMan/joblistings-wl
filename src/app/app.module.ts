import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ListingsComponent } from './components/listings/listings.component';
import { ListingComponent } from './components/listing/listing.component';
import { SelectorComponent } from './components/selector/selector.component';
import { FilterbarComponent } from './components/filterbar/filterbar.component';
import { ItemComponent } from './components/filterbar/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingsComponent,
    ListingComponent,
    SelectorComponent,
    FilterbarComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
