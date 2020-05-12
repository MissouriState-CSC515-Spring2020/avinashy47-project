import { BrowserModule } from '@angular/platform-browser';
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


@NgModule({
  declarations: [
    AppComponent,
    SummerComponent,
    WinterComponent,
    SpringComponent,
    RainComponent,
    DetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [YouTubeService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }

