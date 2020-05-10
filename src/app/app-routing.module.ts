import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NightstandThreejsComponent } from './nightstand-threejs/nightstand-threejs.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomePageComponent },
  { path: 'nightstand', component:NightstandThreejsComponent },
  // Type additional Path's here
  { path: '404', component:PageNotFoundComponent },
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
