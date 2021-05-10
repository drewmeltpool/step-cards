import { Header, Footer } from '../../Constructor/Template.js'
import { Navigation } from './components/Nav.js'
import { Content } from './components/Content.js'
import { Page } from '../../layouts/Page.js'
import { Filter } from './components/Filter.js'

export const ControlPage = () =>
	new Page()
		.section(new Header(new Navigation(), new Filter()))
		.section(new Content())
// .section(new Footer())
