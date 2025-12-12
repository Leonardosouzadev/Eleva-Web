// src/app/components/my-profile/my-profile.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-profile.html',
  styleUrl: './my-profile.scss'
})
export class MyProfile {

  profile: any;
  private route = inject(ActivatedRoute);

  constructor() {
    this.profile = this.route.snapshot.data['profile'];
    console.log('Perfil carregado pelo resolver:', this.profile);
  }
}
