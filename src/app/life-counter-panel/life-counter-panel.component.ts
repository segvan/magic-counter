import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../models/player.model';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-life-counter-panel',
  templateUrl: './life-counter-panel.component.html',
  styleUrls: ['./life-counter-panel.component.scss']
})
export class LifeCounterPanelComponent implements OnInit {

  @Input() player: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.resetLifeTotal.subscribe((newTotal) => {
      this.player.LifeTotal = newTotal;
    });
  }

  decrementLife() {
    this.player.LifeTotal--;
  }

  incrementLife() {
    this.player.LifeTotal++;
  }
}
