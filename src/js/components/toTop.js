const toTop = document.querySelector('.to-top')

toTop.onclick = () => {
	document.body.scrollTop = 0
	document.documentElement.scrollTop = 0
}

function toTopDisplayToggler() {
	if (document.body.scrollTop >= 700 || document.documentElement.scrollTop >= 700) {
		toTop.classList.add('to-top--active')
	} else {
		toTop.classList.remove('to-top--active')
	}
}

window.addEventListener('scroll', () => {
	toTopDisplayToggler()
})
