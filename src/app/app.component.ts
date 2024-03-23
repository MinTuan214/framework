import { Component } from '@angular/core';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Minh Tuấn';
  selectedColor: string | null = null;
  selectedSize: string | null = null;
  currentImage: string = '../assets/images/ipden.png';
  sequence: number = 1;
  bestSales: boolean = false;

  activebl() {
    this.selectedColor = 'Đen';
    this.currentImage = '../assets/images/ipden.png';
    this.sequence = 1;
  }
  activered() {
    this.selectedColor = 'Đỏ';
    this.currentImage = '../assets/images/do2.webp';
    this.sequence = 2;
  } 
  activegreen() {
    this.selectedColor = 'Xanh lá';
    this.currentImage = '../assets/images/xanh.png';
    this.sequence = 3;
  }
  activeda() {
    this.selectedColor = 'Vàng Gold';
    this.currentImage = '../assets/images/gold.png';
    this.sequence = 4;

  }
  activeyellow() {
    this.selectedColor = 'Vàng đậm';
    this.currentImage = '../assets/images/chuoi.jpg';
    this.sequence = 5;

  }

  activeSize1(){
    this.selectedSize = '32';
  }
  activeSize2(){
    this.selectedSize = '54';
  }
  activeSize3(){
    this.selectedSize = '128';
  }
  activeSize4(){
    this.selectedSize = '256';
  }
}
