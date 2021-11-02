import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Reposito } from './reposito';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  repository : Reposito[];

  constructor(private http: HttpClient) { }

  repositorySelect(): Observable<Reposito[]>{
    const rutaRepository = "https://web-programming-ii.000webhostapp.com/libros.php";
    return this.http.post<Reposito[]>(rutaRepository, null).pipe(
      map((rep)=> {
        //La variable res contiene los datos del servicio web
        this.repository = JSON.parse(JSON.stringify(rep));

        return this.repository;
      })
    )
  }
}
