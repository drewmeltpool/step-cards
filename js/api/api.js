export class Api {
    constructor() {
        this.token = null
    }

    url(direction = '') {
        return 'https://ajax.test-danit.com/api/v2/cards/' + direction
    }

    async login(email, password) {
        const response = await fetch(this.url('login'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        })
        if (response.ok) {
            const token = await response.text()
            this.token = token
        }
    }

    getToken() {
        return this.token;
    }

    async getCard(id) {

        const response = await fetch(this.url(id), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.token}`,
            },
        })
        return await response.json()

    }

    async getAllCard() {
        const response = await fetch(this.url(), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.token}`,
            },
        })
        return await response.json()
    }

    async addCard(obj) {

        const response = await fetch(this.url(), {
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

        await fetch(this.url(id), {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${this.token}`,
            }
        })
    }
}
