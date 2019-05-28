import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  scoreData:any;
  topics:any;
  summaryData:any;
  baseUrl:string = "http://35.185.114.85:5000/v1/";
  sampleTopics = ["Topic1","Topic2","Topic3","Topic4","Topic5","Topic6"]
  sampleTopicKWs = [["kw1","kw2","kw3"],["kw4","kw5","kw6"],["kw7","kw8","kw9"],["kw10","kw11","kw12"],["kw13","kw14","kw15"],["kw16","kw17","kw18"]]
  constructor(private  httpClient : HttpClient) { }

  public callW2W(callback,parameters?:any) {
    let endpoint = "w2wmodel";
    let url = this.makeUrlString(endpoint,parameters);
    this.httpClient.get(url).subscribe((response) =>{
      console.log(response)
      callback()
    })
  }

  public callAnalyze(callback,parameters?:any) {
    // 'http://35.185.114.85:5000/v1/analysis?start=1509494400&end=1539302400&topics=7&keywords={"performance":["fps","ram","cpu","freeze","crash","gpu"],"gunplay":["gun","crosshair","shoot","recoil","control","spray"],"microtransactions":["crates","bp","skin","skins","camo"],"sounds":["footsteps","sound"],"maps":["erangel","map","maps","road","roads","compound"],"hackers":["anti","cheat","hackers","cheater","hacks"],"servers":["server","desync","lag","network","ping"]}'
    let endpoint = "analysis";
    let url = this.makeUrlString(endpoint,parameters);
    this.httpClient.get(url).subscribe((response) =>{
    console.log(response) 
    this.scoreData = response 
     callback(response)
    })
  }

  public callResults(callback,parameters?:any) {
    // 'http://35.185.114.85:5000/v1/results'
    let endpoint = "results";
    let url = this.makeUrlString(endpoint);
    this.httpClient.get(url).subscribe((response) =>{
    console.log(response) 
    this.summaryData = response 
     callback(response)
    })
  }

  public setTopics(topics) {
    this.topics = topics;
  }

  public getTopics() {
    return this.topics;
  }

  public getScoreData(){
    return this.scoreData;
  }

  private makeUrlString(endpoint,parameters?:any): string{
    let url = "";
    url = url + this.baseUrl+endpoint;
    if(parameters){
      let isFirst = true;
      url = url + "?";
      for (let [key,val] of Object.entries(parameters)){
        if(isFirst){
          url = url + key +"="+val;
          isFirst = false;
        } else {
          url = url + "&" + key + "=" + val;
        }
      }
    }
    console.log(url)
    return url 
  }
}
