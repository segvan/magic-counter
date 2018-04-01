import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { LifeCounterPanelComponent } from './life-counter-panel/life-counter-panel.component';
import { PlayerService } from './services/player.service';
import { SettingsService } from './services/settings.service';
import { FormsModule } from '@angular/forms';
import { SettingsFormComponent } from './settings-form/settings-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    LifeCounterPanelComponent,
    SettingsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    PlayerService,
    SettingsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
