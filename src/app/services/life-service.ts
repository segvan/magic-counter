import { Subject } from "rxjs/Subject";

export class LifeService {
    lifeTotal = new Subject<number>();
    resetLifeTotal = new Subject();

    private _lifeTotal: number;

    setLifeTotal(total: number) {
        this._lifeTotal = total;
        this.lifeTotal.next(total);
    }

    incrementLifeTotal() {
        this._lifeTotal++;
        this.lifeTotal.next(this._lifeTotal);
    }

    decrementLifeTotal() {
        this._lifeTotal--;
        this.lifeTotal.next(this._lifeTotal);
    }
}