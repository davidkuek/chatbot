import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BotHttpService {
  
  url = 'https://api.wit.ai/message?v=20200218&q=';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer IMN7LNTCMSYZX2HBBYMBWSTI2NEPKP5R'
    })
  };

  constructor(private http: HttpClient) { 
    
  }

  botHttp(msg) {
    return this.http.get(this.url+msg, this.httpOptions);
  }
}
