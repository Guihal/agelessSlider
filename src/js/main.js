import "../scss/main.scss";
import { addHtmlSlider } from "./addHtmlSlider";
import { getData } from "./getData";
import { initSwiper } from "./initSwiper";
import { elementReady } from "./utils/elementReady";

function initMainSlider() {
	querySliders.forEach(async (querySlider) => {
		const classSwiper = `swiper main-slider ${querySlider.replace(".", "")}`;

		const sliderBlock = await elementReady(querySlider);
		sliderBlock.style.display = "none";
		const sliderBlockPagination = await elementReady(".uc-main-slider .t-slds__bullet_wrapper");

		const data = getData(sliderBlock);
		addHtmlSlider(sliderBlock, data, querySlider, classSwiper);

		initSwiper(classSwiper);
	});

	// const querySlider = ".uc-main-slider";
}

initMainSlider();
