import { Component,Input } from '@angular/core';
import { Bebida } from '../bebidas';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  
 lista1: Bebida[] = [
  new Bebida(1 ,'Licor' , 1,"https://m.media-amazon.com/images/I/61wXI+qSnRL._AC_SX679_.jpg"),
  new Bebida(2 ,'Fernet' , 1, "https://www.publimetro.cl/resizer/E2u0vuYhG-jKoRLE-TGIeDjk-K8=/800x0/filters:format(jpg):quality(70):focal(138x62:148x72)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/DXF3IXJRFRB6JOI67HU4C6XP3Y.jpg"),
  new Bebida(3 ,'Coca-Cola' , 0,"https://st2.depositphotos.com/1029150/8188/i/450/depositphotos_81883680-stock-photo-coca-cola-drinks.jpg"),
  new Bebida(4 ,'Jugo' , 0,"https://www.eurekaciencia.com/wp-content/uploads/2019/06/aroma-beverage-blur-96974.jpg"),
 
];
  public idInput:number;
  nombreInput:string;
  permiteInput:number;
  imgInput:string;

  eliminaInput:number;

  agregar(){
     let bebida1 = new Bebida (this.idInput,this.nombreInput,this.permiteInput,this.imgInput);
    this.lista1.push(bebida1); 
  }
  eliminar(dato:number){

    this.lista1.splice(dato,1);
  }

}
