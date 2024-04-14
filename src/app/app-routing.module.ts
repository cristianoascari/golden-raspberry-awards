import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule) },
  { path: 'list', loadChildren: () => import('./pages/movies/movies-routing.module').then(m => m.MoviesRoutingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
