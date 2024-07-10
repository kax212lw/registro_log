import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  constructor(private appComponent: AppComponent) {}

  goBack() {
    this.appComponent.goBack();
  }
}