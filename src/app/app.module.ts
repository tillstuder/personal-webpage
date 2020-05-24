import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NightstandThreejsComponent } from './nightstand-threejs/nightstand-threejs.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProjectCardsComponent } from './project-cards/project-cards.component';
import { PageForbiddenComponent } from './page-forbidden/page-forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomePageComponent,
    NightstandThreejsComponent,
    NavBarComponent,
    ProjectCardsComponent,
    PageForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
