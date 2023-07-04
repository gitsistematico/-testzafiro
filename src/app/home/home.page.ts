import { Component, OnInit } from '@angular/core';
import { DataServicesService } from '../services/data-services.service';
import { ShoppingCarService } from '../services/shopping-car.service';
import { Productos } from '../interfaces/producto';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  productos: Productos[] = [];
  shoppingcardProductos: Productos[] = [];
  constructor(
    public ShoppingCarService: ShoppingCarService,
    public alertController: AlertController,
    private dataSer: DataServicesService,    
    private router: Router
    ) {
      this.ShoppingCarService.shoppingCarProduct$.subscribe( pr => {      
        this.shoppingcardProductos = [] ;
        if ( pr.length > 0) {          
          this.shoppingcardProductos = pr ;
        }
      })      
  }
  
  async ngOnInit(){        
    await this.dataSer.getDataSale().then( x => this.productos = x);    
  }

  async addShopping( producto : Productos ){
    const produExists = this.shoppingcardProductos.find( x => {
      return x.id == producto.id;
    })
    
    if (!produExists) {      
      this.shoppingcardProductos.push(producto)      
      this.ShoppingCarService.shoppingCarProduct$.next(this.shoppingcardProductos);    
    }else{
      const alert = await this.alertController.create({
        header: 'Alert',        
        message: 'This product has been added!',
        buttons: ['OK'],
      });
  
      await alert.present();
    }
  }
  
  goShoppingCar(){
    this.router.navigateByUrl('/home/shoppingCar');
  }
}
