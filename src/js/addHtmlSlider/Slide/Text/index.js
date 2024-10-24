import { Button } from "./Button";
import { Description } from "./Description";
import { Label } from "./Label";
import { Title } from "./Title";

export function Text(data) {
	return `<div class="swiper-slide__text-wrapper">
        ${Label(data)}
        ${Title(data)}
        ${Description(data)}
        ${Button(data)}
    </div>`;
}
