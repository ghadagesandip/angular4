import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Dal Rice', 'Combination of dal and rice', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1074500_11.jpg?itok=IwEifJO_'),
    new Recipe('Modak', 'Modak used as prasad in Ganesh uthsav', 'https://i.ytimg.com/vi/e_RZSfwlEOE/maxresdefault.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

}
