import { Component } from '@angular/core';
import { Wines } from './Wines';
import {WineCartService} from '../wine-cart.service';
import { WineDataService } from '../wine-data.service'; 
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-wines-list',
  standalone: false,
  templateUrl: './wines-list.component.html',
  styleUrl: './wines-list.component.scss'
})
export class WinesListComponent{
   wines: Wines[] = [];

 constructor(
  private cart:WineCartService, 
  private wineData: WineDataService,
  private cdr: ChangeDetectorRef){
 }

 ngOnInit():void{
  this.wineData.getAll().subscribe((wines: Wines[]) => this.wines = wines);


 }

  addToCart(wine: Wines):void{
    this.cart.addToCart(wine);
    wine.stock -= wine.quantity;
    wine.quantity=0;
    this.cdr.detectChanges();
   
  }

  maxReached(m:string){
    alert(m);
  }



}
  

