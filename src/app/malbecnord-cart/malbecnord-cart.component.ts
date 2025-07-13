import { Component, OnInit } from '@angular/core';
import {WineCartService} from '../wine-cart.service';
import { WineDataService } from '../wine-data.service'; 
import { Wines } from '../wines-list/Wines';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-malbecnord-cart',
  standalone: false,
  templateUrl: './malbecnord-cart.component.html',
  styleUrl: './malbecnord-cart.component.scss'
})
export class MalbecnordCartComponent implements OnInit {
  wines: Wines[] = [];
  cartList: Wines[] = [];

  constructor(  
    private cart:WineCartService, 
    private wineData: WineDataService,
    private cdr: ChangeDetectorRef){
   }

   ngOnInit(): void {
    this.wineData.getAll().subscribe((wines: Wines[]) => this.wines = wines);
    this.cart.cartList.subscribe((list) => {
      this.cartList = list;
    });

 }


}

