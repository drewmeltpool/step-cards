import { Page } from '../../components/layouts/Page.js'
import { Navigation } from './components/Nav.js'
import { Main } from './components/Main.js'
import { Header } from '../../components/Constructor/Template.js'
import { NoLogin } from '../../components/layouts/Info.js'

export const HomePage = () =>
	new Page()
		.section(new Header(new Navigation()))
		.section(new Main(new NoLogin()))
