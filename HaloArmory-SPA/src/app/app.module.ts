import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { appRoute } from './router';
import { ItemList } from './_resolver/item-resolver';
import { PaginationModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';
import { ItemCardComponent } from './items/item-card/item-card.component';





@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemCardComponent,
    NavbarComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    PaginationModule.forRoot(),
    FormsModule,
    StarRatingModule.forRoot(),
    ReactiveFormsModule



  ],
  providers: [
    ItemList
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
