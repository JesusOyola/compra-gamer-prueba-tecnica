import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';


@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    FilterPipe,
   
  ],
  imports: [CommonModule, PagesRoutingModule, SharedModule, FormsModule],
})
export class PagesModule {}
