export function getDescrData(slide, data) {
	const descr = slide.querySelector(".t734__descr");

	if (!descr) return;

	if (!descr.textContent.includes("||")) {
		data.text.description.text = descr.textContent.trim();
		return;
	}

	const descrTextSplit = descr.textContent.split("||");
	data.text.description.text = descrTextSplit[0].trim();

	descrTextSplit[1].split(",").forEach((textData) => {
		if (!textData.includes("::")) return;

		const textDataSplit = textData.split("::");

		// console.log(`${textDataSplit[0]} ${textDataSplit[1]}`);

		switch (textDataSplit[0].trim()) {
			case "video":
				data.background.video = textDataSplit[1].trim();
				break;
			case "color":
				data.color = textDataSplit[1].trim();
				break;
			case "label":
				data.text.label = textDataSplit[1].trim();
				break;
			case "label":
				data.text.label = textDataSplit[1].trim();
				break;
			case "position":
				data.text.position = textDataSplit[1].trim();
				break;
			case "title":
				data.text.title.size = textDataSplit[1].trim();
				break;
			case "description":
				data.text.description.size = textDataSplit[1].trim();
				break;
		}
	});
}
