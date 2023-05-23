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
    { id: 1, nombre: 'Licor', permite: 0, img:"w0.peakpx.com/wallpaper/823/850/HD-wallpaper-coco-cola-beverage-bomb-comic-drink-funny-icecek-joke-kola-potable.jpg"},
    { id: 2, nombre: 'Fernet', permite: 0, img:"w0.peakpx.com/wallpaper/823/850/HD-wallpaper-coco-cola-beverage-bomb-comic-drink-funny-icecek-joke-kola-potable.jpg"},
    { id: 3, nombre: 'Coca-Cola', permite: 1, img:"w0.peakpx.com/wallpaper/823/850/HD-wallpaper-coco-cola-beverage-bomb-comic-drink-funny-icecek-joke-kola-potable.jpg"},
    { id: 4, nombre: 'Jugo', permite: 1, img:"w0.peakpx.com/wallpaper/823/850/HD-wallpaper-coco-cola-beverage-bomb-comic-drink-funny-icecek-joke-kola-potable.jpg"},
    { id: 5, nombre: 'Votka', permite: 0, img:"w0.peakpx.com/wallpaper/823/850/HD-wallpaper-coco-cola-beverage-bomb-comic-drink-funny-icecek-joke-kola-potable.jpg"},
    { id: 6, nombre: 'Agua Tonica', permite: 1, img:"w0.peakpx.com/wallpaper/823/850/HD-wallpaper-coco-cola-beverage-bomb-comic-drink-funny-icecek-joke-kola-potable.jpg"},
  ];

  constructor(private route: ActivatedRoute) {}

   ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.datoRecibido = params['dato'];
    });
  } 


} 
