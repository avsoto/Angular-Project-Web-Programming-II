import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { BannerComponent } from './banner/banner.component';
import { ArticlesComponent } from './articles/articles.component';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import { PicturesComponent } from './pictures/pictures.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { RepositoryComponent } from './repository/repository.component';
import { AuthorsComponent } from './authors/authors.component';
import { WorksComponent } from './works/works.component';
import { InicioComponent } from './inicio/inicio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TableAuthorsComponent } from './table-authors/table-authors.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    BannerComponent,
    ArticlesComponent,
    CollaboratorComponent,
    PicturesComponent,
    FormComponent,
    FooterComponent,
    RepositoryComponent,
    AuthorsComponent,
    WorksComponent,
    InicioComponent,
    PageNotFoundComponent,
    TableAuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
