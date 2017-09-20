import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes() {
    return this.http.post('http://localhost:8765/api/setData',
      this.recipeService.getRecipes());
  }

  getRecipes() {
    this.http.get('http://localhost:8765/api/getData')
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
              this.recipeService.setResipes(recipes);
      }
    );
  }
}
