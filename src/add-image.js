import Selfi from './selfi.jpg';

function addImage() {
	const image = document.createElement('img');
		image.alt = 'Selfi';
		image.width = 300;
		image.src = Selfi;

	const body = document.querySelector('body');
		body.appendChild(image);
};

export default addImage;