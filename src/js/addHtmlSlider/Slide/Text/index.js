import { Button } from './Button'
import { Description } from './Description'
import { Label } from './Label'
import { Note } from './Note'
import { Title } from './Title'

export function Text(data) {
    return `<div class="swiper-slide__text-wrapper">
        ${Label(data)}
        ${Title(data)}
        ${Description(data)}
        ${Button(data)}
        ${Note(data)}
    </div>`
}
