import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule,ReactiveFormsModule, MatFormFieldModule, MatInputModule,MatButtonModule,MatSnackBarModule ],
  exports: [AuthComponent, MatFormFieldModule, MatInputModule,MatButtonModule, MatSnackBarModule],
})
export class SharedModule {}
