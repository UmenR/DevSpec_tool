import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  baseUrl:string = "http://35.185.114.85:5000/v1/";
  constructor(private  httpClient : HttpClient) { }

  public makeGETrequest(parameters?:any) {
    this.httpClient.get('http://35.185.114.85:5000/v1/w2wmodel?game=sds').subscribe((response) =>{
      console.log(response);
    })
  }
}
