import { Injectable } from '@angular/core';
import { Item } from '../models/item';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  listItems: Array<Item>;
  storageKey: string = 'listItems'

  constructor() { 
    this.listItems = new Array<Item>();
  }

  getItems(): Array<Item>{
    let result = localStorage.getItem(this.storageKey);
    if(result != null){
      this.listItems = JSON.parse(result);
    }
    return this.listItems;
  }

  addItem(item: Item): void {
    item.id = this.generarId();
    this.listItems.push(item);
    localStorage.setItem(this.storageKey, JSON.stringify(this.listItems));
  }

  editItem(item: Item): void{
    let index = this.listItems.findIndex(i => i.id === item.id);
    if(index > -1){
      this.listItems.splice(index, 1, item);
      localStorage.setItem(this.storageKey, JSON.stringify(this.listItems));
    }
  }

  deleteItem(item: Item): void{
    this.listItems = this.listItems.filter( i => i.id !== item.id);
    localStorage.setItem(this.storageKey, JSON.stringify(this.listItems));
  }
  
  generarId(): string{
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }
}
