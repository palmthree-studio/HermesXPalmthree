import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hermes';
  scrollPercent: number = 0;

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

}
