import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bebida } from '../bebidas';

@Component({
  selector: 'app-contenido-web',
  templateUrl: './contenido-web.component.html',
  styleUrls: ['./contenido-web.component.css']
})

export class ContenidoWebComponent {
   
  datoRecibido: number;

  lista: Bebida[] = [
    new Bebida(1 ,'Licor' , 1,"https://m.media-amazon.com/images/I/61wXI+qSnRL._AC_SX679_.jpg"),
    new Bebida(2 ,'Fernet' , 1, "https://www.publimetro.cl/resizer/E2u0vuYhG-jKoRLE-TGIeDjk-K8=/800x0/filters:format(jpg):quality(70):focal(138x62:148x72)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/DXF3IXJRFRB6JOI67HU4C6XP3Y.jpg"),
    new Bebida(3 ,'Coca-Cola' , 0,"https://st2.depositphotos.com/1029150/8188/i/450/depositphotos_81883680-stock-photo-coca-cola-drinks.jpg"),
    new Bebida(4 ,'Jugo' , 0,"https://www.eurekaciencia.com/wp-content/uploads/2019/06/aroma-beverage-blur-96974.jpg"),
    
  ];

  constructor(private route: ActivatedRoute) {}

   ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.datoRecibido = params['dato'];
    });
  } 


} 
