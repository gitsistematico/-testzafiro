import { Component, OnInit } from '@angular/core';
import { ShoppingCarService } from '../../services/shopping-car.service';
import { Productos } from 'src/app/interfaces/producto';
import { HomePage } from '../home.page';
@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.scss'],
})
export class ShoppingCarComponent  implements OnInit {

  backComponent =  HomePage;
  carShopping : Productos[] = [];
  totalPay:number  = 0;
  constructor(
    public ShoppingCarService: ShoppingCarService,
  ) { }

  async ngOnInit() {
    await this.ShoppingCarService.shoppingCarProduct$.subscribe( pr => {        
      this.carShopping = pr;
    }) 
    this.calculateTotal();
  }

  async removeProduc(producto:Productos){
    let removeProd = []
    if (this.carShopping.length == 1) {
       this.carShopping = [];
    } else {
      removeProd = this.carShopping.filter( x => {        
        return x.id != producto.id;
      })
      this.carShopping = removeProd;      
    }
    await this.ShoppingCarService.shoppingCarProduct$.next(this.carShopping);    
    this.calculateTotal();
  }
  calculateTotal(){
    this.totalPay = 0;
    this.carShopping.forEach( pays => {
      this.totalPay += pays.precio;
    })
  }

}
