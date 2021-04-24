import { Navigation } from './components/Nav.js'
import { Content } from './components/Content.js'
import { Page } from '../../layouts/Page.js'

export const ControlPage = data =>
	new Page().children(new Navigation()).children(new Content(data))
