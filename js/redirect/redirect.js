export class Redirect {
	constructor(page) {
		this.page = page
	}
	redirect() {
		const root = document.querySelector('#root')
		root.innerHTML = ''
		this.page.render()
	}
}
