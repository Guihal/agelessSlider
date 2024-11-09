export function Note(data) {
    if (!data.text.note.text) return ''

    return `<div class="swiper-slide_note">${data.text.note.text}</div>`
}
