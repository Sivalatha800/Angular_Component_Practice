import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-component-data-transfor';
  hedding = 'Parent Information';
  inputname = '';
  inputgrade = '';
  inputobj = { name: '', grade: '' };
  transforData(name: any, grade: any) {
    this.inputname = name;
    this.inputgrade = grade;
    this.inputobj = { name: name, grade: grade };
  }
}
