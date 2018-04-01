import { AlertTypes } from "../enums/alert-typs.enum";

export class AlertParams {
    type: AlertTypes;
    text: string;
    duration: number;
}