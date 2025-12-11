import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { ProfileService } from '../../core/services/profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-profile',
  imports: [CommonModule],
  templateUrl: './my-profile.html',
  styleUrl: './my-profile.scss',
})
export class MyProfile {

  user: any;
  userPerson: any = null;

  constructor(
    private auth: AuthService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.user = this.auth.getUserData();

    if (this.user?.sub) {
      this.profileService.getById(this.user.sub).subscribe({
        next: (result) => {
          this.userPerson = result;
          console.log("Profile recebido:", this.userPerson);
        },
        error: (err) => console.error("Erro ao carregar perfil:", err)
      });
    }
  }
}