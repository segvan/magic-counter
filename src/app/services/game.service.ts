import { Subject } from "rxjs/Subject";

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