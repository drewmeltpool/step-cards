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
            .children(new ElementBuild().tag('h3').options({className: "form__title", textContent: "Login"}))
    }

    input(type, id) {
        this.form.children(
            new ElementBuild()
                .tag('input')
                .options({className: 'form__input', type: type, id})
        )
        return this
    }

    button(text) {
        this.form.children(
            new ElementBuild()
                .tag('button')
                .options({className: 'form__submit btn--default', textContent: text, type: "submit"})
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

function getValue(name) {
    return document.querySelector(name).value;
}

export const loginForm = new Form(root).input('email', 'email').input('password', 'password')
    .button('Submit')
    .submit(async (e) => {
        e.preventDefault();
        const api = new Api();
        const apiResponse = await api.login(getValue("#email"), getValue("#password"))
        const token = api.getToken();
        if (token) {
            new Redirect(ControlPage).redirect()
        } else {
            alert('Please, use correct email or password!')
        }
    })