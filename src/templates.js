import {row, col, css} from './utils'

function title(block) {
    const tag = block.options.tag ?? 'h1'
    //const styles = block.options.styles
    return row(col(`<${tag}>${block.value}</${tag}>`), css(block.options.styles))
}

function text(block) {
    return row(col(`<p>${block.value}</p>`), css(block.options.styles))
}

function columns(block) {
    //const html = block.value.map(item => col(item))
    //return row(html).join('')
    const html = block.value.map(col).join('')
    return row(html, css(block.options.styles))
    /*const html = block.value.map(item => `<div class="col-sm">${item}</div>`)
    return `
        <div class="row">
            ${html.join('')}
        </div>
    `*/
}

function image(block) {
    const {imageStyles: is, styles, alt = ''} = block.options
    return row(`<img src="${block.value}" style="${css(is)}" alt="${alt}""/>`, css(styles))
    /*return `
        <div class="row">
            <img src="${block.value}"/>
        </div>
    `*/
}

export const templates = {
    title,
    text,
    columns,
    image
}