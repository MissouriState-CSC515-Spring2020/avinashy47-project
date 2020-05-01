import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummerComponent } from './summer/summer.component';
import { RainComponent } from './rain/rain.component';
import { WinterComponent } from './winter/winter.component';
import { SpringComponent } from './spring/spring.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'',loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'summer', component: SummerComponent },
  { path: 'rain', component: RainComponent },
  { path: 'winter', component: WinterComponent },
  { path: 'spring', component: SpringComponent },
  {path:'details', component: DetailsComponent},
  // {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
