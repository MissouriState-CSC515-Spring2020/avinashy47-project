import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummerComponent } from './summer/summer.component';
import { RainComponent } from './rain/rain.component';
import { WinterComponent } from './winter/winter.component';
import { SpringComponent } from './spring/spring.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'summer', component:SummerComponent},
  {path:'rain', component:RainComponent},
  {path:'winter',component:WinterComponent},
  {path:'spring',component:SpringComponent},
  {path:'details',component:DetailsComponent},
  {path:'',component:HomeComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
