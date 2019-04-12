import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

const recipesURL = 'https://udemy-tt-app.firebaseio.com/recipes.json';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private httpClient: HttpClient, private recipesService: RecipeService) { }

  saveRecipes() {
    return this.httpClient.put<any>(recipesURL, this.recipesService.getRecipes());
  }

  fetchRecipes() {
    return this.httpClient.get<Recipe[]>(recipesURL);
  }
}
