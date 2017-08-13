import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://www.seriouseats.com/images/' +
      '2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
    new Recipe('Pizza Recipe', 'This is simply a test', 'http://www.simplyrecipes.com/wp-content/uploads/' +
      '2007/01/homemade-pizza-horiz-a-1200.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
