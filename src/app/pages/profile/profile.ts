import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navheader } from '../../components/navheader/navheader';
import { Footer } from '../../components/footer/footer';
import { MyProfile } from '../../components/my-profile/my-profile';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule, Navheader, Footer, MyProfile],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {

}
