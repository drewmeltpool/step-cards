import {Visit} from "visitClass";

export class VisitTherapist extends Visit {
    constructor() {
        super();
        this.fields = [
            {
                age: 'Age'
            }
        ];
    }
}
