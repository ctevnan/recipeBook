import { Injectable } from '@angular/core';

import { Recipe } from "./recipe";
import { Ingredient } from "../shared";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.giftforyou.nl/content/locatie/biggest/eifelschnitzel.png', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
      ]),
    new Recipe('Summer Salad', 'Okay', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];
  
  constructor() {}

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}