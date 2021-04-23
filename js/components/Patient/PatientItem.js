import { ElementBuild } from '../../components/Constructor/elementBuild.js'
import { Button, Icon } from '../../components/Constructor/elements.js'

export class PatientItem {
	constructor(obj) {
		const id = obj.id
		const data = Object.values(obj).map(textContent =>
			new ElementBuild().tag('p').options({ textContent })
		)
		return new ElementBuild()
			.tag('div')
			.options({ className: 'patient__inner-card' })
			.children(
				new ElementBuild()
					.tag('div')
					.options({ className: 'patient-card__options' })
					.children(new Button('btn--icon').children(new Icon('fas fa-edit')))
					.children(new Button('btn--icon').children(new Icon('fas fa-trash'))),
				new ElementBuild()
					.tag('div')
					.options({ className: 'patient-card__content' })
					.children(...data),
				new ElementBuild()
					.tag('div')
					.options({ className: 'patient-card__options' })
					.children(
						new Button('btn--icon').children(new Icon('fas fa-chevron-down'))
					)
			)
	}
}
