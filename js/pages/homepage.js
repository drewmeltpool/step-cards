import { ElementBuild } from '../components/constructor/elementBuild.js'
import { Nav } from '../components/nav.js'
import { ContentHomePage } from '../components/contentHomePage.js'

const root = document.querySelector('#root')

export const HomePage = new ElementBuild()
	.tag('div')
	.parent(root)
	.children(Nav, ContentHomePage)
