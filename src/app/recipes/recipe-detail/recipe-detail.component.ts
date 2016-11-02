import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { Recipe } from '../recipe';
import { ShoppingListService } from "../../shopping-list";

@Component({
  moduleId: 'module.id',
  selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {
  private subscription: Subscription;
  private recipeIndex: number;
  selectedRecipe: Recipe;
  
  constructor(private sls: ShoppingListService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex = params['id'];
      }
    );
  }

  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }
}