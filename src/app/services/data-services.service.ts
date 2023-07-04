import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {
  productos: Productos[] = [];
  constructor(private http: HttpClient) { }

  async getDataSale(): Promise<Productos[]>{
    return new Promise( (resolve,reject) => {
      this.http.get<Productos[]>('/assets/data/data.json')
                   .subscribe( x => {                    
                     return resolve(x);
                   });
      
    })
    
  }
}
