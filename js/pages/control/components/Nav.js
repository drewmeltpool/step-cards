import {Api} from '../../../api/api.js'
import {Redirect} from '../../../redirect/redirect.js'
import {ControlPage} from '../controlPage.js'
import {HomePage} from '../../home/homePage.js'
import {Nav} from '../../../components/layouts/Nav.js'
import {Modal} from '../../../components/layouts/Modal.js'
import {Loader} from '../../../components/layouts/Loader.js'
import {Element} from '../../../components/Constructor/element.js'
import {Button, Logo, Icon} from '../../../components/Constructor/Template.js'
import {Form} from "../../../components/layouts/Form.js";

const card = {
    description: 'Новое описание визита',
    title: 'Визит к кардиологу',
    priority: 'low',
    patient: 'ivan ivanov ivanovich',
    doctor: 'john sena ivanovich',
    specialization: 'Cardiologist',
    lastDate: '2017-01-01',
    heartDisease: true,
    bp: '24',
    weight: 70,
    age: 23,
}

export class Navigation {
    constructor() {
        return new Nav(
            new Logo(),
            new Element()
                .tag('ul')
                .options({className: 'nav__list'})
                .children(
                    new Element()
                        .tag('li')
                        .options({className: 'nav__item'})
                        .children(
                            new Button('btn--default', 'New Card').eventListener(
                                'click',
                                async () => {
                                    new Modal()
                                        .title('Добавить карточку')
                                        .elem(new Form('Form')
                                            .select()
                                            .build())
                                        .ok(async () => {
                                            const api = new Api()
                                            const loader = new Loader()
                                            loader.render()
                                            api.setToken(localStorage.getItem('token'))
                                            await api.addCard(card)
                                            const cards = await api.getAllCard()
                                            localStorage.setItem('cards', JSON.stringify(cards))
                                            loader.remove()
                                            new Redirect(ControlPage()).redirect()
                                        })
                                        .build()
                                }
                            )
                        )
                )
                .children(
                    new Element()
                        .tag('li')
                        .options({className: 'nav__item'})
                        .children(
                            new Button('btn--icon')
                                .children(new Icon('fas fa-sign-out-alt'))
                                .eventListener('click', () => {
                                    localStorage.clear()
                                    new Redirect(HomePage()).redirect()
                                })
                        )
                )
        )
    }
}
