import {DropDown} from "../../../components/layouts/DropDown.js";
import {Form} from "../../../components/layouts/Form.js";
import {Element} from "../../../components/Constructor/Element.js";


export class AddVisit {
    constructor() {
        return new Element()
            .tag('div')
            .options({className: 'visit-wrapper'})
            .children(
                new DropDown()
                    .option('therapist', 'Терапевт')
                    .option('cardiologist', 'Кардиолог')
                    .option('dentist', 'Стоматолог')
                    .build()
                    .eventListener('click', (e) => {
                        const visitWrapper = document.querySelector('.visit-wrapper');
                        const allForms = visitWrapper.querySelectorAll('.form-wrapper');
                        allForms.forEach((form) => {
                            form.style.display = 'none';
                        })
                        const select = document.querySelector('.select').value;
                        const form = document.querySelector(`#${select}`)
                        form.style.display = 'block';
                    })
            )
            .children(
                new Form('Терапевт')
                    .input('text', 'visitPurpose')
                    .textArea('description')
                    .select({value: 'High', textContent: 'Срочный'}, {
                        value: 'Medium',
                        textContent: 'Средне-срочный'
                    }, {value: 'Low', textContent: 'Не срочный'})
                    .input('text', 'visitPurpose')
                    .build()
                    .options({id: 'therapist'})
                    .css({display: 'none'})
            )
            .children(
                new Form('Кардиолог').build().options({id: 'cardiologist'}).css({display: 'none'})
            )
            .children(
                new Form('Стоматолог').build().options({id: 'dentist'}).css({display: 'none'})
            )
    }
}