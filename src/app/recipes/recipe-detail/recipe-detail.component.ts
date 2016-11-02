import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { Recipe } from '../recipe';
import { ShoppingListService } from "../../shopping-list";
import { RecipeService } from "../recipe.service";

@Component({
  moduleId: 'module.id',
  selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private recipeIndex: number;
  selectedRecipe: Recipe;
  
  constructor(private sls: ShoppingListService,
              private route: ActivatedRoute,
              private recipesService: RecipeService,
              private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipesService.getRecipe(this.recipeIndex);
      }
    );
  }

  onEdit() {

  }

  onDelete() {

  }

  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}