import { Configuration } from "../models/configuration.model";
import { Injectable } from "@angular/core";

Injectable()
export class SettingsService {

    private _configuration: Configuration;

    get configuration(): Configuration {
        return { ...this._configuration };
    }

    set configuration(config: Configuration) {
        this._configuration.InitialLifeTotal = config.InitialLifeTotal;
        this._configuration.PlayersNumber = config.PlayersNumber;
    }

    constructor() {
        this._configuration = <Configuration>{
            InitialLifeTotal: 20,
            ShowEnergyCounter: false,
            WinBestOf: 2,
            PlayersNumber: 2
        };
    }
}
