import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryComponent } from './repository/repository.component';
import { WorksComponent } from './works/works.component';
import { AuthorsComponent } from './authors/authors.component';
import { InicioComponent } from './inicio/inicio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TableAuthorsComponent } from './table-authors/table-authors.component';


const routes: Routes = [
  {path: 'repository', component: RepositoryComponent},
  {path: 'authors', component: AuthorsComponent},
  {path: 'table-authors', component: TableAuthorsComponent},
  {path: '', component: InicioComponent},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
