import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.css']
})
export class FormItemComponent implements OnInit {

  newItem: Item;
  constructor(private itemService: ItemsService) {
    this.newItem = new Item();
   }

  ngOnInit(): void {
  }

  addItem():void{
    this.itemService.addItem(this.newItem);
    this.resetItem();
  }

  resetItem(){
    this.newItem = new Item();
  }
}
