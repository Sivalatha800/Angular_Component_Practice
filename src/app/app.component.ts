import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular_DataTranfor_Component';
  headding = 'Parent Component';
  stdheadding = 'Person Details';

  title1 = '';
  transferTitle(name: any) {
    this.title1 = name;
  }
  updateTitle(headding: any) {
    this.headding = headding;
  }
}
