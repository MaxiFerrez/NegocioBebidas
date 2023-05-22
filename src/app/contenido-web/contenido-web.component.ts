import { Component,Input,OnInit } from '@angular/core';
//import { FormInicialComponent } from '../form-inicial/form-inicial.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contenido-web',
  templateUrl: './contenido-web.component.html',
  styleUrls: ['./contenido-web.component.css']
})

export class ContenidoWebComponent {
  bebidas = ['uno','dos','tres'];
  datoRecibido: number;
  //miVariableBooleana: boolean;
  
  constructor(private route: ActivatedRoute) {}
  //@Input() mayor_de_edad:boolean;

   ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.datoRecibido = params['dato'];



    /* this.route.paramMap.subscribe(params => {
       this.miVariableBooleana = Boolean(params.get('variable'));
       this.miVariableBooleana = this.miVariableBooleana; */
      // Utiliza el valor en el componente de destino según tus necesidades
    });
  } 


} 
