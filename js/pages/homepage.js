import { ElementBuild } from '../components/constructor/elementBuild.js'
// import { Aside } from '../components/aside.js'
// import { Nav } from '../components/nav.js'
// import { Login } from '../components/Login.js'

const root = document.querySelector('#root')

export const HomePage = new ElementBuild()
	.tag('div')
	.parent(root)
	.options({ className: 'main__page', textContent: 'Hello World' })
	.css({ padding: '20px' })
