import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemCardComponent } from './items/items-card/item-card/item-card.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { appRoute } from './router';
import { ItemList } from './_resolver/item-resolver';
import { PaginationModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';





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
    StarRatingModule.forRoot()



  ],
  providers: [
    ItemList
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
