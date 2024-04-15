import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { NgxPaginationModule } from 'ngx-pagination';

import { SharedModule } from '../../shared/shared.module';

import { MoviesComponent } from './movies.component';

@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    NgxPaginationModule,
  
    SharedModule
  ]
})
export class MoviesModule { }
