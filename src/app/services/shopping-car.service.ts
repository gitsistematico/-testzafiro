import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Productos } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCarService {

  shoppingCarProduct$: BehaviorSubject<Productos[]> = new BehaviorSubject<Productos[]>([]);  
  constructor() { }
  
}
