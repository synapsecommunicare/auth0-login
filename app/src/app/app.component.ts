import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit{
  constructor(public auth: AuthService, private router: Router) {
    
  }

  ngOnInit() {
    // Subscribe to the authentication state
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        // Redirect to the home page if authenticated
        this.router.navigate(['/home']);
      } else {
        // Redirect to the login page if not authenticated
        this.router.navigate(['/login']);
      }
    });
  }
}