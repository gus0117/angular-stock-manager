import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item!: Item;
  @Output() deleteItemEvent = new EventEmitter<Item>();

  constructor() { 

  }

  ngOnInit(): void {
  }
  
  //Tal vez sea mejor que el item llame al service eliminar
  deleteItem(){
    this.deleteItemEvent.emit(this.item);
  }

  updateItem(){
    console.log("update")
  }
}
