import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Author } from './author';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  authors : Author[];

  constructor(private http: HttpClient) { }

  authorSelect(): Observable<Author[]>{
    const rutaAuthor = "https://web-programming-ii.000webhostapp.com/autores.php";
    return this.http.post<Author[]>(rutaAuthor, null).pipe(map((res) => {
      //La variable res contiene los datos del servicio web 
      this.authors = JSON.parse(JSON.stringify(res));

      return this.authors;
    })
    );
  }
  
  authorInsert(nombre,apellido,cargo,pais,descripcion,correo){
    const rutaAuthor = "https://web-programming-ii.000webhostapp.com/autor-insertar.php";

    const formData: FormData = new FormData();
    formData.append("nombre", nombre);
    formData.append("apellido", apellido );
    formData.append("cargo",cargo );
    formData.append("pais", pais );
    formData.append("descripcion", descripcion );
    formData.append("correo",correo);

    return this.http.post(rutaAuthor, formData).pipe(map((res) => {
      return res;
    }))
  }

  authorUpdate(id_usuario,nombre,apellido,cargo,pais,descripcion,correo){
    const rutaAuthor = "https://web-programming-ii.000webhostapp.com/autor-actualizar.php";

    const formData: FormData = new FormData();
    formData.append("id_usuario", id_usuario);
    formData.append("nombre", nombre);
    formData.append("apellido", apellido );
    formData.append("cargo",cargo );
    formData.append("pais", pais );
    formData.append("descripcion", descripcion );
    formData.append("correo",correo);

    return this.http.post(rutaAuthor, formData);
  }

  authorDelete(id_usuario){
    const rutaAuthor = "https://web-programming-ii.000webhostapp.com/autor-eliminar.php";

    const formData: FormData = new FormData();
    formData.append("id_usuario", id_usuario);

    return this.http.post(rutaAuthor, formData);
  }
}

