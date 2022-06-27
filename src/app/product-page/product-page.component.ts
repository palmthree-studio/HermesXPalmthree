import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  product:any;
  productSub:any;
  isActive:boolean = false;
  skillsReady:boolean = false;

  constructor(
    private http:HttpService,
    private cd:ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.productSub = this.http.getProduct(0).subscribe(product =>{
      this.product = product;
      this.cd.detectChanges();
      this.initSkills();
    })
  }

  initSkills(){
    this.product.skills = this.myFilter(this.product.skills);
    this.product.usedTechs = this.myFilter(this.product.usedTechs);
    console.log(this.product);
    this.isActive = true;
    this.skillsReady = true;
    this.cd.detectChanges();
  }

  myFilter(list:any){
    var count = 0;
    var arr:any = []
    var finalArr:any = []
    for (let i = 0; i < list.length; i++) {

      // Fiouuu, a lot of conditions here ! But it's simple :
      // The first condition means that if the count is 8 and the loop is not over yet, we can push the "arr" array inside the "finalArr" array and continue the count.
      // The second condition means that if the loop is over (And even if the count is equal or not to 8), we have to push the current "arr" array into the "finalArr" array before cleaning our list array and pushing the "finalArr" into our list array.
      // The last condition means that we can continue to push list item into our current "arr" array.

      if(count == 8 && (i != (list.length - 1))){
        arr.push(list[i]);
        finalArr.push(arr);
        arr = []
        count = 0;
      } else if(i == (list.length - 1)) {
        arr.push(list[i]);
        finalArr.push(arr);
        list = [];
        list.push(finalArr);
        return list;
      } else {
        arr.push(list[i]);
        count++;
      }
      
    }
  }

}
