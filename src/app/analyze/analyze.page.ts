import { Component,OnInit } from '@angular/core';
import { Ionic4DatepickerModalComponent } from "@logisticinfotech/ionic4-datepicker";
import { ModalController } from "@ionic/angular";
import { Router, NavigationExtras } from '@angular/router';
import {HttpServiceService} from '../services/http-service.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.page.html',
  styleUrls: ['./analyze.page.scss'],
})
export class AnalyzePage implements OnInit {
  datePickerObjBefore: any = {};
  datePickerObjAfter: any = {};
  selectedDateBefore;
  selectedDateAfter;
  beforedate = "";
  afterdate = "";
  gridRows = [];
  inputsArray = [];
  elimentsPerRow = 3;
  


  constructor(public modalCtrl: ModalController,public router:Router,private http: HttpServiceService) {}

  ngOnInit() {
    this.datePickerObjBefore = {
      inputDate: new Date("2017-11-01"),
      dateFormat: "X",
      titleLabel: "Select a starting Date", 
    };
    this.datePickerObjAfter = {
      inputDate: new Date("2018-08-12"),
      dateFormat: "X",
      titleLabel: "Select an ending Date", 
    };
    this.inputsArray = [{topicNo:1,topic:"Performance",keys:"fps,ram,cpu,freeze,crash,gpu"},
                        {topicNo:2,topic:"Gunplay",keys:"gun,crosshair,shoot,recoil,control,spray"},
                        {topicNo:3,topic:"Microtransactions",keys:"crates,bp,skin,skins,camo"},
                        {topicNo:4,topic:"Sounds",keys:"footsteps,sound"},
                        {topicNo:5,topic:"Maps",keys:"erangel,map,maps,road,roads,compound"},
                        {topicNo:6,topic:"Hakcers",keys:"anti,cheat,hackers,cheater,hacks"}];
    this.createArrays();
  }

  onChangeDateBefore() {
    // this.beforedate += 19800
    console.log("obefore date ", this.beforedate);
  }
  onChangeDateAfter() { 
    // this.afterdate += 19800
    console.log("afterdate date ", this.afterdate);
  }

  async openDatePickerBefore() {
      console.log("Open Date PIcker");

    const modalCtrl = await this.modalCtrl.create({
      component: Ionic4DatepickerModalComponent,
      cssClass: "li-ionic4-datePicker",
      componentProps: { objConfig: this.datePickerObjBefore }
    });
    await modalCtrl.present();

    modalCtrl.onDidDismiss().then(data => {
      console.log(this.beforedate);
      this.selectedDateBefore = data.data.date;
    });
  }

  async openDatePickerAfter() {
    console.log("Open Date PIcker");

  const modalCtrl = await this.modalCtrl.create({
    component: Ionic4DatepickerModalComponent,
    cssClass: "li-ionic4-datePicker",
    componentProps: { objConfig: this.datePickerObjAfter }
  });
  await modalCtrl.present();

  modalCtrl.onDidDismiss().then(data => {
    console.log(data);
    this.selectedDateAfter = data.data.date;
  });
}

/**
   * Split the input array according to the number of rows and columns
   */
  createArrays(): void {
    this.gridRows = [];
    let totalElms = this.inputsArray.length;
    let totalRows = Math.ceil(totalElms/this.elimentsPerRow);

    for (let i=0; i<totalRows; i++){
      let currentRow = this.inputsArray.slice(i*this.elimentsPerRow,(i*this.elimentsPerRow)+this.elimentsPerRow);
      this.gridRows.push(currentRow);
    }
}

/**
   * Create and add new input element object to the inputs array
   */
  clickAddMoreTopics(): void {
    let topicNumber = this.inputsArray.length + 1
    let inputObj = {
      topicNo : topicNumber,
      topic:'',
      keys:''
    }
    this.inputsArray.push(inputObj)
    this.createArrays();
  }

analyze(){
  // console.log(this.inputsArray)
  let parameters =this.prepareResults(this.beforedate,this.afterdate,this.gridRows)
  this.http.callAnalyze((res)=>{
    this.router.navigate(['/scores'])
  },parameters)
}

prepareResults(start,end,grows): any {
  let localeOffset = 19800;
  let startTime = parseInt(start) + localeOffset;
  let endTime = parseInt(end) + localeOffset;

  let topicObj = {};
  let topics = [];
  grows.forEach(row =>{
    row.forEach(element => {
      let keys = element.keys.split(',')
      topics.push(element.topic)
      topicObj[element.topic] = keys;
    });
  })
  let noOfTopics = Object.keys(topicObj).length;
  this.http.setTopics(topics);
  return {
    "start":startTime,
    "end":endTime,
    "topics":noOfTopics,
    "keywords": JSON.stringify(topicObj)
  }
}
}
