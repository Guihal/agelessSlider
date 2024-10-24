export function getBtnData(slide, data) {
	const btn = slide.querySelector(".t734__button a");

	if (!btn) return;

	data.button.link = btn.href;
	data.button.text = btn.textContent.trim();
}
