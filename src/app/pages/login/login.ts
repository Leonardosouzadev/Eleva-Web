import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Loginform } from '../../components/loginform/loginform';
import { Registerform } from "../../components/registerform/registerform";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, Loginform, Registerform],
  templateUrl: './login.html',
  styleUrl: './login.scss',   // << CORRETO!
})
export class Login implements OnInit, OnDestroy {
  tela: 'login' | 'register' = 'login';
  
 
  images = [
    'https://images.dog.ceo/breeds/husky/n02110185_1469.jpg', 
    'https://fastly.picsum.photos/id/40/400/300.jpg?hmac=8AGnAXOIIdCQBjrJbgkbN_3MwNkcN_UFm1dfEvy_p9g', 
    'https://placedog.net/600/400'
  ];
  
  currentImageIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 5000); // Troca a cada 5 segundos
  }

  screenLogin() { this.tela = 'login'; }
  screenRegister() { this.tela = 'register'; }
}
