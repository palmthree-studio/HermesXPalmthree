import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  answerCount = null;
  currentAnswerCount = new BehaviorSubject<any>(this.answerCount);

  constructor() { }

  getAnswerCount(): Observable<any> {
    return this.currentAnswerCount.asObservable();
  }

  setAnswerCount(score:number){
    this.currentAnswerCount.next(score);
  }

}