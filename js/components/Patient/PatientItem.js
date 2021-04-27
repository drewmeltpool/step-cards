import {Element} from '../Constructor/Element.js'
import {Button, Icon} from '../Constructor/Template.js'
import {Loader} from '../layouts/Loader.js'
import {Modal} from '../layouts/Modal.js'
import {DropDown, DropDownBootstrap} from '../layouts/DropDown.js'
import {Api} from '../../api/api.js'
import {Redirect} from '../../redirect/redirect.js'
import {ControlPage} from '../../pages/control/controlPage.js'
import {PatientPriorityColor} from './PatientPriorityColor.js'

// 	description: 'Новое описание визита',
// 	title: 'Визит к кардиологу',
// 	priority: 1,
// 	patient: 'ivan ivanov ivanovich',
// 	doctor: 'john sena ivanovich',
// 	specialization: 'Cardiologist',
// 	lastDate: '2017-01-01',
// 	heartDisease: true,
// 	bp: '24',
// 	weight: 70,
// 	age: 23,
const deleteCard = async () => {
    const loader = new Loader()
    const api = new Api()
    loader.render()
    api.setToken(localStorage.getItem('token'))
    const card = e.target.closest('.patient__card')
    const id = card.dataset.id
    await api.removeCard(id)
    const ind = JSON.parse(
        localStorage.getItem('cards'),
    ).findIndex(item => item, id === id)
    const cards = JSON.parse(localStorage.getItem('cards'))
    cards.splice(ind, 1)
    localStorage.setItem('cards', JSON.stringify(cards))
    if (!cards.length) {
        new Redirect(ControlPage()).redirect()
        return
    }
    loader.remove()
    card.remove()
}

export class PatientItem {
    constructor(obj) {
        const show = ['patient', 'doctor']
        const info = [
            'description',
            'lastDate',
            'heartDisease',
            'pressure',
            'weight',
            'age',
            'goal',
            'priority',
            'specialization',


        ]
        const additionalInfo = info.map(key =>
            `${key}: ${obj[key] ? obj[key] : 'Свойство не указано'}`)
        const data = show.map(key =>
            new Element().tag('p').options({textContent: `${key}: ${obj[key]}`
        })
                )
                return new Element()
                    .tag('div')
                    .options({
                        className: 'patient__card',
                        dataset: {name: 'id', value: obj.id},
                    }).css({backgroundColor: new PatientPriorityColor().getColor(obj.priority)})
                    .children(
                        new Element()
                            .tag('div')
                            .options({className: 'patient-card__header'})
                            .children(
                                new Button('btn--icon')
                                    .eventListener('click', async e => {
                                        new Modal()
                                            .title('Удалить карточку')
                                            .text('Вы точно хотите удалить эту карточку')
                                            .ok(async () => {
                                                const loader = new Loader()
                                                const api = new Api()
                                                loader.render()
                                                api.setToken(localStorage.getItem('token'))
                                                const card = e.target.closest('.patient__card')
                                                const id = card.dataset.id
                                                await api.removeCard(id)
                                                const ind = JSON.parse(
                                                    localStorage.getItem('cards'),
                                                ).findIndex(item => item, id === id)
                                                const cards = JSON.parse(localStorage.getItem('cards'))
                                                cards.splice(ind, 1)
                                                localStorage.setItem('cards', JSON.stringify(cards))
                                                if (!cards.length) {
                                                    new Redirect(ControlPage()).redirect()
                                                    return
                                                }
                                                loader.remove()
                                                card.remove()
                                            })
                                            .build()
                                    })
                                    .children(new Icon('fas fa-times-circle')),
                            ),
                        new Element()
                            .tag('div')
                            .options({className: 'patient-card__content'})
                            .children(...data),
                        new Element()
                            .tag('div')
                            .options({className: 'patient-card__footer'})
                            .children(
                                new Button('btn--option').eventListener(
                                    'click',
                                    e => {
                                        console.log(additionalInfo)
                                        const id = e.target.closest('.patient__card').dataset.id
                                        new Modal().title('Редактировать ' + id).build()
                                    },
                                ).children(new Icon('fas fa-edit')),
                                new Button('btn--option').eventListener('click', e => {
                                    const id = e.target.closest('.patient__card').dataset.id
                                    new Modal().title('Редактировать ' + id).build()
                                })
                                    .children(new Icon('fa fa-trash'))
                            )
                            .children(new DropDownBootstrap('Показать больше', ...additionalInfo).build())
                    )
            }
        }
