import { Configuration } from "../models/configuration.model";
import { Player } from "../models/player.model";
import { AlertService } from "./alert.service";
import { Injectable } from "@angular/core";

export class PersistanceService {
    private readonly _configKey = "mc-config";
    private readonly _playersKey = "mc-players";
    private readonly _statisticsKey = "mc-statistics";

    private _configuration: Configuration;
    private _players: Player[];

    getConfiguration(): Configuration {
        let result;
        const config = localStorage.getItem(this._configKey);
        if (config) {
            try {
                result = JSON.parse(config);
            } catch (exc) {
                console.log("Unable to load configuration.");
            }
        }

        return result;
    }

    setConfiguration(config: Configuration) {
        localStorage.setItem(this._configKey, JSON.stringify(config));
    }
}