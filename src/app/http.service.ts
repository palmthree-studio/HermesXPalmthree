import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http:HttpClient
  ) { }

  getQuestion(id:number): Observable<any>{
    return this.http.get<any>("http://localhost:3000/question?id=" + id);
  }

  getResult(count:number): Observable<any>{
    return this.http.get<any>("http://localhost:3000/result?count=" + count);
  }

  getProduct(id:number): Observable<any>{
    return this.http.get<any>("http://localhost:3000/product?id=" + id);
  }

}
