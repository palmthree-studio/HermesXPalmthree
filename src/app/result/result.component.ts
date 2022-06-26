import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  result:any;
  countSub:any;
  resultSub:any;
  isActive:boolean = false;

  constructor(
    private DataSharingService:DataSharingService,
    private http:HttpService,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.countSub = this.DataSharingService.getAnswerCount().subscribe(count =>{
      this.getResult(count);
      this.countSub.unsubscribe();
    })
  }

  getResult(count:any){
    this.resultSub = this.http.getResult(count).subscribe(result =>{ 
      this.result = result;
      this.resultSub.unsubscribe();
      this.isActive = true;
    })
  }

  goToProduct(){
    this.router.navigate(['/product-page'])
    .then(() => {
      window.location.reload();
    });
  }

}
