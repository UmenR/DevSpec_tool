import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  scoreData:any;
  baseUrl:string = "http://35.185.114.85:5000/v1/";
  constructor(private  httpClient : HttpClient) { }

  public makeGETrequest(callback,parameters?:any) {
    this.httpClient.get('http://35.185.114.85:5000/v1/w2wmodel?game=sds').subscribe((response) =>{
      this.scoreData = response 
      callback(response)
    })
  }

  public makeGETrequest1(callback,parameters?:any) {
    this.httpClient.get('http://35.185.114.85:5000/v1/analysis?start=1509494400&end=1539302400&topics=7&keywords=%7B%22performance%22%3A%5B%22fps%22%2C%22ram%22%2C%22cpu%22%2C%22freeze%22%2C%22crash%22%2C%22gpu%22%5D%2C%22gunplay%22%3A%5B%22gun%22%2C%22crosshair%22%2C%22shoot%22%2C%22recoil%22%2C%22control%22%2C%22spray%22%5D%2C%22microtransactions%22%3A%5B%22crates%22%2C%22bp%22%2C%22skin%22%2C%22skins%22%2C%22camo%22%5D%2C%22sounds%22%3A%5B%22footsteps%22%2C%22sound%22%5D%2C%22maps%22%3A%5B%22erangel%22%2C%22map%22%2C%22maps%22%2C%22road%22%2C%22roads%22%2C%22compound%22%5D%2C%22hackers%22%3A%5B%22anti%22%2C%22cheat%22%2C%22hackers%22%2C%22cheater%22%2C%22hacks%22%5D%2C%22servers%22%3A%5B%22server%22%2C%22desync%22%2C%22lag%22%2C%22network%22%2C%22ping%22%5D%7D').subscribe((response) =>{
     this.scoreData = response 
     callback(response)
    })
  }
}
