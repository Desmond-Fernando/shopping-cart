import {EventEmitter, Injectable } from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();
  // recipeSelected = new EventEmitter<Recipe>();
  // recipeSelected = new Subject<Recipe>();

  // private recipes: Recipe[] = [
  //   new Recipe('A Test Recipe',
  //     'This is simple test',
  //     'https://steamykitchen.com/wp-content/uploads/2012/08/chinese-broccoli-beef-recipe-9402.jpg',
  //     [
  //       new Ingredient('Apples', 1),
  //       new Ingredient('Tomatoes', 20)
  //     ]),
  //   new Recipe('A Banana pudding',
  //     'This is different babana pudding',
  //     'https://hips.hearstapps.com/del.h-cdn.co/assets/18/10/1520794644-640-perfectbananapudding3-1.jpg',
  //     [
  //       new Ingredient('Buns', 5),
  //       new Ingredient('Meat', 10)
  //     ])
  // ];

  private recipes: Recipe[] = [];

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

  //=========

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
