import {Doctor} from "./Doctor.js";
import {Form} from "../layouts/Form.js";
import {getInputValue} from "../DOM/dom.js";
import {Api} from "../../api/api.js";

export class Visit {
    constructor(visitGoal, description, urgency, fullname) {
        this.visitGoal = visitGoal;
        this.description = description;
        this.urgency = urgency;
        this.fullname = fullname;
    }
}

class VisitCardiologist extends Visit {
    constructor(pressure, weight, hearDisease, age, visitGoal, description, urgency, fullName) {
        super(visitGoal, description, urgency, fullName)
        this.pressure = pressure;
        this.weight = weight;
        this.heartDisease = heartDisease;
        this.age = age;
    }

    createForm() {
        new Form()
            .input('text', 'visitGoal')
            .input('text', 'pressure')
            .input('text', 'weight')
            .input('text', 'heartDisease')
            .input('text', 'age' )
            .input('text', 'fullName' )
            .input('text', 'urgency')
            .textArea('description')
            .button('Создать визит')
            .submit(() => {
               const api = new Api()
                api.setToken(
                    localStorage.getItem('token')
                )
            })
    }
}

class VisitDentist extends Visit {
    constructor(visitGoal, lastVisit, description, urgency, fullName) {
        super(visitGoal, description, urgency, fullName)
        this.lastVisit = lastVisit;

    }
}

class Therapist extends Visit {
    constructor(age, visitGoal, description, urgency, fullName) {
        super(visitGoal, description, urgency, fullName)
        this.age = age;
    }
}