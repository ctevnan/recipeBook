import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  moduleId: 'module.id',
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/slides/WienerSchnitzel.jpg', []),
    new Recipe('Summer Salad', 'Okay', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipe = new Recipe('Dummy', 'Dummy', 'http://r.fod4.com/c=sq/s=w1000,pd1/o=80/http://p.fod4.com/p/media/8c1ee8e0d4/CRiCCT2XSpGY61GR7GCE_aKMAf3MuS3SMxxkXogUF_d2-1.jpg');
  
  constructor() {}

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe); 
  }
}