import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { AlertService } from '../services/alert.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  currentRoute: string;

  constructor(private gameService: GameService,
    private settingsService: SettingsService,
    private alserService: AlertService,
    private router: Router, ) {
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        this.currentRoute = this.router.url;
      });
  }

  newGame() {
    this.alserService.showInfo('New game starts now.');
    this.gameService.resetLifeTotal.next(this.settingsService.configuration.InitialLifeTotal);
  }

  saveStatistics() {
    this.alserService.showSuccess('Added to statistics.');
    this.gameService.saveGame.next();
  }
}
