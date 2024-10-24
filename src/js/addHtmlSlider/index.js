import { Slide } from "./Slide/index";

export function addHtmlSlider(sliderBlock, data, querySlider, querySwiper) {
	sliderBlock.after(
		Object.assign(document.createElement("div"), {
			innerHTML: ` <div class="swiper-wrapper">
			${data.map((slideData) => Slide(slideData)).join(" ")}
			</div>
			<div class="swiper-pagination"></div>`,

			className: querySwiper,
		})
	);

	sliderBlock.remove();
}
