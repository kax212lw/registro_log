import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ISW_frontend'; 
  users: any[] = [];  //almacenar usuarios
  currentView: string = 'login'; // manejo de vsita
  history: string[] = []; // registro historial

  addUser(user: any) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }

  navigate(view: string) {
    this.history.push(this.currentView); //vista para el historia
    this.currentView = view;
  }

  goBack() {
    if (this.history.length > 0) {
      this.currentView = this.history.pop()!; //ocupando vista del historial
    }
  }
}