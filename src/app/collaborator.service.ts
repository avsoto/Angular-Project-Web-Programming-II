import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Collaborator } from './collaborato';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {
  collaborators : Collaborator[];

  constructor(private http: HttpClient) { }

  collaboratorSelect(): Observable<Collaborator[]>{
    const rutaCollaborator = "https://web-programming-ii.000webhostapp.com/autores.php";
    return this.http.post<Collaborator[]>(rutaCollaborator, null).pipe(map((res) => {
      //La variable res contiene los datos del servicio web 
      this.collaborators = JSON.parse(JSON.stringify(res));

      return this.collaborators;
    }))
  }
}
