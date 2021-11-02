import { Injectable } from '@angular/core';
import { Work } from './work';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  works : Work[];

  constructor(private http: HttpClient) { }

workSelect(id_usuario): Observable<Work[]>{
    const rutaWork = "https://web-programming-ii.000webhostapp.com/librospor.php";

    const formData: FormData = new FormData();
    formData.append("id_usuario", id_usuario);

    return this.http.post<Work[]>(rutaWork, formData).pipe(map((res) => {
      //La variable res contiene los datos del servicio web 
      this.works = JSON.parse(JSON.stringify(res));

      return this.works;
    }))
  }
}
