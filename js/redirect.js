export class Redirect {
	constructor(page) {
		this.page = page
	}

	redirect() {
		const root = document.querySelector('#root')
		document.body.classList = ''
		root.innerHTML = ''
		this.page.build()
	}
}
