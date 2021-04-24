import { ElementBuild } from '../components/constructor/elementBuild.js'

const root = document.querySelector('#root')
const body = document.body


export class DropDown {
    constructor(title, ...items) {
        this.items = items.map((item)=>{
            return new ElementBuild()
                .tag('li')
                .children(
                    new ElementBuild()
                        .tag('button')
                        .options({
                            className: "dropdown-item",
                            textContent: item})
                )
        })
        this.list = new ElementBuild()
            .tag('ul')
            .options({className: "dropdown-menu"})
            .children(
                ...this.items
            )
            .eventListener('click', ()=>{

            })
        this.dropdown = new ElementBuild()
            .parent(body)
            .tag('div')
            .options({ className: "btn-group"})
            .children(
                new ElementBuild()
                    .tag('button')
                    .options({
                        type: "button",
                        className: "btn btn-primary dropdown-toggle",
                        dataset: {name: 'bsToggle', value:'dropdown'},
                        aria: {value: 'false'},
                        textContent: title})
            )
            .children(
                this.list
            )

    }

    render(){
        this.dropdown.render()
    }

    eventListener(type, cb){
        this.list.eventListener(type, cb)
    }
}