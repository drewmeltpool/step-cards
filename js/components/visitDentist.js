import {Visit} from "./visitClass";

export class VisitDentist extends Visit {
    constructor() {
        super();
        this.fields = [
            {
                lastVisit: 'Date of last visit'
            }
        ];
    }
}

