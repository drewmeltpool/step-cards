import {Element} from '../../../components/Constructor/Element.js'
import {Api} from "../../../api/api.js";
import {Form} from "../../../components/layouts/Form.js";
import {getInputValue} from "../../../components/DOM/dom.js";
import {Redirect} from "../../../redirect/redirect.js";
import {ControlPage} from "../controlPage.js";

export class Filter {
    constructor() {
        return new Element()
            .tag('div')
            .options({className: 'filter container'})
            .children(
                new Form('', {className: 'filter-form'})
                    .input({className : 'filter-input', placeholder: 'Поиск', id : 'filter-input'})
                    .select({className: 'filter-select', id: 'filter-status'},
                        {textContent: 'Все', value: 'all'},
                        {textContent: 'Кардиолог', value: 'cardiologist'},
                        {textContent: 'Стоматолог', value: 'dentist'},
                        {textContent: 'Терапевт', value: 'therapist'})
                    .select({className: 'filter-select', id: 'filter-priority'},
                        {textContent: 'Все', value: 'all'},
                        {textContent: 'Срочные', value: 'high'},
                        {textContent: 'Средне-срочные', value: 'medium'},
                        {textContent: 'Обычные', value: 'low'})
                    .button({textContent: 'Поиск', className: 'btn filter-btn'})
                    .submit(async () => {
                        const titleValue = getInputValue('#filter-input')
                        const doctor = getInputValue('#filter-status')
                        const priority = getInputValue('#filter-priority')
                        // console.log(priority)
                        const api = new Api();
                        api.setToken(localStorage.getItem('token'))
                        const allCards = await api.getAllCard();
                        const filterGoal = allCards.filter((card) => card.goal.includes(titleValue))
                        const filterDoctor = filterGoal.filter((card) => doctor === card.specialization || doctor === 'all')
                        const filteredPriority = filterDoctor.filter((card) => priority === card.priority || priority === 'all');
                        console.log(filteredPriority)
                        localStorage.setItem('cards', JSON.stringify(filteredPriority))
                        new Redirect(ControlPage()).redirect()

                    })
                    .build()
            )
    }
}