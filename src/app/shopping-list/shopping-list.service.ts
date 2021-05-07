import { ElementRef, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/Ingredient.model";

export class ShoppingListService{
      
      ingredientsChanged = new EventEmitter<Ingredient[]>();

      private ingredients:Ingredient[] = [
            new Ingredient('Apples', 5),
            new Ingredient('Tomatoes', 10)
      ];

      getIngredients(){
            return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient, nameInput:ElementRef, amountInput:ElementRef){
            this.ingredients.push(ingredient);
            this.ingredientsChanged.emit(this.ingredients.slice()); // so to have always the right ingredients array
            nameInput.nativeElement.value = '';
            amountInput.nativeElement.value = '';
      }

      addIngredients(ingredients:Ingredient[]){
            this.ingredients.push(...ingredients)
            this.ingredientsChanged.emit(this.ingredients.slice()); // so to have always the right ingredients array
      }
}