import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MoviesService } from './services/movies/movies.service';

import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoaderComponent,
    MenuComponent
  ],
  exports: [
    HeaderComponent,
    LoaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [MoviesService]
})
export class SharedModule { }
