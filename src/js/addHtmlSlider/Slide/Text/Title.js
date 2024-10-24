export function Title(data) {
	if (!data.text.title.text) return "";

	if (data.text.title.text.includes("https://")) {
		return `<div class="swiper-slide_title">
            <img src="${data.text.title.text}" class="swiper-slide_title-img" height="57" width="258" />
        </div>`;
	}

	return `<div class="swiper-slide_title" data-size="${data.text.title.size}">${data.text.title.text}</div>`;
}
