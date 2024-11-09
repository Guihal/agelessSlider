export function Background(data) {
    let background = ''
    let hasMob = false

    if (data.background.video) {
        background = `<video class="swiper-slide_video" autoplay loop muted width="${document.documentElement.clientWidth}" height="${document.documentElement.clientHeight}"><source src="${data.background.video}" type="video/mp4"></video>`
    } else if (data.background.image) {
        background = `<img class="swiper-slide_img"  loading="lazy" alt="Очень красивая девушка держит в руках саше" src="${data.background.image}" width="${document.documentElement.clientWidth}" height="${document.documentElement.clientHeight}" />`
    } else {
        return background
    }

    if (data.background.videoMob) {
        hasMob = true
        background += `<video class="swiper-slide_video-mob" autoplay loop muted width="${document.documentElement.clientWidth}" height="${document.documentElement.clientHeight}"><source src="${data.background.videoMob}" type="video/mp4"></video>`
    } else if (data.background.imageMob) {
        hasMob = true
        background += `<img class="swiper-slide_img-mob" loading="lazy" alt="Очень красивая девушка держит в руках саше" src="${data.background.imageMob}" width="${document.documentElement.clientWidth}" height="${document.documentElement.clientHeight}" />`
    }

    return `<div class="swiper-slide__background ${
        hasMob ? 'swiper-slide__background--mob' : ''
    }">${background}</div>`
}
