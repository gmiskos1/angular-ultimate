import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') nameInputRef:ElementRef;
  // @ViewChild('amountInput') amountInput:ElementRef;
  // = new EventEmitter<Ingredient>();
  @ViewChild('f') slForm:NgForm;
  subEdit:Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem:Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }
  
  ngOnInit(): void {
    this.subEdit = this.shoppingListService.startedEditing.subscribe(
      (index:number)=>{
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        })
      }
    );
  }

  onSubmit(form:NgForm){
    
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode)
    {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    }else{
      this.shoppingListService.addIngredient(newIngredient);
    }    
    this.editMode = false;
    this.slForm.reset();
    //old approach
    //const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInput.nativeElement.value);
    //this.ingredientAdded.emit(newIngredient);
    //this.shoppingListService.addIngredient(newIngredient, this.nameInputRef, this.amountInput)
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subEdit.unsubscribe();
  }

}
