import { Component } from '@angular/core';
import { StartBannerComponent } from "../start-banner/start-banner.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [StartBannerComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
