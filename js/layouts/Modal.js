import { ElementBuild } from '../components/constructor/elementBuild.js'

const root = document.querySelector('#root')

export class Modal {
	constructor(item) {
		this.modalWrapper = new ElementBuild()
			.parent(root)
			.tag('div')
			.options({ className: 'modal', id: 'modal' })
			.eventListener('click', () => this.destroy())
		this.modal = new ElementBuild()
			.tag('div')
			.options({ className: 'modal-content' })
			.children(
				new ElementBuild()
					.tag('span')
					.options({ className: 'close', textContent: 'x' })
					.eventListener('click', () => this.destroy())
			)
			.children(item)
	}
	render() {
		this.modalWrapper.children(this.modal).render()
	}

	destroy() {
		document.querySelector('#modal').remove()
	}
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
