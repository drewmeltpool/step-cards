import { ElementBuild } from '../../../components/Constructor/elementBuild.js'

export class Content {
	constructor(item) {
		return new ElementBuild()
			.tag('main')
			.options({ className: 'main' })
			.children(item)
	}
}
