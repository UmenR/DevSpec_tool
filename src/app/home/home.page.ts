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
  game: string = "PUBATTLEGROUNDS";
  idset = [];
  constructor(public modalCtrl: ModalController, private http: HttpServiceService, public router:Router) {}

  ngOnInit() {
    this.idset = ['i1','i2']
  }

  clickProceed(){
    let that = this.router;
    let parameters = {"game":this.game}
    this.http.callW2W((that)=>{
      this.router.navigateByUrl('/analyze')
    },parameters)
  }
}