import { Element } from '../../Constructor/Element.js'
import { Button, Icon } from '../../Constructor/Template.js'
import { Loader } from '../../layouts/Loader.js'
import { Modal } from '../../layouts/Modal.js'
import { DropDown } from '../../layouts/DropDown.js'
import { PatientList } from './PatientList.js'
import { PatientPriorityColor } from './PatientPriorityColor.js'
import { VisitDialog } from '../../components/Doctor/VisitDialog.js '
import { ignoreKey } from '../../DOM/dom.js'

const deleteModal = e =>
	new Modal({
		title: { textContent: 'Удалить карточку' },
		content: new Element().tag('p').options({
			className: 'modal__text',
			textContent: 'Вы точно хотите удалить эту карточку?',
		}),
		ok: () => {
			const loader = new Loader()
			loader.render()
			const card = e.target.closest('.patient__card')
			const id = card.dataset.id
			new PatientList().delete(id)
			loader.remove()
		},
	})

export class PatientItem {
	create(obj) {
		const show = [obj.patient, obj.doctor]
		const additionalInfo = Object.keys(ignoreKey(obj, 'id', 'specialization'))
		return new Element()
			.tag('div')
			.options({
				className: 'patient__card',
				dataset: { name: 'id', value: obj.id },
			})
			.children(
				new Element()
					.tag('div')
					.css({
						backgroundColor: new PatientPriorityColor().getColor(obj.priority),
					})
					.options({ className: 'patient-card__header' })
					.children(
						new Element()
							.tag('div')
							.options({ className: 'dots' })
							.children(
								new Icon('fas fa-circle'),
								new Icon('fas fa-circle'),
								new Icon('fas fa-circle'),
							),
						new Button({ className: ' btn btn--priority' })
							.eventListener('click', async e => deleteModal(e))
							.children(new Icon('fas fa-times-circle')),
					),
				new Element()
					.tag('div')
					.options({ className: 'patient-card__content' })
					.children(
						...show.map(value =>
							new Element().tag('p').options({
								className: 'patient-card__text',
								textContent: `${value ? value : 'Пусто'}`,
							}),
						),
					),
				new Element()
					.tag('div')
					.options({ className: 'patient-card__footer' })
					.children(
						new Button({ className: 'btn btn--option' })
							.eventListener('click', e => {
								const id = e.target.closest('.patient__card').dataset.id
								const card = JSON.parse(localStorage.getItem('cards')).find(
									card => card.id == id,
								)
								new Modal({
									title: { textContent: `Редактировать ${id}` },
									content: new VisitDialog(card.specialization).editForm(
										card,
										id,
									),
								})
							})
							.children(new Icon('fas fa-pen')),
					)
					.children(
						new Button({ className: 'btn btn--option' })
							.eventListener('click', e => deleteModal(e))
							.children(new Icon('fa fa-trash')),
					)
					.children(
						new DropDown({
							dropdown: { className: 'dropdown patient__dropdown' },
							menu: { className: 'dropdown__menu patient__menu' },
							elem: new Button({ className: 'btn btn--option' }).children(
								new Icon('fas fa-chevron-down'),
							),
							options: additionalInfo
								.filter(key => obj[key])
								.map(key => ({
									textContent: `${key} : ${obj[key]}`,
								})),
						}),
					),
			)
	}
}
