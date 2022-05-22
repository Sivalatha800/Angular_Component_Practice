import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  hedding = 'Child Information';

  @Input() namedata: any;
  @Input() gradedata: any;
  @Input() objdata: any;
  constructor() {}

  ngOnInit(): void {}
}
