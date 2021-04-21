export class Api {
	constructor() {
		this.token = null
	}

	async login(email, password) {
		const response = await fetch(
			'https://ajax.test-danit.com/api/v2/cards/login',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			}
		)
		const token = await response.text()
		this.token = token
	}

	async getCard(id) {
		const response = await fetch(
			'https://ajax.test-danit.com/api/v2/cards/' + id,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${this.token}`,
				},
			}
		)
		return await response.json()
	}

	async getAllCard() {
		const response = await fetch('https://ajax.test-danit.com/api/v2/cards', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${this.token}`,
			},
		})
		return await response.json()
	}

	async addCard(obj) {
		const response = await fetch('https://ajax.test-danit.com/api/v2/cards', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${this.token}`,
			},
			body: JSON.stringify(obj),
		})
		return await response.json()
	}

	async removeCard(id) {
		await fetch('https://ajax.test-danit.com/api/v2/cards/' + id, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${this.token}`,
			},
		})
	}
}
