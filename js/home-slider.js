//	swiper main

const fraction = document.getElementById("current-slide")
const swiperMain = document.querySelectorAll(".swiper-slide-list")
const slideCount = swiperMain.length
const allSlides = document.getElementById("all-slides")
allSlides.innerText = swiperMain.length
fraction.textContent = '1'

if ( swiperMain ) {
	
	const swiper1 = new Swiper('.swiper-main', {
		
		// Optional parameters
		loop: true,
		autoplay: {
			delay: 3000,
		},
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}

	});

	const swiper = new Swiper('.swiper-list', {
		// Optional parameters
		loop: true,

		// If we need pagination
		pagination: {
			el: ".swiper-pagination"
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		
		on: {
			slideChange: () => {
				fraction.textContent = `${swiper.realIndex + 1}`;
			}
		}
	});
	
}

//	mobile sliders

	const uslugiSwiperMobile = new Swiper('.uslugi-swiper-mobile', {
		// Optional parameters
		loop: true,
	});
	
	const advantagesSwiperMobile = new Swiper('.advantages-swiper-mobile', {
		// Optional parameters
		loop: true,
	});


	const scrollers = document.querySelectorAll('.scroller');
if (scrollers) {
	addAnimation();
	function addAnimation() {
		scrollers.forEach(scroller => {
			scroller.setAttribute('data-animated', true);

			const scrollerContent = Array.from(scroller.children);

			scrollerContent.forEach(item => {
				const duplicatedItem = item.cloneNode(true);
				duplicatedItem.setAttribute('aria-hidden', true);
				scroller.appendChild(duplicatedItem);
			});
		});
	}
}
