export function Label(data) {
	if (!data.text.label) return "";

	return `<div class="swiper-slide_label">${data.text.label}</div>`;
}
