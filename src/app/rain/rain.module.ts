import { NgModule } from '@angular/core';
import { RainComponent } from './rain.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: RainComponent
      }
    ])
  ]
})
export class RainModule {}