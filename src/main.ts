import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';

//trabajamos con appModule
platformBrowserDynamic().bootstrapModule(AppModule).catch(err=> console.error(err));

// bootstrapApplication(AppComponent)
//   .catch(err => console.error(err));