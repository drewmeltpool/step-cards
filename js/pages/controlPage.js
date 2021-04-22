import {ElementBuild} from '../components/constructor/elementBuild.js'

const root = document.querySelector('#root')

export const ControlPage = new ElementBuild()
    .tag('nav')
    .parent(root)
    .options({className: 'nav'})
    .children(
        new ElementBuild()
            .tag('div')
            .options({className: 'nav__inner-wrapper container'})
            .children(
                new ElementBuild()
                    .tag('h1')
                    .options({className: 'logo', textContent: 'Medico'}).children(
                    new ElementBuild()
                        .tag('i')
                        .options({className: 'fa fa-heartbeat'})
                ),
                new ElementBuild()
                    .tag('ul')
                    .options({className: 'nav__list'})
                    .children(
                        new ElementBuild()
                            .tag('li')
                            .options({className: 'nav__item'})
                            .children(
                                new ElementBuild()
                                    .tag('button')
                                    .options({
                                        className: 'btn btn--default',
                                        textContent: 'Create new card',
                                    })
                                    .eventListener('click', () => {
                                        alert('Create New Card')
                                    })
                            )
                    )
            )
    )
