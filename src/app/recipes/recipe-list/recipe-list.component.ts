import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  moduleId: 'module.id',
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'http://r.fod4.com/c=sq/s=w1000,pd1/o=80/http://p.fod4.com/p/media/8c1ee8e0d4/CRiCCT2XSpGY61GR7GCE_aKMAf3MuS3SMxxkXogUF_d2-1.jpg');
  
  constructor() {}

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    
  }
}