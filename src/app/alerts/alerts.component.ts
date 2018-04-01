import { Component, OnInit, Input } from '@angular/core';
import { AlertParams } from '../models/alert-params.model';
import { AlertService } from '../services/alert.service';
import { AlertTypes } from '../enums/alert-typs.enum';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  @Input() parameters: AlertParams;

  visible: boolean;

  constructor(private alertService: AlertService) {
    this.parameters = <AlertParams>{};
  }

  ngOnInit() {
    this.alertService.showAlert.subscribe(
      params => {
        this.parameters.text = params.text;
        this.parameters.type = params.type;
        this.visible = true;
        setTimeout(() => {
          this.visible = false;
        }, params.duration);
      }
    );
  }

  alertClass(atype: AlertTypes) {
    switch (atype) {
      case AlertTypes.Info:
        return 'alert-secondary';
      case AlertTypes.Success:
        return 'alert-success';
      case AlertTypes.Warning:
        return 'alert-danger';
    }
  }
}
