import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Lamb Stake',
      'This is simply a test',
      'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Bread', 3)
      ]
    ),
    new Recipe(
      'Beef Stake',
      'This is delicious beef stake',
      'https://www.maxpixel.net/static/photo/1x/Steak-Amigo-Beef-2863826.jpg',
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

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.notifyChanges();
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.notifyChanges();
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.notifyChanges();
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.notifyChanges();
  }

  private notifyChanges() {
    this.recipesChanged.next(this.recipes);
  }
}
