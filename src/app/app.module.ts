import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { LifeCounterPanelComponent } from './life-counter-panel/life-counter-panel.component';
import { LifeService } from './services/life-service';


@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    LifeCounterPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LifeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
