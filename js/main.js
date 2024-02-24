document.addEventListener('DOMContentLoaded', function(){
//  scroll
	/*
	let scrollpos = window.scrollY

	const header = document.querySelector("header")
	const scrollChange = 1

	const add_class_on_scroll = () => header.classList.add("scroll")
	const remove_class_on_scroll = () => header.classList.remove("scroll")

	window.addEventListener("scroll", function() { 
		scrollpos = window.scrollY;

		if (scrollpos >= scrollChange + 100) { add_class_on_scroll() }
		else { remove_class_on_scroll() }
	  
	})
	*/

	const header = document.querySelector("header")
	var lastScrollTop = 0;
	window.onscroll = onScroll;

	function onScroll (e) {
		var top = window.pageYOffset;
		if (lastScrollTop > top) {
			header.classList.remove("scroll")
			header.classList.add("no-scroll")

			if ( lastScrollTop < 10 ) {
				header.classList.remove("no-scroll")
			}

		} else if (lastScrollTop < top) {
			header.classList.add("scroll")
		}
		lastScrollTop = top;
	}


//	popup

	$(".show-page, .show-page").on("click", function(e){
		e.preventDefault()
		$(".popup-overlay, .popup-form").addClass("open")
	})
	
	$(".popup-close").on("click", function(e){
		$(".popup-overlay, .popup-form").removeClass("open")
	})
	
//	menu

	$(".mobile-burger").on("click", function(e){
		e.preventDefault()
		$("header, .mobile-burger, .header-menu").toggleClass("open")
	})

	if ( window.innerWidth >= 1200 ) {

		gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

		ScrollSmoother.create({
			wrapper: '.wrapper',
			content: '.content',
			smoot: 1.5,
			effects: true
		})
		/*
		let itemsTitle = gsap.utils.toArray('.section-title')

		itemsTitle.forEach(item => {
			gsap.fromTo(item, { opacity: 0, y: -100 }, {
				opacity: 1, y: 0,
				scrollTrigger: {
					trigger: item,
					start: '-850',
					end: '-100',
					scrub: true
				}
			})
		})
		*/
		let itemsTop = gsap.utils.toArray('.uslugi-item, .advantages-item, .news-day__info, .news-item.news-item__second, .news-item.news-item__third, .news-day__image, .contacts-info, .contacts-order, .cards-content__item .item-title, .cards-order__link, .news-item.news-item__first, .news-day__title, .more-info__form, .contacts-title, .cards-content__item img, .cards-order__info, .news-day__button .more-btn, .map, .cards-info, .news-page__item')

		itemsTop.forEach(item => {
			gsap.fromTo(item, { opacity: 0, y: -200 }, {
				opacity: 1, y: 0,
				scrollTrigger: {
					trigger: item,
					start: '-850',
					end: '-100',
					scrub: true
				}
			})
		})
		/*
		let itemsBottom = gsap.utils.toArray('.news-day__button .more-btn, .map, .cards-info, .news-page__item')

		itemsBottom.forEach(item => {
			gsap.fromTo(item, { opacity: 0, y: 200 }, {
				opacity: 1, y: 0,
				scrollTrigger: {
					trigger: item,
					start: '-850',
					end: '-100',
					scrub: true
				}
			})
		})

		let itemsLeft = gsap.utils.toArray('.news-item.news-item__first, .news-day__title, .more-info__form, .contacts-title, .cards-content__item img, .cards-order__info')

		itemsLeft.forEach(item => {
			gsap.fromTo(item, { opacity: 0, x: -200 }, {
				opacity: 1, x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-850',
					end: '-100',
					scrub: true
				}
			})
		})

		let itemsRight = gsap.utils.toArray('.news-item.news-item__second, .news-item.news-item__third, .news-day__image, .contacts-info, .contacts-order, .cards-content__item .item-title, .cards-order__link')

		itemsRight.forEach(item => {
			gsap.fromTo(item, { opacity: 0, x: 200 }, {
				opacity: 1, x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-850',
					end: '-100',
					scrub: true
				}
			})
		})
		*/
	}
})