import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'; 

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  imports: [MatToolbarModule],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(500)),
    ]),
  ],
})
export class NavBarComponent {

}
