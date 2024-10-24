export function initSwiper(classSwiper) {
	const updatedClassSwiper = `.${classSwiper.trim().replaceAll(" ", ".")}`;
	const pagClass = updatedClassSwiper + " .swiper-pagination";

	const swiper = new Swiper(updatedClassSwiper, {
		loop: true,
		slidesPerView: 1,
		noSwipingClass: false,
		spaceBetween: 10,
		autoplay: {
			delay: 3000,
		},
		pagination: {
			el: pagClass,
			clickable: true,
		},
	});
}
