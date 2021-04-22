import {Visit} from "./visitClass";
import {VisitCardiologist} from "./VisitCardiologist.js";
import {VisitTherapist} from "./VisitTherapist.js";
import {VisitDentist} from "./VisitDentist.js";

class RenderByDoctor {
    constructor(doctor) {
        this.doctor = doctor;
    }

    render(element) {
        let inputField =


        if (this.doctor === 'cardiologist') {
            new VisitCardiologist().fields.forEach(item => {
                inputField += new Input(item).render();
            })
        } else if (this.doctor === 'therapist') {
            new VisitTherapist().fields.forEach(item => {
                inputField += new Input(item).render();
            })
        } else if (this.doctor === 'dentist') {
            new VisitDentist().fields.forEach(item => {
                inputField += new Input(item).render();
            })
        }
        element.innerHTML = inputField;
    }
}
