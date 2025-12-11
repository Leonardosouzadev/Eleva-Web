import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navheader } from '../../components/navheader/navheader';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule, Navheader, Footer],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {

}
