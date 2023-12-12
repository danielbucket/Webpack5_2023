import Heading from './components/heading/heading.js'
import SelfiImage from './components/selfi-image/selfi-image.js'
import React from 'react'

const heading = new Heading()
	heading.render('selfi');

const selfiImage = new SelfiImage()
	selfiImage.render()