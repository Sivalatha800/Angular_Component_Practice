import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  title = 'Child Component';
  person = 'Student Details';

  @Input() title1: any;

  @Output() titleUpdateEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
