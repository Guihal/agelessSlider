export function Button(data) {
	if (!data.button.text) return "";

	return `<a href=${data.button.link} class="swiper-slide_button">${data.button.text}</a>`;
}
