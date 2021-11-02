import { Component, OnInit, Input } from '@angular/core';
import { Work } from '../work';
import { WorksService } from '../works.service';
import { Author } from '../author';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  @Input() authorX:Author;

  listaWorks : Work[];
  constructor(private worksService: WorksService) { }

  ngOnInit(): void {
    //console.log(this.authorX); 
    //this.leerWorks(5)
  }

  ngOnChanges(){
    this.leerWorks(this.authorX.id_usuario);
  }

  leerWorks(id_usuario): void {
    this.worksService.workSelect(id_usuario).subscribe(
      (res: Work[]) => {
        this.listaWorks = res; 
        console.log(res)
      }
    )
  }

}
