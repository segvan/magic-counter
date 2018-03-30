import { Component, OnInit, Input } from '@angular/core';
import { LifeService } from '../services/life-service';

@Component({
  selector: 'app-life-counter-panel',
  templateUrl: './life-counter-panel.component.html',
  styleUrls: ['./life-counter-panel.component.scss']
})
export class LifeCounterPanelComponent implements OnInit {

  @Input() rotate: boolean;
  @Input() name: string;
  @Input() startLife: number;

  life: number;

  constructor(private lifeService: LifeService) { }

  ngOnInit() {
    this.life = this.startLife;

    this.lifeService.resetLifeTotal.subscribe(() => {
      this.life = this.startLife;
    }
    );
  }

  decrementLife() {
    this.life--;
  }

  incrementLife() {
    this.life++;
  }
}
