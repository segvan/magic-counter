import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { LifeCounterPanelComponent } from './life-counter-panel/life-counter-panel.component';
import { PlayerService } from './services/player.service';
import { SettingsService } from './services/settings.service';
import { FormsModule } from '@angular/forms';
import { SettingsFormComponent } from './settings-form/settings-form.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AlertService } from './services/alert.service';
import { FooterComponent } from './footer/footer.component';
import { PersistanceService } from './services/persistance.service';
import { StatisticsComponent } from './statistics/statistics.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    LifeCounterPanelComponent,
    SettingsFormComponent,
    AlertsComponent,
    FooterComponent,
    StatisticsComponent,
    GameBoardComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    PlayerService,
    SettingsService,
    AlertService,
    PersistanceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
