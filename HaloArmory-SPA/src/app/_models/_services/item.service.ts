import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../Item';
import { PaginatedResult } from '../pagination';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }



  getItems(page?, itemsPerPage?, itemParams?): Observable<PaginatedResult<Item[]>> {
    const paginatedResult: PaginatedResult<Item[]> = new PaginatedResult<Item[]>();
    let params = new HttpParams();
    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }
    if (itemParams != null) {
      params = params.append('minPrice', itemParams.minPrice);
      params = params.append('maxPrice', itemParams.maxPrice);
    }
    return this.http.get<Item[]>(this.baseUrl + 'items', { observe: 'response', params })
      .pipe(
        map(response => {
          paginatedResult.result = response.body;
          if (response.headers.get('pagination') != null) {
            paginatedResult.pagination = JSON.parse(response.headers.get('pagination'));
          }
          return paginatedResult;
        })
      );
  }

}
