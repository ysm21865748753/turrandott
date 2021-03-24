import {model} from './model'
//import {templates} from './templates'
import './styles/main.css'
import { App } from './classes/app'

//const $site = document.querySelector('#site')


new App(model).init()
//let html =''
/*model.forEach(block => {
    $site.insertAdjacentHTML('beforeend', block.toHTML())
    /*if (block.type === 'title') {
        html = title(block)
    } else if (block.type === 'text') {
        html = text(block)
    } else if (block.type === 'columns') {
        html = columns(block)
    } else if (block.type === 'image') {
        html = image(block)
    }*/

    /*const toHTML = templates[block.type]

    if (toHTML) {
        $site.insertAdjacentHTML('beforeend', toHTML(block))
    }*/
        
//})*/