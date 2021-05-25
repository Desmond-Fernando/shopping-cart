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
    new Recipe('A Test Recipe2',
      'This is simple test2',
      'https://steamykitchen.com/wp-content/uploads/2012/08/chinese-broccoli-beef-recipe-9402.jpg')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
