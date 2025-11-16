import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(App, {
  ...appConfig, // spread existing appConfig (e.g., providers, imports)
  providers: [
    ...(appConfig.providers || []), // keep existing providers
    provideHttpClient()             // add HttpClient provider
  ]
})
.catch(err => console.error(err));
