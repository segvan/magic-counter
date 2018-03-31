import { Configuration } from "../models/configuration.model";

export class SettingsService {

    private configuration: Configuration;

    constructor() {
        this.configuration = <Configuration>{
            InitialLifeTotal: 20,
            ShowEnergyCounter: false,
            WinBestOf: 2
        };
    }

    getInitialLifeTotal() {
        return this.configuration.InitialLifeTotal;
    }
}
