import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Bear', 11),
    new Ingredient('Tonic', 4),
    new Ingredient('Strawberry', 22),
    new Ingredient('Wine', 5),
    new Ingredient('Orange juice', 1)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIgredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
