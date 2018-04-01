import { Component } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { SettingsService } from '../services/settings.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent {

  constructor(private playerService: PlayerService,
    private settingsService: SettingsService,
    private alserService: AlertService) {
  }

  newGame() {
    this.alserService.showInfo('New game starts now.');
    this.playerService.resetLifeTotal.next(this.settingsService.configuration.InitialLifeTotal);
  }
}
