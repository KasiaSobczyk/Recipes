import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test Recipe 1', 'This a simply test', 'https://cdn.pixabay.com/photo/2016/11/23/14/49/alcohol-1853327_960_720.jpg'),
    new Recipe('A test Recipe 2', 'xd recipe ', 'https://cdn.pixabay.com/photo/2017/01/21/21/15/craft-beer-1998293_960_720.jpg'),
    new Recipe('A test Recipe 3', 'This a simply test 2', 'https://cdn.pixabay.com/photo/2017/01/09/02/02/pink-wine-1964458_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
