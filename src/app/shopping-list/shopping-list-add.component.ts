import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: 'module.id',
  selector: 'rb-shopping-list-add',
  templateUrl: 'shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit {
  isAdd = true;
  
  constructor() {}

  ngOnInit() {
  }
}