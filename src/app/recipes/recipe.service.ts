import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesComponent } from './recipes.component';

@Injectable()
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Lamb Stake",
      "This is simply a test",
      "https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d"
    )
  ];

  getRecipe() {
    return this.recipes.slice();
  }
}
