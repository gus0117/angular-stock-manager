import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  total: number = 0;
  listItems: Array<Item>;

  constructor( private itemsServices: ItemsService) { 
    this.listItems = new Array<Item>();
    this.getItems();
  }

  ngOnInit(): void {
  }

  public addItem(item: Item){
    this.itemsServices.addItem(item);
  }

  public getItems(){
    this.listItems = new Array<Item>();
    this.listItems = this.itemsServices.getItems();
    console.log(this.listItems);
  }

  public deleteItem(item: Item){
    this.itemsServices.deleteItem(item);
  }
}
