import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  accessForm!: FormGroup;

  logIn: boolean = false;
  register: boolean = false;
  title: string = '';

  constructor(
    private readonly fb: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.isLoginPath();
    this.accessForm = this.initForm();
  }

  initForm(): FormGroup {
    if (this.router.url === '/register') {
      return this.fb.group({
        nombre: ['', [Validators.required, Validators.maxLength(20)]],
        apellido: ['', [Validators.required, Validators.maxLength(20)]],
        dni: ['', [Validators.required, Validators.maxLength(8)]],
        email: ['', [Validators.required, Validators.email]],
        telefono: ['', [Validators.required, Validators.maxLength(10)]],
        password: ['', [Validators.required, Validators.maxLength(20)]],
      });
    } else {
      return this.fb.group({
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
      });
    }
  }
  isLoginPath() {
    if (this.router.url === '/login') {
      this.logIn = true;
      this.title = 'login';
    } else {
      this.register = true;
      this.title = 'register';
    }
  }

  onSubmit() {
    if (this.register) {
      this.setPersonalDataToRegister();
    } else {
      this.getPersonalDataToLogin();
    }
  }

  getPersonalDataToLogin() {
    try {
      const localStorageEmail = JSON.parse(
        localStorage.getItem('register')
      ).email;
      const localStoragePassword = JSON.parse(
        localStorage.getItem('register')
      ).password;
      const formEmail = this.accessForm.controls['email'].value;
      const formPassword = this.accessForm.controls['password'].value;

      if (
        localStorageEmail === formEmail &&
        localStoragePassword === formPassword
      ) {
        this.router.navigate(['/dashboard']);
      } else {
        this._snackBar.open('Las credenciales son inválidas.', 'Error', {
          duration: 5000,
        });
      }
    } catch (error) {
      console.log(error);
      this._snackBar.open(
        `El usuaurio con el mail ${this.accessForm.controls['email'].value} no está registrado.`,
        'Error',
        {
          duration: 5000,
        }
      );
    }
  }

  setPersonalDataToRegister() {
    try {
      localStorage.setItem('register', JSON.stringify(this.accessForm.value));
      this._snackBar.open(
        `Usuario ${this.accessForm.controls['nombre'].value} registrado con éxito!`,
        'Registro Exitoso',
        {
          duration: 5000,
        }
      );
      this.router.navigate(['/login']);
    } catch (error) {
      this._snackBar.open(
        'Algo salió mal, comuníquese con el administrador.',
        'Error',
        {
          duration: 5000,
        }
      );
    }
  }
  getErrorMessage(field: string) {
    if (this.accessForm.controls[field].hasError('required')) {
      return 'El campo es requerido';
    }
  }
}
