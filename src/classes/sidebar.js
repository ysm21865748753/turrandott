import {block} from '../utils'
import { TextBlock, TitleBlock } from './blocks'

export class Sidebar {
    constructor(selector, updateCallback) {
        this.$el = document.querySelector(selector)

        this.update = updateCallback
        this.init()
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template)
        this.$el.addEventListener('submit', this.add.bind(this))
    }

    get template() {
        return [
            block('title'),
            block('text')
        ].join('')
    }

    add(event) {
        event.preventDefault()

        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value

        let newBlock

        if (type === 'title') {
            newBlock = new TitleBlock(value, {styles})
        } else {
            newBlock = new TextBlock(value, {styles})
        }

        this.update(newBlock)

        event.target.value.value = ''
        event.target.styles.value = ''
    }
}