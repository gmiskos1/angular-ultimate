import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from '../recipe.service';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit, OnDestroy {
  //@Output() recipeWasSelected = new EventEmitter<Recipie>(); replaced from service cross-component communication
  recipies : Recipie[];
  subscription:Subscription;

  constructor(private recipeService:RecipeService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes:Recipie[]) =>{
        this.recipies = recipes;
      }
    )
    this.recipies = this.recipeService.getRecipies();
  }

  //replaced from service cross-component communication
  // onRecipeSelected(recipe: Recipie){
  //     this.recipeWasSelected.emit(recipe);
  // }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo:this.route})
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onDeleteAll(){
    this.recipeService.deleteAllRecipes();
    this.router.navigate(['/recipes']);
  }
}
