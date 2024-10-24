export function getTextData(slider, query) {
	const block = slider.querySelector(query);

	if (!block) return false;

	return block.textContent.trim();
}
