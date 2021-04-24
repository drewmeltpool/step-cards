import { ElementBuild } from '../components/constructor/elementBuild.js'
import { Button, Icon } from '../components/constructor/elements.js'

const root = document.querySelector('#root')

export class Modal {
	constructor() {
		this.header = new ElementBuild()
			.tag('div')
			.options({ className: 'modal__header' })
			.children(
				new ElementBuild().tag('h4').options({
					className: 'modal__title',
					textContent: 'Hello',
				})
			)
			.children(
				new Icon('fas fa-times modal__close').eventListener('click', () => {
					this.destroy()
				})
			)

		this.body = new ElementBuild()
			.tag('div')
			.options({ className: 'modal__body' })

		this.footer = new ElementBuild()
			.tag('div')
			.options({ className: 'modal__footer' })
			.children(
				new Button('btn--default', 'Ok').eventListener('click', () => {
					this.destroy()
				})
			)
			.children(
				new Button('btn--default', 'Отмена').eventListener('click', () => {
					this.destroy()
				})
			)

		this.content = new ElementBuild()
			.tag('div')
			.options({ className: 'modal__content' })

		this.modalInner = new ElementBuild()
			.tag('div')
			.options({ className: 'modal' })

		this.modal = new ElementBuild()
			.parent(root)
			.tag('div')
			.options({ className: 'modal-wrapper', id: 'modal' })
			.eventListener('click', e => {
				if (e.target.classList.contains('modal-wrapper')) {
					this.destroy()
				}
			})
	}

	title(textContent) {
		this.header = new ElementBuild()
			.tag('div')
			.options({ className: 'modal__header' })
			.children(
				new ElementBuild().tag('h4').options({
					className: 'modal__title',
					textContent,
				})
			)
			.children(
				new Icon('fas fa-times modal__close').eventListener('click', () => {
					this.destroy()
				})
			)

		return this
	}

	elem(item) {
		this.body = new ElementBuild()
			.tag('div')
			.options({ className: 'modal__body' })
			.children(item)

		return this
	}

	ok(cb) {
		this.footer = new ElementBuild()
			.tag('div')
			.options({ className: 'modal__footer' })
			.children(
				new Button('btn--default', 'Ok').eventListener('click', () => {
					cb()
					this.destroy()
				})
			)
			.children(
				new Button('btn--default', 'Отмена').eventListener('click', () => {
					this.destroy()
				})
			)

		return this
	}

	build() {
		document.body.classList.add('open-modal')
		this.modal
			.children(
				this.modalInner.children(
					this.content
						.children(this.header)
						.children(this.body)
						.children(this.footer)
				)
			)
			.render()
	}

	destroy() {
		document.body.classList.remove('open-modal')
		document.querySelector('#modal').remove()
	}
}
