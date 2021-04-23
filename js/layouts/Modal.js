import { ElementBuild } from '../components/constructor/elementBuild.js'

const root = document.querySelector('#root')

export class Modal {
	constructor(item) {
		this.modalWrapper = new ElementBuild()
			.parent(root)
			.tag('div')
			.options({ className: 'modal active', id: 'myModal' })
		// .eventListener('click', () => {
		//     const modal = document.querySelector('#myModal')
		//     console.log(modal)
		// })
		this.modal = new ElementBuild()
			.tag('div')
			.options({ className: 'modal-content active' })
			.children(
				new ElementBuild()
					.tag('span')
					.options({ className: 'close', textContent: 'x' })
					.eventListener('click', () => {
						this.modalWrapper.options({ className: 'modal' })
					})
			)
			.children(item)
	}

	render() {
		this.modalWrapper.children(this.modal).render()
	}

	renderDoctorsSelect() {
		return new DoctorsList().render()
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
