export function getImage(slide) {
	const image = slide.querySelector(".t-cover__carrier");

	if (!image) return false;

	return image.dataset.contentCoverBg;
}
