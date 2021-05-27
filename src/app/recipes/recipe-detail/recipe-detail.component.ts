import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  public toggleDropdown: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  onIsShown(toggle: boolean) {
    this.toggleDropdown = toggle;
  }
}
