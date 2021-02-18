import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NavigationComponent } from './navigation.component';



@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    NgxPageScrollCoreModule.forRoot({ duration: 800 }),
    NgxPageScrollModule
  ],
  exports: [NavigationComponent]
})
export class NavigationModule { }
