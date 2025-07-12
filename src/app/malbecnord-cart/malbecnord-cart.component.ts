import { Component, OnInit } from '@angular/core';
import {WineCartService} from '../wine-cart.service';
import { Wines } from '../wines-list/Wines';
import { Observable } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-malbecnord-cart',
  standalone: false,
  templateUrl: './malbecnord-cart.component.html',
  styleUrl: './malbecnord-cart.component.scss'
})
export class MalbecnordCartComponent implements OnInit {
  wines: Wines[] = [];
  cartList$: Observable<Wines[]>;

  constructor(private cart: WineCartService,
    private cdr: ChangeDetectorRef
  ) {
    this.cartList$ = cart.cartList.asObservable();
    {
    }
  }
  ngOnInit(): void {}

}

