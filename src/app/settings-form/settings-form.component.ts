import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Configuration } from '../models/configuration.model';
import { SettingsService } from '../services/settings.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.scss']
})
export class SettingsFormComponent implements OnInit {
  @Input() dialogId: string;
  @ViewChild('closeSettingsDialog') closeBtn: ElementRef;

  configuration: Configuration;

  constructor(private settingsService: SettingsService, private alertService: AlertService) { }

  ngOnInit() {
    this.configuration = this.settingsService.configuration;
  }

  onSubmit() {
    this.settingsService.configuration = this.configuration;
    this.alertService.showSuccess("Configuration saved.");
    this.closeBtn.nativeElement.click();
  }
}
