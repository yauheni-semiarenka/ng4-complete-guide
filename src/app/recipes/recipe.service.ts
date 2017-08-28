import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'http://www.seriouseats.com/images/' +
          '2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
        new Recipe('Pizza Recipe', 'This is simply a test', 'http://www.simplyrecipes.com/wp-content/uploads/' +
          '2007/01/homemade-pizza-horiz-a-1200.jpg')
      ];

    getRecipes() {
        //Just return a copy of recipes array
        return this.recipes.slice();
    }
}