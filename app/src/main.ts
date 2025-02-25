import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAuth0({
      domain: 'your-auth0-domain.auth0.com', // Replace with your Auth0 domain
      clientId: 'your-auth0-client-id', // Replace with your Auth0 client ID
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
}).catch((err) => console.error(err));