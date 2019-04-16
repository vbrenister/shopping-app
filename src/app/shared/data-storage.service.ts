import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

const recipesURL = 'https://udemy-tt-app.firebaseio.com/recipes.json';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private httpClient: HttpClient,
              private recipesService: RecipeService,
              private authService: AuthService) { }

  saveRecipes() {
    return this.httpClient.put<any>(recipesURL, this.recipesService.getRecipes());
  }

  fetchRecipes() {
    const token = this.authService.getToken();
    return this.httpClient.get<Recipe[]>(recipesURL + '?auth=' + token);
  }
}
