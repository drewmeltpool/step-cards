import { dialogs } from './Dialog.js'

export class VisitDialog {
	constructor(type) {
		return dialogs.find(item => item.type === type)
	}
}
