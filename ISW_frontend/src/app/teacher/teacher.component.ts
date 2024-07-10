import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent {
  constructor(private appComponent: AppComponent) {}

  goBack() {
    this.appComponent.goBack();
  }
}