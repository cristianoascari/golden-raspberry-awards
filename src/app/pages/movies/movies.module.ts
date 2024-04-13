import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { MoviesComponent } from './movies.component';


@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  
    SharedModule
  ]
})
export class MoviesModule { }
