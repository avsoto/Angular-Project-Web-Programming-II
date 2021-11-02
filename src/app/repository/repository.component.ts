import { Component, OnInit } from '@angular/core';
import { Reposito } from '../reposito';
import {RepositoryService} from '../repository.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  listaRepository: Reposito[]; 
  constructor(private repositoryService: RepositoryService) { }

  ngOnInit(): void {
    this.leerRepository()
  }

  leerRepository(): void{
    this.repositoryService.repositorySelect().subscribe(
      (rep: Reposito[]) =>{
        this.listaRepository = rep;
        console.log(rep)
      }
    )

  }

}
