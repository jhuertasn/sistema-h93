export class ListarExamen { 

    examenId: number
    titulo: string
    descripcion:string
    puntosMaximos:string;
    numeroDePreguntas:string;
    activo:boolean 
    categoria?: Categoria 
  }
 
  export class Categoria { 
     categoriaId?: number
     titulo?: string;
     descripcion?: string;
     constructor(obj?: any) { 
         this.categoriaId = (obj && obj.categoriaId) ||  '';
         this.titulo = (obj && obj.titulo)  || '';
         this.descripcion = (obj && obj.descripcion)  || '';
     }
  }