import { Component,OnInit } from '@angular/core';
import { Ionic4DatepickerModalComponent } from "@logisticinfotech/ionic4-datepicker";
import { ModalController } from "@ionic/angular";
import {HttpServiceService} from '../services/http-service.service';

@Component({
  selector: 'app-home', 
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  

  constructor(public modalCtrl: ModalController, private http: HttpServiceService) {}

  ngOnInit() {}

  clickProceed(){
    var promise1 = new Promise(function(resolve, reject) {
      // http.makeGETrequest();
      resolve('sdsd');
    });
    promise1.then(()=>console.log('2'))
  }
}