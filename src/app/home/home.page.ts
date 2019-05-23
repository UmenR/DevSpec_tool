import { Component,OnInit } from '@angular/core';
import { Ionic4DatepickerModalComponent } from "@logisticinfotech/ionic4-datepicker";
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-home', 
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  

  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {}
}