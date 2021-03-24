import image from './assets/image.jpg'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

const text = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dignissimos aliquam laborum exercitationem tempora suscipit labore provident, facere, aliquid fugit est in, earum atque magnam natus voluptatem voluptatum voluptas quae modi minima nobis omnis id maiores? Neque, sunt eos, ullam error accusamus, quia repellat a nihil consequatur ad praesentium molestiae.
`
export const model = [
    new TitleBlock('Lorem ipsum dolor sit amet consectetur adipisicing elit', {
        tag: 'h2',
        //styles: `background: linear-gradient(to right, #ff0099, #493240); color: #fff; text-align: center; padding: 1.5rem`
        styles: {
            background: `linear-gradient(to right, #f29d4a, #556b8a)`,
            color: `#fff`,
            padding: `1.5rem`,
            'text-align': `center`
        }}
    ),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '400px',
            height: 'auto'
        },
        alt: 'white bear pic'
    }),
    new ColumnsBlock([
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dignissimos aliquam laborum exercitationem tempora suscipit labore provident, facere, aliquid fugit est in, earum atque magnam natus voluptatem voluptatum voluptas quae modi minima nobis omnis id maiores?',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dignissimos aliquam laborum exercitationem tempora suscipit labore provident, facere, aliquid fugit est in, earum atque magnam natus voluptatem voluptatum voluptas quae modi minima nobis omnis id maiores?',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dignissimos aliquam laborum exercitationem tempora suscipit labore provident, facere, aliquid fugit est in, earum atque magnam natus voluptatem voluptatum voluptas quae modi minima nobis omnis id maiores?'
        ], {
            styles: {
                background: 'linear-gradient(to bottom, #162048, #6b89b3)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold'
            }
        }
    ),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })
    /*{type: 'title', value: 'Конструктов сайтов на чистом JavaScript', options: {
        tag: 'h2',
        //styles: `background: linear-gradient(to right, #ff0099, #493240); color: #fff; text-align: center; padding: 1.5rem`
        styles: {
            background: `linear-gradient(to right, #ff0099, #493240)`,
            color: `#fff`,
            padding: `1.5rem`,
            'text-align': `center`
        }
    }},*/
    /*{type: 'image', value: image, options: {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Это картинка'
    }},*/
    /*{type: 'columns', value: [
        'Приложение на чистом JavaScript, без использования библиотек',
        'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
        'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'
    ], options: {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }},
    {type: 'text', value: text, options: {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }}*/
]