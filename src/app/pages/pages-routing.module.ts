import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyworkComponent } from './mywork/mywork.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

const routes: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  {path: 'mywork', component: MyworkComponent},
    {path: 'Aboutme', component: AboutmeComponent},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})

export class PagesRoutingModule { }
