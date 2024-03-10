/*
*  Protractor support is deprecated in Angular.
*  Protractor is used in this example for compatibility with Angular documentation tools.
*/
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent,
  {
    providers: [
      provideProtractorTestingSupport(),
      provideAnimationsAsync(),
      provideRouter(routeConfig)
    ]
  }
).catch(err => console.error(err));
