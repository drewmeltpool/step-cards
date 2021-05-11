import { Nav, Button, Logo, List } from '../../../Constructor/Template.js'
import { Element } from '../../../Constructor/Element.js'
import { Form } from '../../../layouts/Form.js'
import { Modal } from '../../../layouts/Modal.js'
import { Loader } from '../../../layouts/Loader.js'
import { Api } from '../../../api.js'
import { getFormData } from '../../../DOM/dom.js'
import { formUtils } from '../../../utils/formData.js'
import { Redirect } from '../../../redirect.js'
import { ControlPage } from '../../../pages/control/Cards.js'

const getCards = async () => {
	const loader = new Loader()
	const api = new Api()
	const fd = getFormData(document.querySelector('#login-form'))
	loader.render()
	await api.login(fd.email, fd.password)
	if (api.getToken()) {
		await api.getAllCard()
		new Redirect(ControlPage()).redirect()
		return
	}
	new Modal({
		title: { textContent: 'Ошибка' },
		content: new Element().tag('p').options({
			className: 'modal__text',
			textContent: 'Неправильный логин или пароль',
		}),
		ok: () => {},
	})
	loader.remove()
}

export class Navigation {
	constructor() {
		return new Nav(
			new Logo(),
			new List('nav__list', 'nav__item').elements(
				new Button({
					className: 'btn btn--default',
					textContent: 'Войти',
				}).eventListener('click', () => {
					new Modal({
						title: { textContent: 'Логин' },
						content: new Form({
							id: 'login-form',
							title: { textContent: 'Логин' },
							...formUtils.login,
							submit: async () => await getCards(),
						}),
					})
				}),
			),
		)
	}
}
