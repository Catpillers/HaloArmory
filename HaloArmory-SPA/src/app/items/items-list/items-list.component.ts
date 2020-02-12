import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/_models/_services/item.service';
import { Item } from 'src/app/_models/Item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items: Item[];

  constructor(private service: ItemService) { }

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.service.getItems().subscribe((items: Item[]) => {
      this.items = items;
    }, error => {
      console.log(error);
    }
    );
  }
}
