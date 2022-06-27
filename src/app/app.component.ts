import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hermès x Palmthree | Quizz sur l\'histoire de la marque';
  scrollPercent: number = 0;
  readyPercent: number = 0;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event:any){
    this.getScrollPercent();
  } 

   getScrollPercent() {
    var h:any = document.documentElement, 
        b:any = document.body,
        st:any = 'scrollTop',
        sh:any = 'scrollHeight';
    this.scrollPercent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;    
  }

  imgLoaded(event:any){
    this.readyPercent += 7.7;
    var allBody = document.querySelector<HTMLElement>("body");
    if(this.readyPercent >= 100){
      allBody!.style.setProperty('overflow-y', 'auto', 'important');
    } else {
      allBody!.style.setProperty('overflow-y', 'hidden', 'important');
    }
  }

}
