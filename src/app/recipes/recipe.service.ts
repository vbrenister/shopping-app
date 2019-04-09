import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesComponent } from './recipes.component';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Lamb Stake",
      "This is simply a test",
      "https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d",
      [
        new Ingredient('Meat', 2),
        new Ingredient('Bread', 3)
      ]
    ),
    new Recipe(
      "Beef Stake",
      "This is delicious beef stake",
      "https://www.maxpixel.net/static/photo/1x/Steak-Amigo-Beef-2863826.jpg",
      [
        new Ingredient('Meat', 2),
        new Ingredient('Bread', 3)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
