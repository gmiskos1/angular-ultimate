import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/Ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipie } from "./recipie.model";

@Injectable()
export class RecipeService{
      recipeSelected = new EventEmitter<Recipie>();
      
      private recipies:Recipie[] = [
      new Recipie(
            'Testing Recipie 1', 
            'Just a simply test 1', 'https://snappygoat.com/b/8aeb0835d905c355fe8b623b012cdce231b44eb1',
            [
                  new Ingredient('Meat', 1),
                  new Ingredient('French Fries', 10)
            ]
            ),
      new Recipie(
            'Testing Recipie 2', 
            'Just a simply test 2', 
            'https://snappygoat.com/b/8aeb0835d905c355fe8b623b012cdce231b44eb1',
            [
                  new Ingredient('Bread', 2),
                  new Ingredient('Cheese', 10)
            ])
      ];

      constructor(private shoppingListService : ShoppingListService){}

      getRecipies(){
            return this.recipies.slice();//return a copy
      }

      getRecipe(index:number){
            return this.recipies[index]
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
            this.shoppingListService.addIngredients(ingredients);
      }
}