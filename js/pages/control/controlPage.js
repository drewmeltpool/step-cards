import { Navigation } from './components/Nav.js'
import { Content } from './components/Content.js'
import { Page } from '../../components/layouts/Page.js'

export const ControlPage = () =>
	new Page().section(new Navigation()).section(new Content())
