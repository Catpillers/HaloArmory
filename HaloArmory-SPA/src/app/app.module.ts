import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ItemService } from './_models/_services/item.service';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemCardComponent } from './items/items-card/item-card/item-card.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemCardComponent,
    NavbarComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
