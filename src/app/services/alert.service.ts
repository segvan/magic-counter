import { Subject } from "rxjs/Subject";
import { AlertParams } from "../models/alert-params.model";
import { AlertTypes } from "../enums/alert-typs.enum";

export class AlertService {
    showAlert = new Subject<AlertParams>();
    duration = 1500;

    showInfo(text: string) {
        this.showAlert.next(<AlertParams>{
            type: AlertTypes.Info,
            text: text,
            duration: this.duration
        });
    }

    showSuccess(text: string) {
        this.showAlert.next(<AlertParams>{
            type: AlertTypes.Success,
            text: text,
            duration: this.duration
        });
    }

    showWarning(text: string) {
        this.showAlert.next(<AlertParams>{
            type: AlertTypes.Warning,
            text: text,
            duration: this.duration
        });
    }
}