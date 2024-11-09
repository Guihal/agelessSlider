import { getImage } from './getImage'
import { getDescrData } from './getDescrData'
import { getTextData } from './getTextData'
import { getBtnData } from './getBtnData'

export function getData(slider) {
    const data = []

    slider.querySelectorAll('.t-slds__item').forEach((slide) => {
        const slideData = {
            color: 'white',
            button: {
                text: false,
                link: false,
            },
            text: {
                position: 'left',
                title: {
                    text: false,
                    size: 'small',
                },
                label: false,
                description: {
                    text: false,
                    size: 'small',
                },
                note: {
                    text: false,
                },
            },
            background: {
                video: false,
                image: false,
            },
        }

        getDescrData(slide, slideData)
        getBtnData(slide, slideData)
        slideData.background.image = getImage(slide)
        slideData.text.title.text = getTextData(slide, '.t734__title')

        data.push(slideData)
    })

    return data
}
