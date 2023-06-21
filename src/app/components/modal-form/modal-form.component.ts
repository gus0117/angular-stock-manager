import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {

  item: Item;
  constructor(private itemService: ItemsService) {
    this.item = new Item();
  }

  ngOnInit(): void {
  }

  @HostListener('shown.bs.modal') onModalShow(): void {
    this.getItem();
  }

  getItem(){
    this.item = this.itemService.item;
  }

  addUpdateItem():void{
    if(this.itemService.item.id == null){
      this.itemService.addItem(this.itemService.item);
    }
    else{
      this.itemService.editItem(this.itemService.item);
    }

    this.itemService.item = new Item();

  }

  resetItem():void{
    this.item = new Item();
  }

}
