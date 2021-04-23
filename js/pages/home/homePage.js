import { ElementBuild } from '../../components/constructor/elementBuild.js'
import { Navigation } from './components/Nav.js'
import { Content } from './components/Content.js'
import { Modal } from '../../layouts/Modal.js'

const root = document.querySelector('#root')

const modal = new Modal(
	new ElementBuild().tag('div').options({ textContent: 'Choose a doctor' })
)

export const HomePage = new ElementBuild()
	.tag('div')
	.parent(root)
	.children(new Navigation())
	.children(new Content())
