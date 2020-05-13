import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummerComponent } from './summer/summer.component';
import { WinterComponent } from './winter/winter.component';
import { SpringComponent } from './spring/spring.component';
import { RainComponent } from './rain/rain.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
//import { VideoComponent } from './video.component';
// new trial
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { YouTubeService } from './youtube.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    // SummerComponent,
    // WinterComponent,
    // SpringComponent,
    // RainComponent,
    // DetailsComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    // BrowserModule.withServerTransition({ appId: 'angular-starter' }),
    // BrowserTransferStateModule,
    // AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    NgxSpinnerModule,
    RouterModule.forRoot([
      {
        path: '', 
        loadChildren: () =>  import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'summer', 
        loadChildren: () =>  import('./summer/summer.module').then(m => m.SummerModule)
      },
      {
        path: 'rain', 
        loadChildren: () =>  import('./rain/rain.module').then(m => m.RainModule)
      },
      {
        path: 'winter', 
        loadChildren: () =>  import('./winter/winter.module').then(m => m.WinterModule)
      },
      {
        path: 'spring', 
        loadChildren: () =>  import('./spring/spring.module').then(m => m.SpringModule)
      }
      ,
      {
        path: 'details', 
        loadChildren: () =>  import('./details/details.module').then(m => m.DetailsModule)
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

