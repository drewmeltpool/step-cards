import { dialogs } from './Dialog.js'

export class VisitForm {
	constructor(type) {
		return dialogs.find(item => item.type === type).form()
	}
}
