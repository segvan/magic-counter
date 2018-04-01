import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Configuration } from '../models/configuration.model';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.scss']
})
export class SettingsFormComponent implements OnInit {
  @Input() dialogId: string;
  @ViewChild('closeSettingsDialog') closeBtn: ElementRef;

  configuration: Configuration;

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.configuration = this.settingsService.configuration;
  }

  onSubmit() {
    this.settingsService.configuration = this.configuration;
    this.closeBtn.nativeElement.click();
  }
}
