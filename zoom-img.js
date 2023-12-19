'use strict';
function initMurreyZoomImg(className = '.img-to-zoom') {
	const zoomedImgOverlay = document.querySelector('#zoomed-img-overlay'),
		zoomedImgPlaceholder = document.querySelector('#zoomed-img-placeholder');

	function zoomImg() {
		zoomedImgOverlay.classList.add('active');
		zoomedImgPlaceholder.src = this.getAttribute('data-zm');
		document.querySelector('html').classList.add('fixed-bg');
	}
	function unzoomImg() {
		zoomedImgOverlay.classList.remove('active');
		zoomedImgPlaceholder.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAEALAAAAAABAAEAAAICTAEAOw==';
		document.querySelector('html').classList.remove('fixed-bg');
	}


	const imagesToZoom = document.querySelectorAll(className);
	for (let i = imagesToZoom.length - 1; i >= 0; i--) {
		imagesToZoom[i].addEventListener('click', zoomImg);
	}
	document.getElementById('zoomed-img-overlay').addEventListener('click', unzoomImg);
}