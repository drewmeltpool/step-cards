
export class Visit {
    constructor() {
    }

    fields = [
        {
            purpose: 'Purpose of visit',
            details: 'Description',
            name:'Full Name',
        }
    ];

    renderInputs(element) {
        let inputField = ''

        this.fields.forEach(item => {
            inputField += new Input(item).render();
            element.insertAdjacentHTML('beforeend', inputField);
        })
        element.innerHTML = inputField;
        return inputField;
    };

    renderSelect(element) {
        return
    };
}