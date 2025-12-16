import { Component } from '@angular/core';
import { Navheader } from "../../components/navheader/navheader";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-tasks',
  imports: [Navheader, Footer],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {

}
