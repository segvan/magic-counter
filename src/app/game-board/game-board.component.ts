import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player.model';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styles: [".row{ margin-top: 1.8rem !important; }"]
})
export class GameBoardComponent implements OnInit {

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
