import Selfi from './selfi.jpg';
import altText from './altText.txt';

function addImage() {
	const image = document.createElement('img');
		image.alt = altText;
		image.width = 300;
		image.src = Selfi;

	const body = document.querySelector('body');
		body.appendChild(image);
};

export default addImage;