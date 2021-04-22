import { ElementBuild } from '../../components/Constructor/elementBuild.js'
import { Navigation } from './components/Nav.js'
import { Content } from './components/Content.js'

const root = document.querySelector('#root')

export const HomePage = new ElementBuild()
	.tag('div')
	.parent(root)
	.children(new Navigation())
	.children(new Content())
