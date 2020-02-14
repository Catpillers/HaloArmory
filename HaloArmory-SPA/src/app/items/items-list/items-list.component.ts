import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/_models/_services/item.service';
import { Item } from 'src/app/_models/Item';
import { ActivatedRoute } from '@angular/router';
import { Pagination, PaginatedResult } from 'src/app/_models/pagination';


// tslint:disable-next-line: no-debugger

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  pagination: Pagination;
  items: Item[];
  itemParams: any = {};
  // typeList = [{value: 'armour'}, {value: 'weapon'}];

  // TODO: Rewright this! Use angular form instead!
  // https://netbasal.com/handling-multiple-checkboxes-in-angular-forms-57eb8e846d21
  types = [
    { name: 'armour', checked: false },
    { name: 'weapon', checked: false }
  ];

  constructor(private service: ItemService, private roots: ActivatedRoute) { }

  ngOnInit() {
    this.roots.data.subscribe(data => {
      this.items = data['items'].result;
      this.pagination = data['items'].pagination;
    });
    this.itemParams.minPrice = 0;
    this.itemParams.maxPrice = 9999;
    this.itemParams.type = this.types
      .filter(opt => opt.checked)
      .map(opt => opt.name) 
        console.log(this.itemParams);
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
      }, error => {
        console.log(error);
      }
      );
  }
}
