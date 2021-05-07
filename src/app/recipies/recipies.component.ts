import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipie } from './recipie.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers: [RecipeService]
})
export class RecipiesComponent implements OnInit {
  selectedRecipe: Recipie;

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe:Recipie) =>{
        this.selectedRecipe = recipe;
      }
    );
  }

}
