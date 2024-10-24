export function Background(data) {
	let background = "";

	if (data.background.video) {
		background = `<video autoplay loop muted width="${document.documentElement.clientWidth}" height="${document.documentElement.clientHeight}">
            <source src="${data.background.video}" type="video/mp4">
        </video>
        `;
	} else if (data.background.image) {
		background = `<img loading="lazy" alt="Очень красивая девушка держит в руках саше" src="${data.background.image}" width="${document.documentElement.clientWidth}" height="${document.documentElement.clientHeight}" />`;
	} else {
		return background;
	}

	return `<div class="swiper-slide__background">${background}</div>`;
}
