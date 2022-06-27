import { Component, OnInit } from '@angular/core';
import SwiperCore, {Autoplay, EffectFade} from 'swiper';
SwiperCore.use([Autoplay, EffectFade]);

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  constructor() { }

  images:any = [{
    url:"assets/img/slide/1.webp"
  },{
    url:"assets/img/slide/2.webp"
  },{
    url:"assets/img/slide/3.webp"
  },{
    url:"assets/img/slide/4.webp"
  },{
    url:"assets/img/slide/5.webp"
  }]

  ngOnInit(): void {
  }

}
