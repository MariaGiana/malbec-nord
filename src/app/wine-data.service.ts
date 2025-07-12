import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import { Wines } from './wines-list/Wines';
import { tap } from 'rxjs/operators';


const URL='https://684c3bfced2578be881e2b79.mockapi.io/wines/wine';

@Injectable({
  providedIn: 'root'
})
export class WineDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Wines[]>{
    return this.http.get<Wines[]>(URL)
    .pipe(
      tap( (wine:Wines[]) => wine.forEach (wine => wine.quantity=0))
    )
  }

  public getById(id: string): Observable<Wines> {
    return this.http.get<Wines>(`${URL}/${id}`);
  }
}
