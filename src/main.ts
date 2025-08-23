// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import '@splinetool/viewer'; // registers <spline-viewer>

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
