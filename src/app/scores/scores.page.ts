import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpServiceService} from '../services/http-service.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.page.html',
  styleUrls: ['./scores.page.scss'],
})
export class ScoresPage implements OnInit {
  data: any;
  constructor(private http: HttpServiceService) { 
  }

  ngOnInit() {
    console.log('data'+ this.http.scoreData)
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Basic Column Chart in Angular"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 0.20, label: "Apple" },
          { y: 0.55, label: "Mango" },
          { y: 0.50, label: "Orange" },
          { y: 0.44, label: "Banana" },
          { y: 0.22, label: "Pineapple" },
          { y: 0.12, label: "Pears" },
          { y: 0.28, label: "Grapes" },
          { y: 0.34, label: "Lychee" },
          { y: 0.14, label: "Jackfruit" }
        ]
      }]
    });
    chart.render();
  }
  

}
