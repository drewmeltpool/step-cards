import { Page } from '../../components/layouts/Page.js'
import { Navigation } from './components/Nav.js'
import { Content } from './components/Content.js'
import { NoLogin } from '../../components/layouts/NoLoginInfo.js'

export const HomePage = () =>
	new Page().section(new Navigation()).section(new Content(new NoLogin()))
