import { Component,OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { ModalController } from "@ionic/angular";
import {HttpServiceService} from '../services/http-service.service';

@Component({
  selector: 'app-home', 
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  

  constructor(public modalCtrl: ModalController, private http: HttpServiceService, public router:Router) {}

  ngOnInit() {}

  clickProceed(){
    let that = this.router;
    this.http.makeGETrequest((that)=>{
      this.router.navigateByUrl('/analyze')
    })
  }
}