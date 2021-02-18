import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationModule } from '@app/@components/navigation/navigation.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavigationModule],
})
export class HomeModule { }
