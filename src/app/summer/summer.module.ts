import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummerComponent } from './summer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SummerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: SummerComponent
      }
    ])
  ]
})
export class SummerModule { }
