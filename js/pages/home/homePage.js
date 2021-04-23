import { ElementBuild } from '../../components/constructor/elementBuild.js'
import { Navigation } from './components/Nav.js'
import { Content } from './components/Content.js'

export const HomePage = new ElementBuild()
	.tag('div')
	.parent(root)
	.children(new Navigation())
	.children(new Content())
