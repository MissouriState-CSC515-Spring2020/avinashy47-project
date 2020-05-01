import { NgModule } from '@angular/core';
import { SpringComponent } from './spring.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SpringComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: SpringComponent
      }
    ])
  ]
})
export class SpringModule {}