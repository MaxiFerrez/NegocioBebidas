import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-form-inicial',
  templateUrl: './form-inicial.component.html',
  styleUrls: ['./form-inicial.component.css']
})
export class FormInicialComponent {
  title = 'Almacen de Bebidas';
  dato: number;
  public mayor_de_edad = false;
  public fechaActual: string;
  constructor(private router: Router) {
  const today = new Date();
  this.fechaActual = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
}

public calcularDiferencia(fechanacimiento:HTMLInputElement): void {
  const fechaIngresada = new Date(fechanacimiento.value);
  const fechaActual = new Date(this.fechaActual);

  const diffEnMS = Math.abs(fechaActual.getTime() - fechaIngresada.getTime());
  const diffEnAnios = Math.floor(diffEnMS / (1000 * 60 * 60 * 24 * 365));

  if (diffEnAnios >= 18) {
    this.dato = 1;//Verdadero
  } else {
    this.dato = 0;//Falso
  }
  //SE ENVIA AL NUEVO COMPONENTE LA VARIABLE DEL RESULTADO
  this.router.navigate(['contenido'],{ queryParams: { dato: this.dato } });
}
}