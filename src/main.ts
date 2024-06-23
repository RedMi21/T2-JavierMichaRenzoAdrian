import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      FormsModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatButtonModule,
      MatFormFieldModule
    ),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
