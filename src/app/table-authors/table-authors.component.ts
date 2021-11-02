import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { AuthorService } from '../authors.service';
import { FormGroup, FormControl } from '@angular/forms';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
declare var $:any; 

@Component({
  selector: 'app-table-authors',
  templateUrl: './table-authors.component.html',
  styleUrls: ['./table-authors.component.css']
})
export class TableAuthorsComponent implements OnInit {

  listaAuthors: Author[];

  authorsCrearForm = new FormGroup({
    nombre: new FormControl(),
    apellido: new FormControl(),
    cargo: new FormControl(),
    pais: new FormControl(),
    descripcion: new FormControl(),
    correo: new FormControl()
  })

  nuevoAuthor: any = {}
  faPen = faPen; 

  authorElegido:Author;

  authorsActualizarForm = new FormGroup({
    id_usuario: new FormControl(),
    nombre: new FormControl(),
    apellido: new FormControl(),
    cargo: new FormControl(),
    pais: new FormControl(),
    descripcion: new FormControl(),
    correo: new FormControl()
  })

  faTimes = faTimes;

  constructor(private authorsService: AuthorService) { }

  ngOnInit(): void {
    this.leerAuthors()
  }

  leerAuthors(): void {
    this.authorsService.authorSelect().subscribe(
      (res: Author[]) => {
        this.listaAuthors = res; 
        console.log(res)
      }
    )
  }

  crearAuthors(values): void {
    this.authorsService.authorInsert(values.nombre,values.apellido,values.cargo,values.pais,values.descripcion,values.correo).subscribe(
      (res) => {
        console.log(res);
        this.nuevoAuthor = {
          id_usuario: res, 
          nombre: values.nombre,
          apellido: values.apellido,
          cargo: values.cargo,
          pais: values.pais,
          descripcion: values.descripcion,
          correo: values.correo
        };
        this.listaAuthors.push(this.nuevoAuthor);
        document.getElementById("btnCerrar").click(); 
      }
    )
  }

  seleccionar(itemAuthor:Author){
    console.log(itemAuthor.nombre);
    $("#formulario-actualizar").slideDown("slow");
    this.authorElegido = itemAuthor;
  }

 cerrarActualizar(){
    $("#formulario-actualizar").slideUp("slow");
 }

 actualizarAuthors(values): void{
   this.authorsService.authorUpdate(values.id_usuario,values.nombre,values.apellido,values.cargo,values.pais,values.descripcion,values.correo).subscribe()
   $("#formulario-actualizar").slideUp("slow");
 }

 eliminarAuthor(itemAuthor){
   console.log(itemAuthor.descripcion);
   var respuesta= confirm("¿Está seguro que desea eliminar al autor/a la autora " + itemAuthor.nombre +" "+ itemAuthor.apellido + "?");
   console.log(respuesta); 
   if(respuesta === true){
     this.authorsService.authorDelete(itemAuthor.id_usuario).subscribe();
     this.listaAuthors = this.listaAuthors.filter(
       item => item.id_usuario != itemAuthor.id_usuario
     );
     alert("Se ha eliminado al autor/a la autora " + itemAuthor.nombre +" "+ itemAuthor.apellido);
   }
 }

}
