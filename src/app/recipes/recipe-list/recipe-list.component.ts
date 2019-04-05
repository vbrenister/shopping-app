import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}

  onSelectedRecipe(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
