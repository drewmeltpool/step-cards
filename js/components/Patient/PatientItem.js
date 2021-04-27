import {Element} from '../Constructor/Element.js'
import {Button, Icon} from '../Constructor/Template.js'
import {Loader} from '../layouts/Loader.js'
import {Modal} from '../layouts/Modal.js'
import {DropDown, DropDownBootstrap} from '../layouts/DropDown.js'
import {Api} from '../../api/api.js'
import {Redirect} from '../../redirect/redirect.js'
import {ControlPage} from '../../pages/control/controlPage.js'
import {PatientPriorityColor} from './PatientPriorityColor.js'
import {Form} from '../layouts/Form.js'
import {getInputValue} from '../DOM/dom.js'

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
            'status'

        ]
        const additionalInfo = info.map(key =>
            `${key}: ${obj[key] ? obj[key] : 'Свойство не указано'}`)
        const data = show.map(key =>
            new Element().tag('p').options({
                textContent: `${key}: ${obj[key]}`
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
                        new Button('btn--option', 'Редактировать').eventListener(
                            'click',
                            e => {
                                const id = +e.target.closest('.patient__card').dataset.id
                                const allCards = localStorage.getItem('cards')
                                const allCardsArr = JSON.parse(allCards)
                                const obj = allCardsArr.find(item => item.id === id)

                                new Modal().title('Редактировать ' + id)
                                    .elem(new Form('Edit card')
                                        .select({value: obj.doctor},{id: 'doctor'}, {
                                            textContent: 'Выбери врача',
                                            disabled: true,
                                            selected: true
                                        }, {textContent: 'Кардиолог', value: 'Кардиолог'}, {
                                            textContent: 'Терапевт',
                                            value: 'Терапевт'
                                        }, {textContent: 'Стоматолог', value: 'Стоматолог'})
                                        .input({value: obj.patient, id: 'fullname', type: 'text', placeholder: 'ФИО'})
                                        .input({value: obj.goal, id: 'goal', type: 'text', placeholder: 'Цель визита'})
                                        .input({value: obj.description, id: 'description', type: 'text', placeholder: 'описание визита',
                                        })
                                        .input({value: obj.date, id: 'lastDate', type: 'date', placeholder: 'Дата'})
                                        .input({value: obj.pressure, id: 'pressure', type: 'number', placeholder: 'Давление'})
                                        .input({value: obj.weight, id: 'weightindex', type: 'number', placeholder: 'Индекс массы тела'})
                                        .input({
                                            value: obj.heart,
                                            id: 'heartDisease',
                                            type: 'text',
                                            placeholder: 'Перенесенные заболевания сердца'
                                        })
                                        .input({value: obj.age, id: 'age', type: 'number', placeholder: 'Возраст'})
                                        .select({value: obj.priority}, {id: 'priority'}, {
                                            textContent: 'Срочность',
                                            disabled: true,
                                            selected: true
                                        }, {textContent: 'Неотложная', value: 'high'}, {
                                            textContent: 'Приоритетная',
                                            value: 'medium'
                                        }, {textContent: 'Обычная', value: 'low'})
                                        .button('EDIT')
                                        .submit(async () => {
                                            const data = {
                                                doctor: getInputValue('#doctor'),
                                                goal: getInputValue('#goal'),
                                                description: getInputValue('#desсription'),
                                                priority: getInputValue('#priority'),
                                                patient: getInputValue('#fullname'),
                                                date: getInputValue('#lastDate'),
                                                pressure: getInputValue('#pressure'),
                                                bodyIndex: getInputValue('#weightindex'),
                                                heartDisease: getInputValue('#heartDisease'),
                                                age: getInputValue('#age'),
                                            }
                                            const api = new Api()
                                            const card = await api.editCard(data, id)
                                            console.log(card)
                                        })
                                        .build()
                                    )
                                    .build()
                            },
                        )
                            .children(new Icon('fas fa-edit')),
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