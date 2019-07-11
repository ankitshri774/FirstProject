import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  baseUrl = 'http://13.233.130.99:10093/';

  constructor(private http: HttpClient) { 
   
  }

   
  printResult() {
    const url = this.baseUrl;
    return this.http.get(url);
  }
}
