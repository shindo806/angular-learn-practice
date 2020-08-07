import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeDetail: Recipe;
  @Output() recipeDetailView = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit() {}

  viewRecipeDetail(recipeItem: Recipe) {
    this.recipeDetailView.emit(recipeItem);
  }
}
