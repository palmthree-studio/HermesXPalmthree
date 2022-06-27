import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit {

  questions:any = [];
  currentQuestion:number = 0;
  goodAnswerCount:number = 0;
  questionSub: any;
  // That permit us to get data before displaying the template.
  isActive:boolean = false;

  constructor(
    private DataSharingService:DataSharingService,
    public router:Router,
    private http:HttpService
  ) { }

  ngOnInit(): void {
    // We want to have only 2 questions in advance for performance reasons. Like this, it's avoid us to request a big amount of data on start.
    // Here it's only a little amount of data, but it's cool to keep this habit. ;)
    this.getFirstQuestions(0,1);
  }

  getFirstQuestions(id1:number,id2:number){
    this.questionSub = this.http.getQuestions(id1,id2).subscribe(questions =>{
      this.questions = questions;
      this.isActive = true;
    })
  }

  getQuestion(id:number){
    this.questionSub = this.http.getQuestion(id).subscribe(question =>{
      this.questions.push(question);
    })
  }

  chooseAnswer(id:number){
    var propositions = this.questions[this.currentQuestion].propositions;
    for (let i = 0; i < propositions.length; i++) {
      if(id == i){
        this.questions[this.currentQuestion].propositions[i].isChosen = true;
      } else {
        this.questions[this.currentQuestion].propositions[i].isChosen = false;
      }
    }
  }

  confirmAnswer(){
    var propositions = this.questions[this.currentQuestion].propositions;
    for (let i = 0; i < propositions.length; i++) {
      if(propositions[i].isChosen && propositions[i].isGoodAnswer){
        this.goodAnswerCount++
      }
      // Next question when the loop is over
      if(i == (propositions.length - 1)){
        this.currentQuestion++
        // Get the next question
        if(this.currentQuestion < 4){
          this.getQuestion(this.currentQuestion + 1);
        }
      }
    }
  }

  getResults(){
    this.DataSharingService.setAnswerCount(this.goodAnswerCount);
    this.router.navigate(['/result']);
  }

}
