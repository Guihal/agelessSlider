export function Description(data) {
	if (!data.text.description.text) return "";

	return `<div class="swiper-slide_descr" data-size="${data.text.description.size}">${data.text.description.text}</div>`;
}
