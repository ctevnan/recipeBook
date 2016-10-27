import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: 'module.id',
  selector: 'rb-header',
  templateUrl: 'header.component.html',
  directives: [DropdownDirective]
})
export class HeaderComponent implements OnInit {
  
  constructor() {}

  ngOnInit(){
  }
}