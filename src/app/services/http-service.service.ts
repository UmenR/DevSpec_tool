import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  scoreData:any;
  summaryData:any;
  baseUrl:string = "http://35.185.114.85:5000/v1/";
  constructor(private  httpClient : HttpClient) { }

  public makeGETrequest(callback,parameters?:any) {
    this.httpClient.get('http://35.185.114.85:5000/v1/w2wmodel?game=sds').subscribe((response) =>{
      this.scoreData = response 
      callback(response)
    })
  }

  public makeGETrequest1(callback,parameters?:any) {
    this.httpClient.get('http://35.185.114.85:5000/v1/analysis?start=1509494400&end=1539302400&topics=7&keywords={"performance":["fps","ram","cpu","freeze","crash","gpu"],"gunplay":["gun","crosshair","shoot","recoil","control","spray"],"microtransactions":["crates","bp","skin","skins","camo"],"sounds":["footsteps","sound"],"maps":["erangel","map","maps","road","roads","compound"],"hackers":["anti","cheat","hackers","cheater","hacks"],"servers":["server","desync","lag","network","ping"]}').subscribe((response) =>{
    console.log(response) 
    this.scoreData = response 
     callback(response)
    })
  }

  public makeGETrequest2(callback,parameters?:any) {
    this.httpClient.get('http://35.185.114.85:5000/v1/results').subscribe((response) =>{
    console.log(response) 
    this.summaryData = response 
     callback(response)
    })
  }
}
