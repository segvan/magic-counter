import { Subject } from "rxjs/Subject";
import { Player } from "../models/player.model";
import { SettingsService } from "./settings.service";
import { Injectable } from "@angular/core";

@Injectable()
export class PlayerService {

    resetLifeTotal = new Subject<number>();

    private players: Player[];

    constructor(private settingsService: SettingsService) {
    }

    getPlayers() {
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
        return this.players;
    }
}
