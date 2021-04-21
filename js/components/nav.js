import { Redirect } from './constructor/redirect.js'
import { ElementBuild } from '../components/constructor/elementBuild.js'

import { ControlPage } from '../pages/controlPage.js'
// <nav class='nav'>
// 	<div class='nav__inner-wrapper container'>
// 		<h1 class='logo'>Medico</h1>
// 		<ul class='nav__list'>
// 			<li class='nav__item'>
// 				<button class='btn btn--default'>Log in</button>
// 			</li>
// 		</ul>
// 	</div>
// </nav>

export const Nav = new ElementBuild()
	.tag('nav')
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
