import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor() {}

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'pizza',
      'recipe for pizza',
      'https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg'
    ),

    new Recipe(
      'kebab',
      'delicious Kebab',
      'https://bosphor-kebab.pl/wp-content/uploads/2020/05/AdobeStock_315083843-scaled.jpeg'
    ),

    new Recipe(
      'Chicken salat',
      'healthy salat',
      'https://inquiringchef.com/wp-content/uploads/2020/01/Recipe-13.jpg'
    ),

    new Recipe(
      'roastbeef',
      'recipe for beef',
      'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/2120FA3B-2A57-4881-BE45-8A54DDE4ACB3/Derivates/B8AF2748-D20E-4FC9-9AA1-E171F007240E.jpg'
    ),
  ];

  onRecipeSelected(recipeSelected: Recipe) {
    this.recipeWasSelected.emit(recipeSelected);
  }

  ngOnInit(): void {}
}
