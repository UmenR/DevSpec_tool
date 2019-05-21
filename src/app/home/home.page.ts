import { Component,OnInit } from '@angular/core';
import { Ionic4DatepickerModalComponent } from "@logisticinfotech/ionic4-datepicker";
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-home', 
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  datePickerObjBefore: any = {};
  datePickerObjAfter: any = {};
  selectedDateBefore;
  selectedDateAfter;
  beforedate = "";
  afterdate = "";
  gridRows = [];
  inputsArray = [];
  elimentsPerRow = 3;
  


  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {
    this.datePickerObjBefore = {
      inputDate: new Date("2019-12-01"),
      dateFormat: "DD-MM-YYYY",
      titleLabel: "Select a Date", 
      momentLocale: "pt-BR",
    };
    this.datePickerObjAfter = {
      inputDate: new Date("2019-12-01"),
      dateFormat: "DD-MM-YYYY",
      titleLabel: "Select a Date", 
      momentLocale: "pt-BR",
    };
  }

  onChangeDateBefore() {
    console.log("obefore date ", this.beforedate);
  }
  onChangeDateAfter() {
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
  console.log(this.gridRows);
}
}