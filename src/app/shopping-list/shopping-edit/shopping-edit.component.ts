import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingredientNameInput: ElementRef;
  @ViewChild('amountInput') ingredientAmountInput: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    const ingName = this.ingredientNameInput.nativeElement.value;
    const ingAmount = this.ingredientAmountInput.nativeElement.value;
    const addedIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(addedIngredient);
  }

}
