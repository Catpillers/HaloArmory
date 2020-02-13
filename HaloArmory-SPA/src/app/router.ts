import { ItemsListComponent } from './items/items-list/items-list.component';
import { Routes } from '@angular/router';
import { ItemList } from './_resolver/item-resolver';

export const appRoute: Routes = [
    { path: '', component: ItemsListComponent, resolve: { items: ItemList } }]