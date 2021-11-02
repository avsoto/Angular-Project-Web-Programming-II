import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../authors.service';
import { Author } from '../author';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  listaAuthor: Author[];
  authorSeleccionado : Author; 
  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.leerAuthor()
  }

  leerAuthor(): void {
    this.authorService.authorSelect().subscribe(
      (res: Author[]) => {
        this.listaAuthor = res; 
        console.log(res)
      }
    )
  }

  seleccionar(authorElegido:Author){
    this.authorSeleccionado = authorElegido;
  }

}
