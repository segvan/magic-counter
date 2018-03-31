import { Component, OnInit } from '@angular/core';
import { Player } from './models/player.model';
import { PlayerService } from './services/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  opponent: Player;
  me: Player;

  constructor(private playerService: PlayerService) {
  }

  ngOnInit() {
    const players = this.playerService.getPlayers();
    this.opponent = players[0];
    this.me = players[1];
  }
}
