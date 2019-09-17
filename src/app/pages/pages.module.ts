import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MyworkComponent } from './mywork/mywork.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

@NgModule({
  declarations: [ MyworkComponent, AboutmeComponent],
  imports: [
    CommonModule, 
    HomeModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
