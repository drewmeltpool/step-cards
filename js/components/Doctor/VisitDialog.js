import { dialogs } from './Dialog.js'

export class VisitForm {
	constructor(type) {
		this.type = type
	}

	create() {
		return dialogs.find(item => item.type === this.type).form()
	}
}
