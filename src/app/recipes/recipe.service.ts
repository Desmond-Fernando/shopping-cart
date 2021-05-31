import {EventEmitter, Injectable } from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simple test',
      'https://steamykitchen.com/wp-content/uploads/2012/08/chinese-broccoli-beef-recipe-9402.jpg',
      [
        new Ingredient('Apples', 1),
        new Ingredient('Tomatoes', 20)
      ]),
    new Recipe('A Banana pudding',
      'This is different babana pudding',
      'https://hips.hearstapps.com/del.h-cdn.co/assets/18/10/1520794644-640-perfectbananapudding3-1.jpg',
      [
        new Ingredient('Buns', 5),
        new Ingredient('Meat', 10)
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
