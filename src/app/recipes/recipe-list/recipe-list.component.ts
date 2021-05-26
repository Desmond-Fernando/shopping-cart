import {EventEmitter, Output} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simple test',
      'https://steamykitchen.com/wp-content/uploads/2012/08/chinese-broccoli-beef-recipe-9402.jpg'),
    new Recipe('A Banana pudding',
      'This is different babana pudding',
      'https://hips.hearstapps.com/del.h-cdn.co/assets/18/10/1520794644-640-perfectbananapudding3-1.jpg')
  ];

  @Output() recipeWasselected = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasselected.emit(recipe);
  }
}
