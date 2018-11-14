import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Name test', 'Desc', 'https://cdn.pixabay.com/photo/2016/02/19/11/53/pug-1210025_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
