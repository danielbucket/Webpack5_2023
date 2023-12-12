import './selfi-image.css'
import Selfi from './selfi.jpg'

class SelfiImage {
	render() {
		const img = document.createElement('img')
			img.src = Selfi
			img.alt = "selfi"
			img.classList.add('selfi-image')

		const bodyDomElement = document.querySelector('body')
			bodyDomElement.appendChild(img)
	}
}

export default SelfiImage