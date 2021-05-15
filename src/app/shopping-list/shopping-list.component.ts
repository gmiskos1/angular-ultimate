import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igSubscription: Subscription;

  constructor(private shoppigListService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppigListService.getIngredients();
    this.igSubscription = this.shoppigListService.ingredientsChanged.subscribe((ingredients:Ingredient[])=>{
      this.ingredients = ingredients;
    })
  }

  onEditItem(index:number){
    //pass index to edit item with subject in service.
    this.shoppigListService.startedEditing.next(index);
  }

  ngOnDestroy(){
    this.igSubscription.unsubscribe();
  }
}
