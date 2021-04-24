import { Navigation } from './components/Nav.js'
import { Content } from './components/Content.js'
import { Page } from '../../layouts/Page.js'
import { Api } from '../../api/api.js'

export const ControlPage = (data = []) => {
	// const api = new Api()
	// await api.login(
	// 	localStorage.getItem('email'),
	// 	localStorage.getItem('password')
	// )
	// const data = await api.getAllCard()
	return new Page().children(new Navigation()).children(new Content(data))
}
