import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.scss'],
})
export class InputCardComponent implements OnInit {

  @Input() topicObj : any;
  @Output() dataChanged: EventEmitter<any> =   new EventEmitter(); 
  topic : String;
  keys : String;
  topicNo;

  constructor() { }
  rar(){
    console.log(this.keys);
    console.log(this.topic);
  }
  ngOnInit() {
    this.topicNo  = this.topicObj.topicNo;
    this.topic = this.topicObj.topic;
    this.keys = this.topicObj.keys;
  }

}
