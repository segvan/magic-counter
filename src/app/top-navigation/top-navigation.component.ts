import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { SettingsService } from '../services/settings.service';
import { NgForm } from '@angular/forms';
import { Configuration } from '../models/configuration.model';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent {

  constructor(private playerService: PlayerService, private settingsService: SettingsService) {
  }

  newGame() {
    this.playerService.resetLifeTotal.next(this.settingsService.configuration.InitialLifeTotal);
  }
}
