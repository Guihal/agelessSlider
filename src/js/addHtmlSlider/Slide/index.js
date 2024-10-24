import { Background } from "./Background";
import { Text } from "./Text/index";

export function Slide(data) {
	return `<div class="swiper-slide" data-color="${data.color}" data-position="${data.text.position}">
        ${Text(data)}
        ${Background(data)}
    </div>`;
}
