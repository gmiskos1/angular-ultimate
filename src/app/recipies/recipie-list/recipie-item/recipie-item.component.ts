import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Recipie } from '../../recipie.model';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {

  @Input() recipe: Recipie;
  @Input() index:number;

  //change communication with service(bellow)
  //@Output() recipeSelected = new EventEmitter<void>();
  
  //constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }

  // onSelected(){
  //   //this.recipeSelected.emit(); replaced from service communiction
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
