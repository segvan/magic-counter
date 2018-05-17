import { Subject } from "rxjs";

export class GameService {

    resetLifeTotal = new Subject<number>();
    saveGame = new Subject();

    constructor() {
        this.saveGame.subscribe(
            () => {
                console.log('save save!');
            });
    }
}