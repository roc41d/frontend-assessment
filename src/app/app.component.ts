import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./shared/ui/nav-bar/nav-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
      @if (showNavigationBar) {
        <app-nav-bar></app-nav-bar>
      }
      <router-outlet></router-outlet>
    `,
    styles: [],
    imports: [CommonModule, RouterOutlet, NavBarComponent]
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  showNavigationBar!: boolean;

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.showNavigationBar = !this.activatedRoute.firstChild?.snapshot.data['hideNavigationBar'];
    });
  }
}
