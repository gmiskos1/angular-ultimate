import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {
  //@Input() recipe: Recipie;
  recipe:Recipie;
  id:number;

  constructor(
      private recipeService: RecipeService,
      private route:ActivatedRoute,
      private router:Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    //this.router.navigate(['edit'], {relativeTo:this.route});
    this.router.navigate(['../', this.id, 'edit'], {relativeTo:this.route});
  }

}
