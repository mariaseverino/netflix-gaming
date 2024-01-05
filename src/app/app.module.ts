import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';
import { HeaderComponent } from './components/header/header.component';
import { GameInfoComponent } from './components/game-info/game-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarrosselComponent,
    HeaderComponent,
    GameInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
