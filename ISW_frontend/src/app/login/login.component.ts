import { Component, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output() navigateToRegister = new EventEmitter<void>();
  email: string = '';
  password: string = '';
  alertMessage: string = '';
  alertType: string = '';
  showAlert: boolean = false;

  constructor(private appComponent: AppComponent) {}

  togglePasswordVisibility() {
    const passwordField = document.getElementById('password') as HTMLInputElement;
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

  login() {
    if (!this.email || !this.password) {
      this.showAlertMessage('Complete todos los datos antes de iniciar sesión', 'danger');
      return;
    }

    const user = this.appComponent.getUsers().find(u => u.email === this.email && u.password === this.password);
    if (user) {
      this.showAlertMessage('Iniciando sesión', 'success');
      setTimeout(() => {
        if (user.role === 'student') {
          this.appComponent.navigate('student');
        } else if (user.role === 'teacher') {
          this.appComponent.navigate('teacher');
        }
      }, 2000); 
    } else {
      this.showAlertMessage('Credenciales invalidas', 'danger');
    }
  }
}