

window.addEventListener('scroll' function(e){

	var scrollled = window.pageYOffset;

	const background = document.querySelector('.background');

	background.style.top = -(scrollled * 0.2) + 'px';
})