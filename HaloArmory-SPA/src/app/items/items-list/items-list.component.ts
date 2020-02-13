import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/_models/_services/item.service';
import { Item } from 'src/app/_models/Item';
import { ActivatedRoute } from '@angular/router';
import { Pagination, PaginatedResult } from 'src/app/_models/pagination';



@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  pagination: Pagination;
  items: Item[];
  itemParams: any = {};


  constructor(private service: ItemService, private roots: ActivatedRoute) { }

  ngOnInit() {
    this.roots.data.subscribe(data => {
      this.items = data['items'].result;
      this.pagination = data['items'].pagination;

    });
    this.itemParams.minPrice = 0;
    this.itemParams.maxPrice = 9999;
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadItems();
  }

  resetFilters() {
    this.itemParams.minPrice = 0;
    this.itemParams.maxPrice = 9999;
    this.loadItems();
  }

  loadItems() {
    this.service.getItems(this.pagination.currentPage, this.pagination.itemsPerPage, 
                          this.itemParams).subscribe((data: PaginatedResult<Item[]>) => {
      this.items = data.result;
      this.pagination = data.pagination;
      console.log(this.items);
    }, error => {
      console.log(error);
    }
    );

  }
}
