import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { SettingsService } from '../services/settings.service';
import { AlertService } from '../services/alert.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  currentRoute: string;

  constructor(private playerService: PlayerService,
    private settingsService: SettingsService,
    private alserService: AlertService,
    private router: Router, ) {
  }

  ngOnInit() {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .subscribe((event) => {
        this.currentRoute = this.router.url;
      });
  }

  newGame() {
    this.alserService.showInfo('New game starts now.');
    this.playerService.resetLifeTotal.next(this.settingsService.configuration.InitialLifeTotal);
  }

  saveStatistics() {
    this.alserService.showSuccess('Current game saved.');
  }
}
