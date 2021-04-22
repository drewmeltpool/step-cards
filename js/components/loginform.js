import {ElementBuild} from "./constructor/elementBuild.js";
import {Redirect} from "./constructor/redirect.js";
import {ControlPage} from "../pages/controlPage.js";
import {Api} from '../api/api.js'

const root = document.querySelector('#root');


export class Form {
    constructor(parent) {
        this.formWrapper = new ElementBuild()
            .tag('div')
            .parent(parent)
            .options({className: "form-wrapper"})
        this.form = new ElementBuild()
            .tag('form')
            .options({className: 'form'})
    }

    input(type, id) {
        this.form.children(
            new ElementBuild()
                .tag('input')
                .options({className: 'form__input', type: type, id})
        )
        return this
    }

    button() {
        this.form.children(
            new ElementBuild()
                .tag('button')
                .options({className: 'form__submit', textContent: "Go", type: "submit"})
        )
        return this
    }

    submit(cb) {
        this.form.eventListener('submit', cb)
        return this
    }

    render() {
        this.formWrapper.children(this.form).render()

    }

}

export const loginForm = new Form(root).input('text', 'email').input('password', 'password')
    .button()
    .submit(async (e) => {
        e.preventDefault();

        function getInputValue(name) {
            return document.querySelector(name).value;
        }

        const email = getInputValue("#email")
        const password = getInputValue("#password")
        const api = new Api();
        try {
            const apiResponse = await api.login(email, password)
        } catch (e) {
            api.setToken(null);
        }
        const token = api.getToken();
        console.log(token)
        if (token) {
            new Redirect(ControlPage).redirect()
        } else {
            console.error('Have no this user');
        }
    })