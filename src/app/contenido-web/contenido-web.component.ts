import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contenido-web',
  templateUrl: './contenido-web.component.html',
  styleUrls: ['./contenido-web.component.css']
})

export class ContenidoWebComponent {
  bebidas = ['uno','dos','tres'];
  datoRecibido: number;

  
  constructor(private route: ActivatedRoute) {}
   ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.datoRecibido = params['dato'];
    });
  } 


} 
