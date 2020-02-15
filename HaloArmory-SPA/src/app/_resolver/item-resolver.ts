import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ItemService } from '../_models/_services/item.service';
import { Item } from '../_models/Item';

@Injectable()
export class ItemList implements Resolve<Item[]> {
    pageNumber = 1;
    pageSize = 4;
    itemParams = {
        maxPrice: 9999,
        minPrice: 1
    }
    constructor(
        private itemService: ItemService,
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Item[]> {
        return this.itemService.getItems(this.pageNumber, this.pageSize, this.itemParams).pipe(
            catchError(() => {
                return of(null);
            })
        );
    }
}