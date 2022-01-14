import { Injectable } from '@angular/core';
import { paquete } from '../Model/paquete';
@Injectable({
  providedIn: 'root'
})
export class PaquetesService {
  public paquetes: Array <Paquete>;

  constructor() {
    this.paquetes =[
      // new Paquete('AMANECER EN MACHUPICCHU 4 DIAS / 3 NOCHES','5','incluye-1','no incluye-1', '150')
      // new Paquete('AMANECER EN MACHUPICCHU 4 DIAS / 3 NOCHES','5','incluye-1','no incluye-1', '150')
      // new Paquete('AMANECER EN MACHUPICCHU 4 DIAS / 3 NOCHES','5','incluye-1','no incluye-1', '150')
      // new Paquete('AMANECER EN MACHUPICCHU 4 DIAS / 3 NOCHES','5','incluye-1','no incluye-1', '150')
    ];
   }
   getPaquete(): Array<Paquete>{
     return this.paquetes;
   };
}
