import { Page } from '../../layouts/Page.js'
import { Navigation } from './components/Nav.js'
import { Main } from './components/Main.js'
import { Header } from '../../Constructor/Template.js'
import { NoLogin } from '../../layouts/Info.js'

export const HomePage = () =>
	new Page()
		.section(new Header(new Navigation()))
		.section(new Main(new NoLogin()))
