import { ElementBuild } from '../../components/constructor/elementBuild.js'
import { Navigation } from './components/Nav.js'
import { Content } from './components/Content.js'

const root = document.querySelector('#root')

export const ControlPage = new ElementBuild()
	.tag('div')
	.parent(root)
	.children(new Navigation())
	.children(new Content())
