import { NgModule } from '@angular/core';
import { WinterComponent } from './winter.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [WinterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: WinterComponent
      }
    ])
  ]
})

export class WinterModule {}