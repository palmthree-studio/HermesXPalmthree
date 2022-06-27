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

  getQuestions(id1:number,id2:number): Observable<any>{
    return this.http.get<any>("https://hermesxpalmthree.herokuapp.com/questions?id1=" + id1 + "&id2=" + id2);
  }

  getQuestion(id:number): Observable<any>{
    return this.http.get<any>("https://hermesxpalmthree.herokuapp.com/question?id=" + id);
  }

  getResult(count:number): Observable<any>{
    return this.http.get<any>("https://hermesxpalmthree.herokuapp.com/result?count=" + count);
  }

  getProduct(id:number): Observable<any>{
    return this.http.get<any>("https://hermesxpalmthree.herokuapp.com/product?id=" + id);
  }

}
