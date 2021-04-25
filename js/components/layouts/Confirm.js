import { Element } from '../components/constructor/elementBuild.js'

const root = document.querySelector('#root')

export class Confirm {
	constructor(title, item) {
		this.modal = new Element()
			.parent(root)
			.tag('div')
			.options({ className: 'modal-wrapper', id: 'modal' })
			.eventListener('click', e => {
				if (e.target.classList.contains('modal-wrapper')) {
					this.destroy()
				}
			})
			.children(
				new Element()
					.tag('div')
					.options({ className: 'modal' })
					.children(
						new ElementBuild()
							.tag('div')
							.options({ className: 'modal__content' })
							.children(
								new Element()
									.tag('div')
									.options({ className: 'modal__header' })
									.children(
										new ElementBuild().tag('h4').options({
											className: 'modal__title',
											textContent: title,
										})
									)
									.children(
										new Element()
											.tag('i')
											.options({ className: 'fas fa-times modal__close' })
											.eventListener('click', () => {
												this.destroy()
											})
									)
							)
							.children(
								new Element()
									.tag('div')
									.options({ className: 'modal__body' })
									.children(item)
							)
							.children(
								new Element().tag('div').options({ className: 'modal__footer' })
							)
					)
			)
	}

	build() {
		document.body.classList.add('open-modal')
		this.modal.render()
	}

	destroy() {
		document.body.classList.remove('open-modal')
		document.querySelector('#modal').remove()
	}
}
