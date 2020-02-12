import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../Item';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl + 'items');
  }

}
