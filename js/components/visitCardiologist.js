import {Visit} from "./visitClass";

export class VisitCardiologist extends Visit {
    constructor() {
        super();
        this.fields = [
            {
                normalPressure: 'Normal pressure',
                bodyWeightIndex: 'Body weight index',
                pastIllnesses: 'Past illnesses of the cardiovascular system',
                age: 'Age'}
        ];
    }
}

