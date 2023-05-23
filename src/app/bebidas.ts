export class Bebida {
    id: number;
    nombre: string;
    permite: number;
    img:string

    constructor(id:number,nombre:string,permite:number,img:string){
      this.id =id;
      this.nombre = nombre;
      this.permite = permite;
      this.img = img;
    }
  }
 