import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Wines } from '../wines-list/Wines';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

  @Input ()
  quantity!: number;

  @Input ()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  upQuantity():void{
    if(this.quantity<this.max){
    this.quantity++;
    this.quantityChange.emit( this.quantity);
    }else{
      this.maxReached.emit("Reached the maximum in stock")
    };
  }
  
  downQuantity():void{
    if(this.quantity>0)
    this.quantity--;
    this.quantityChange.emit( this.quantity);
  }
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = Number(input.value);
  
    if (isNaN(value) || value < 0) {
      value = 0;
    }
  
    if (value > this.max) {
      value = this.max;
      this.maxReached.emit("Reached the maximum in stock");
    }
  
    this.quantity = value;
    this.quantityChange.emit(this.quantity);
  }
  
}
