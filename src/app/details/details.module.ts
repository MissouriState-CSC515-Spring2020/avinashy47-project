import { NgModule } from '@angular/core';
import { DetailsComponent } from './details.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: DetailsComponent
      }
    ])
  ]
}) 
export class DetailsModule {}