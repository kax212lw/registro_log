import { Component, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @Output() navigateToLogin = new EventEmitter<void>();
  role: string = 'student';
  name: string = '';
  email: string = '';
  password: string = '';
  alertMessage: string = '';
  alertType: string = '';
  showAlert: boolean = false;

  constructor(private appComponent: AppComponent) {}

  togglePasswordVisibility() {
    const passwordField = document.getElementById('reg-password') as HTMLInputElement;
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
    } else {
      passwordField.type = 'password';
    }
  }

  showAlertMessage(message: string, type: string) {
    this.alertMessage = message;
    this.alertType = `alert-${type}`;
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 2000); 
  }

  register() {
    if (!this.email.includes('@')) {
      this.showAlertMessage('Ingrese un correo electrónico válido', 'danger');
      return;
    }
    if (!this.name || !this.email || !this.password) {
      this.showAlertMessage('Complete todos los datos antes de registrarse', 'danger');
      return;
    }

    const existingUser = this.appComponent.getUsers().find(u => u.email === this.email);
    if (existingUser) {
      this.showAlertMessage('Ya existe un usuario con este correo electrónico', 'danger');
      return;
    }

    const newUser = { role: this.role, name: this.name, email: this.email, password: this.password };
    this.appComponent.addUser(newUser);
    this.showAlertMessage('Registro exitoso', 'success');
    setTimeout(() => {
      this.navigateToLogin.emit();
    }, 2000); 
  }
}