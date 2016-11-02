import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Recipe } from '../recipe';
import { ShoppingListService } from "../../shopping-list";

@Component({
  moduleId: 'module.id',
  selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  
  constructor(private sls: ShoppingListService, private route: ActivatedRoute) {}

  ngOnInit() {
  }

  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }
}