import { ElementBuild } from '../components/constructor/elementBuild.js'

const root = document.querySelector('#root')


export class Modal {
    constructor(item) {
        this.modalWrapper = new ElementBuild()
            .parent(root)
            .tag('div')
            .options({className: 'modal', id: "myModal"})
        this.modal = new ElementBuild()
            .tag('div')
            .options({className: 'modal-content'})
            .children(
                new ElementBuild()
                    .tag('span')
                    .options({className: "close", textContent: 'x'})
            )
            .children(item)
    }

    render() {
        this.modalWrapper.children(this.modal).render()
    }

    destroy() {
        const modal = document.querySelector('#myModal')
        const root = document.querySelector('#root')
        root.removeChild(modal)
    }

    renderDoctorsSelect() {
        return new DoctorsList().render();
    };
}

// export class DoctorsList {
//     constructor() {
//     }
//     render() {
//         return `<form id="visitForm">
//                     <div class="form-group">
//                         <label for="typeOfDoctor">Choose a doctor</label>
//                         <select class="visit-form-input">
//                             <option value="chose">Please, choose a doctor</option>
//                             <option value="cardiologist">Cardiologist</option>
//                             <option value="therapist">Therapist</option>
//                             <option value="dentist">Dentist</option>
//                         </select>
//                     </div>
//                  </form>`
//     }
// }
