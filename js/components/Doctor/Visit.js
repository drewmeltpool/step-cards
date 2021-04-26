import {Doctor} from "./Doctor.js";
import {Form} from "../layouts/Form.js";
import {getInputValue} from "../DOM/dom.js";
import {Api} from "../../api/api.js";

class Visit {
    constructor(visitGoal, description, urgency, fullname) {
        this.visitGoal = visitGoal;
        this.description = description;
        this.urgency = urgency;
        this.fullname = fullname;
    }

}

export class CreateVisit {
    constructor(visit) {
        this.visit = visit;
    }

    async create() {
        const api = new Api()
        api.setToken(localStorage.getItem('token'))
        await api.addCard(this.visit);
    }
}

export class VisitCardiologist extends Visit {
    constructor(pressure, weight, heartDisease, age, visitGoal, description, urgency, fullname) {
        super(visitGoal, description, urgency, fullname)
        this.pressure = pressure;
        this.weight = weight;
        this.heartDisease = heartDisease;
        this.age = age;
    }
}

export class VisitDentist extends Visit {
    constructor(visitGoal, description, urgency, fullName, lastVisit) {
        super(visitGoal, description, urgency, fullName)
        this.lastVisit = lastVisit;

    }
}

export class Therapist extends Visit {
    constructor(age, visitGoal, description, urgency, fullName) {
        super(visitGoal, description, urgency, fullName)
        this.age = age;
    }
}