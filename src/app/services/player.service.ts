import { Subject } from "rxjs/Subject";
import { Player } from "../models/player.model";
import { SettingsService } from "./settings.service";
import { Injectable } from "@angular/core";

@Injectable()
export class PlayerService {

    private players: Player[];

    constructor(private settingsService: SettingsService) {
    }

    getPlayers() {
        if (!this.players) {
            this.players = <Player[]>[
                <Player>{
                    Id: 1,
                    Name: 'Opponent',
                    Reversed: false,
                    LifeTotal: this.settingsService.configuration.InitialLifeTotal
                },
                <Player>{
                    Id: 2,
                    Name: 'Me',
                    Reversed: false,
                    LifeTotal: this.settingsService.configuration.InitialLifeTotal
                }
            ];
        }

        return this.players;
    }
}
