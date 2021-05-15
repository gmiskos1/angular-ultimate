import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipie } from './recipie.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  //providers: [RecipeService] // if provided here. When we are going to shoppling list and get back here. The list is initiate again. so provide it in app module
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
