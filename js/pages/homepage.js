import { ElementBuild } from '../components/constructor/elementBuild.js'
import { Redirect } from '../components/constructor/redirect.js'
import { ControlPage } from './controlPage.js'

const root = document.querySelector('#root')

export const HomePage = new ElementBuild()
	.tag('nav')
	.parent(root)
	.options({ className: 'nav' })
	.children(
		new ElementBuild()
			.tag('div')
			.options({ className: 'nav__inner-wrapper container' })
			.children(
				new ElementBuild()
					.tag('h1')
					.options({ className: 'logo', textContent: 'Medico' }),
				new ElementBuild()
					.tag('ul')
					.options({ className: 'nav__list' })
					.children(
						new ElementBuild()
							.tag('li')
							.options({ className: 'nav__item' })
							.children(
								new ElementBuild()
									.tag('button')
									.options({
										className: 'btn btn--default',
										textContent: 'Log in',
									})
									.eventListener('click', () => {
										new Redirect(ControlPage).redirect()
									})
							),
						new ElementBuild()
							.tag('li')
							.options({ className: 'nav__item', textContent: 'test2' }),
						new ElementBuild()
							.tag('li')
							.options({ className: 'nav__item', textContent: 'test3' })
					)
			)
	)
