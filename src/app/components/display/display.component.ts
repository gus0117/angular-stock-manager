import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  total: number = 0;

  constructor(private itemService: ItemsService) { 
    this.getTotal();
  }

  ngOnInit(): void {
  }

  getTotal(){
    this.total = 0;
    let items = this.itemService.getItems();
    items.forEach( item => this.total += item.price)
  }

}
