import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.scss'],
})
export class InputCardComponent implements OnInit {

  @Input('topicNumber') topicNo; 

  constructor() { }

  ngOnInit() {}

}
