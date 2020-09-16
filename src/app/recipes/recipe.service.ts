import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "McDonald's Big Mac",
      'Burger 2 lớp bò, phô-mai, rau tươi và sốt Big Mac.',
      'https://i.insider.com/5f16cd34988ee335ae440656?width=900&format=jpeg&auto=webp',
      [new Ingredient('buns', 2), new Ingredient('beef meat', 1)]
    ),
    new Recipe(
      'King Burger Whopper',
      'Burger 2 miếng bò khoai giòn tràn phô mai',
      'https://www.thesun.co.uk/wp-content/uploads/2019/12/DD-COMP-WHOPPER.jpg?w=620',
      [new Ingredient('buns', 3), new Ingredient('beef meat', 2)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice(); // clone the recipes array
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}
