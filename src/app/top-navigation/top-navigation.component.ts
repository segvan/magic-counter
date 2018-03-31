import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent {

  constructor(private playerService: PlayerService, private settingsService: SettingsService) {
  }

  newGame() {
    this.playerService.resetLifeTotal.next(this.settingsService.getInitialLifeTotal());
  }
}
