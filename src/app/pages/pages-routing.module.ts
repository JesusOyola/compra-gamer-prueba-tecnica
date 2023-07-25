import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RouterPathNames } from '../enum/router-path-names';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from '../shared/auth/auth.component';


const routes: Routes = [
  {
    path: RouterPathNames.dashboard,
    component: DashboardComponent,
    pathMatch: 'full',
  },
  {
    path: RouterPathNames.login,
    component: AuthComponent,
    pathMatch: 'full',
  },
  {
    path: RouterPathNames.register,
    component: AuthComponent,
    pathMatch: 'full',
  },
  {
    path: RouterPathNames.empty,
    component: DashboardComponent,
    pathMatch: 'full',
  },
  {
    path: RouterPathNames.any,
    component: DashboardComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
