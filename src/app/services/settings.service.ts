import { Configuration } from "../models/configuration.model";
import { Injectable, OnInit } from "@angular/core";
import { PersistanceService } from "./persistance.service";

@Injectable()
export class SettingsService {

    private _configuration: Configuration;

    get configuration(): Configuration {
        if (!this._configuration) {
            this.loadConfiguration();
        }

        return { ...this._configuration };
    }

    set configuration(config: Configuration) {
        this._configuration.InitialLifeTotal = config.InitialLifeTotal;
        this._configuration.PlayersNumber = config.PlayersNumber;
        this._configuration.ShowEnergyCounter = config.ShowEnergyCounter;

        this.persistanceService.setConfiguration(this._configuration);
    }

    constructor(private persistanceService: PersistanceService) {
    }

    loadConfiguration() {
        const storageConfig = this.persistanceService.getConfiguration();
        if (storageConfig) {
            this._configuration = <Configuration>{};
            this.configuration = storageConfig;
        } else {
            this._configuration = <Configuration>{
                InitialLifeTotal: 20,
                ShowEnergyCounter: false,
                WinBestOf: 2,
                PlayersNumber: 2
            };
        }
    }
}
