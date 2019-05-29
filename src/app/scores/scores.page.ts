import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpServiceService} from '../services/http-service.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.page.html',
  styleUrls: ['./scores.page.scss'],
})
export class ScoresPage implements OnInit, AfterViewInit {
  data: any;
  chartSet: any = [];
  chartIds : any;
  scoreData: any;
  topics: any;
  isLoading: boolean = false;
  constructor(private http: HttpServiceService,public router:Router) { 
  }

  ngOnInit() {
    // console.log(this.http.scoreData)
    // this.tempscoredata = [[["gtx",0.6398417793070804],["pc",0.6288510258712797],["settings",0.6192174614512487],["performance",0.6179017727992187],["low",0.4979732010932646],["fix",0.48754658662398964],["issues",0.4597049916477143],["16gb",0.4596696098960257],["runs",0.4574568690894146],["drops",0.45348165280305264]],[["shot",0.7910168638503213],["kill",0.7616325860978708],["shooting",0.7588694767455456],["close",0.6980009896688967],["shots",0.6876311406543181],["guy",0.682564005649045],["circle",0.6720204483527371],["best",0.6673199817904503],["loot",0.6466522313089025],["drop",0.6451292840585303]],[["shit",0.9274956486689261],["isn",0.917775654018428],["bad",0.8780655756602644],["say",0.865383611231021],["pretty",0.8593810432635256],["come",0.8151084377109442],["probably",0.8039830137604541],["player",0.7964939611507947],["getting",0.778672032463623],["players",0.7772143259027663]],[["make",1.0120063846146126],["good",1.0036552833839834],["need",1.0002239216639872],["actually",0.9866352702026947],["want",0.9433025102592556],["don",0.9382350937938387],["better",0.9229476596129947],["way",0.9166130580255437],["lot",0.9064617262481433],["really",0.8916792316663529]],[["miramar",0.7782855246095567],["buildings",0.5286013884779982],["zone",0.5206790094007862],["area",0.48728238160312937],["areas",0.4476532527311203],["vehicles",0.4416647746345806],["rng",0.4269490920454021],["vehicle",0.41077090040610775],["circles",0.41030521082206795],["plane",0.38622617887840716]],[["rules",1.2774665816295705],["free",1.2046338521377333],["respond",1.1613256973136823],["unfairly",1.1558749787823668],["violated",1.1479484083439007],["rule",1.142171784609595],["violating",1.1393306997431705],["outlined",1.1056328230361556],["feel",1.0290725474038163],["send",1.0287518342769502]]]
    // this.temptop= ["1","2","3","4","5","6"]
    this.scoreData = this.http.getScoreData();
    this.topics = this.http.getTopics();
    let scores = this.scoreData.scores;
    let dataPoints = []
    for (let i=0; i<scores.length; i++){
      dataPoints.push({y:scores[i], label:this.topics[i]})
    }  
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: false,
      title: {
        text: "Topic Coherence Scores"
      },
      data: [{
        type: "column",
        dataPoints: dataPoints
      }]
    });
    // this.crateBarCharts(scoreData.wordclouds,topics);
    chart.render();
    // this.chartSet.forEach(element => {
      // element.chart.render()
    // });
  }

  ngAfterViewInit(){
    this.crateBarCharts(this.scoreData.wordclouds,this.topics);
    this.chartSet.forEach(element => {
      element.chart.render()
    });
  }
  
public crateBarCharts(cloudData,topics){
  this.chartSet = [];
  let ind = 0;
  cloudData.forEach(element => {
    let dataPoints = [];
    let chart;
    let chartId;
    for (let i=0; i<element.length; i++){
      dataPoints.push({y:element[i][1], label:element[i][0]})
    }
    chartId = "chart"+ind;
    chart = new CanvasJS.Chart(chartId, {
        animationEnabled: true,
        exportEnabled: false,
        title: {
          text: "Top Words for Topic " + topics[ind]
        },
        data: [{
          type: "bar",
          dataPoints: dataPoints
        }]
      });
    this.chartSet.push({chart:chart,cid:chartId});
    ind++; 
  });
}

public proceed(){
  this.isLoading = true;
  this.http.callResults(()=>{
    this.isLoading = false;
    this.router.navigateByUrl('/results')
  })
}

}
