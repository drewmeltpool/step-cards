export class Api {
    constructor() {
        this.token = null
    }

    url(direction = '') {
        return 'https://ajax.test-danit.com/api/v2/cards/' + direction
    }

    async login(email, password) {
        try {
            const response = await fetch(this.url('login'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}),
            })
            const token = await response.text()
            this.token = token
        } catch (e) {
            console.log(e);
            this.token = null
        }
    }

    setToken(value) {
        this.token = value;
    }

    getToken() {
        return this.token;
    }

    async getCard(id) {
        try {
            const response = await fetch(this.url(id), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.token}`,
                },
            })
            return await response.json()
        } catch (e) {
            console.error(e)
        }
    }

    async getAllCard() {
        try {
            const response = await fetch(this.url(), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.token}`,
                },
            })
            return await response.json()
        } catch (e) {
            console.error(e)
        }
    }

    async addCard(obj) {
        try {
            const response = await fetch(this.url(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.token}`,
                },
                body: JSON.stringify(obj),
            })
            return await response.json()
        } catch (e) {
            console.error(e)
        }
    }

    async removeCard(id) {
        try {
            await fetch(this.url(id), {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${this.token}`,
                },
            })
        } catch (e) {
            console.error(e)
        }
    }
}
