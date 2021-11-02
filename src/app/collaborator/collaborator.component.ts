import { Component, OnInit } from '@angular/core';
import { Collaborator } from '../collaborato';
import { CollaboratorService } from '../collaborator.service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css']
})
export class CollaboratorComponent implements OnInit {
  listaCollaborator: Collaborator[];
  constructor(private collaboratorService: CollaboratorService) { }

  ngOnInit(): void {
    this.leerCollaborator()
  }

  leerCollaborator(): void {
    this.collaboratorService.collaboratorSelect().subscribe(
      (res: Collaborator[]) => {
        this.listaCollaborator = res; 
        console.log(res)
      }
    )
  }

}
