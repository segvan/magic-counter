import { Component, OnInit } from '@angular/core';
import { LifeService } from './services/life-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rotate: boolean;
  opponentName: string;
  myName: string;
  startLife: number;

  constructor(private lifeServce: LifeService) {
  }

  ngOnInit() {
    this.rotate = false;
    this.opponentName = "Opponent";
    this.myName = "Me";
    this.startLife = 20;
  }
}
