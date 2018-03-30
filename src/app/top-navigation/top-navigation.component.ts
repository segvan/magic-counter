import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LifeService } from '../services/life-service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent {

  constructor(private lifeService: LifeService) {
  }

  newGame() {
    this.lifeService.resetLifeTotal.next();
  }
}
