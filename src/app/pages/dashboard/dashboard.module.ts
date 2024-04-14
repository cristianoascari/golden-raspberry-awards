import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { ProducersWinsIntervalsComponent } from './components/producers-wins-intervals/producers-wins-intervals.component';
import { TopStudiosWithWinnersComponent } from './components/top-studios-with-winners/top-studios-with-winners.component';
import { WinnerMoviesByYearComponent } from './components/winner-movies-by-year/winner-movies-by-year.component';
import { YearsWithMultipleWinnersComponent } from './components/years-with-multiple-winners/years-with-multiple-winners.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProducersWinsIntervalsComponent,
    TopStudiosWithWinnersComponent,
    WinnerMoviesByYearComponent,
    YearsWithMultipleWinnersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    SharedModule
  ]
})
export class DashboardModule { }
