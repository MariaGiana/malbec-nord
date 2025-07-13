import { Injectable } from '@angular/core';
import { Wines } from './wines-list/Wines';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

//maneja la logica del carrito
export class WineCartService {
  private _cartList: Wines[]=[];
  cartList: BehaviorSubject <Wines[]> = new BehaviorSubject (this._cartList);

  
 constructor(){}

  addToCart(wine:Wines){
    let item = this._cartList.find(v1 => v1.wineName === wine.wineName);


    if(!item){ wine.stock -= wine.quantity;
      this._cartList.push({ ... wine});
     
    }else{
      item.quantity+=wine.quantity;
      
    }
    this.cartList.next(this._cartList);
    
    }

    removeFromCart(wine: Wines): void {
      this._cartList = this._cartList.filter(item => item.wineName !== wine.wineName);
      this.cartList.next([...this._cartList]);
      console.log("stock disponible: " , wine.stock);
      
      
    }
  }


