import { ElementBuild } from '../components/constructor/elementBuild.js'

const root = document.querySelector('#root')


export class Modal {
    constructor(item) {
        this.modalWrapper = new ElementBuild()
            .parent(root)
            .tag('div')
            .options({className: 'modal', id: "modal"})
            .eventListener('click', () => {
                this.destroy()
            })
        this.modal = new ElementBuild()
            .tag('div')
            .options({className: 'modal-content'})
            .children(
                new ElementBuild()
                    .tag('span')
                    .options({className: "close", textContent: 'x'})
                    .eventListener('click', () => {
                        this.destroy()
                    })
            )
            .children(item)
    }

    render() {
        this.modalWrapper.children(this.modal).render()
    }

    destroy() {
        document.querySelector('#modal').remove()
    }
}