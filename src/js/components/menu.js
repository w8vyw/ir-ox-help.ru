const menuTriggers = document.querySelectorAll('[data-menu-trigger]')
const menu = document.querySelector('.nav__list')
const menuOverlay = document.querySelector('[data-overlay="menu"]')

menuTriggers.forEach(trigger => {
	trigger.addEventListener('click', () => {
		menu.classList.add('nav__list--opened')
		menuOverlay.classList.add('overlay--active')
		document.body.classList.add('scroll-disabled')
	})
})

menuOverlay.addEventListener('click', () => {
	menu.classList.remove('nav__list--opened')
	menuOverlay.classList.remove('overlay--active')
	document.body.classList.remove('scroll-disabled')
})
