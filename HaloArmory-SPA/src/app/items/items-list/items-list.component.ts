import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/_models/_services/item.service';
import { Item } from 'src/app/_models/Item';
import { ActivatedRoute } from '@angular/router';
import { Pagination, PaginatedResult } from 'src/app/_models/pagination';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';



// tslint:disable-next-line: no-debugger

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  pagination: Pagination;
  items: Item[];
  itemParams: any = {};
  public types = [{ name: 'Armour', selected: true }, { name: 'Weapon', selected: true }];

  form: FormGroup;


  // TODO: Rewright this! Use angular form instead!
  // https://netbasal.com/handling-multiple-checkboxes-in-angular-forms-57eb8e846d21


  constructor(private service: ItemService, private roots: ActivatedRoute,
    private fb: FormBuilder) {
    this.form = this.fb.group({
      types: this.buildTypes()
    });
  }

  get formTypes() {
    return this.form.get('types');
  }


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

  buildTypes() {
    const arr = this.types.map(type => {
      return this.fb.control(type.selected);
    });
    return this.fb.array(arr);
  }

  resetFilters() {
    this.itemParams.minPrice = 0;
    this.itemParams.maxPrice = 9999;
    console.log(this.itemParams);
    this.loadItems();
  }


  loadItems() {
    const formTypes = this.form.value.types.map((selected, i) => {
      return {
        name: this.types[i].name,
        selected
      };
    });
    this.itemParams.types = formTypes.filter(type => type.selected).map(type => type.name);
    console.log(this.itemParams);
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