import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import {Swiper} from "swiper";

@Component({
  selector: 'app-slider-with-taps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-with-taps.component.html',
  styleUrl: './slider-with-taps.component.css'
})

export class SliderWithTapsComponent implements AfterViewInit, OnInit  {
  swiperTaps: Swiper = new Swiper('.mySwiper');
  swiper: Swiper = new Swiper(".taps_swiper_container");
  
  constructor(private router: Router){}
  ngAfterViewInit(){
    
  }
  ngOnInit(): void {
    this.swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      loop: true,
      // autoplay: {
      //     delay: 1500,
      //     disableOnInteraction: false,
      // },
      pagination: {
          el: ".swiper-pagination",
          clickable: true
      }
    });
    this.swiperTaps = new Swiper(".taps_swiper_container", {
      slidesPerView: 6,
      spaceBetween: 15,
      // autoplay: {
      //     delay: 1500,
      //     disableOnInteraction: false,
      // },
      breakpoints: {
          320: {
              slidesPerView: 1,
              spaceBetween: 15,
          },
          640: {
              slidesPerView: 3,
              spaceBetween: 15,
          },
          992: {
              slidesPerView: 6,
              spaceBetween: 15,
          }
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      }
    });
  }
  goSellCar() {
    this.router.navigate(['SellCar']);
  }
}
