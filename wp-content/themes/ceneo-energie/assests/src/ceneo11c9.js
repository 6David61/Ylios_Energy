(function ($) {
	$(document).ready(function () {
		/*---------background professionsal post type-------*/
		var pathname = window.location.pathname;
		var pro = pathname.split('/');
		if (pro[1] == 'professionnels') {
			if ($('.text-image').length == 3) {
				$('.client-maintainance-section').addClass('light-bg');
				$('.professional-client-section').removeClass('light-bg');
			}
			if ($('.text-image').length == 2) {
				$('.q-a-wrapper').removeClass('light-bg')
			}
		}

		/*---------background professionsal post type-------*/
		var pathname = window.location.pathname;
		if (pathname == '/professionnels/' || pathname == '/professionnels') {
			$('.page-header ').removeClass('light-bg')
		}
		var url = window.location.href;
		var only_hash = url.split('#');
		if (only_hash[1] == 'part6500') {
			$('html, body').animate({
				scrollTop: $("#panel-233-0-0-2").offset().top
			}, 2000);
		}


		/*----------particular page accordian-----------*/
		if ($('.q_a_inner').length) {
			$("div.answer:not(:first)").hide("slow");
			$('.q-a-item').first().addClass('active');
			$('.question').on('click', function () {
				$('.answer').hide();
				$(this).siblings().show("slow");
				$('.q-a-item').removeClass('active');
				$(this).parent().addClass('active');
			});
		}
		/*----------particular page accordian-----------*/
		$('body').on('keypress', '.telephone input[type=text]', function (event) {
			var key = event.keyCode || event.charCode;
			var charcodestring = String.fromCharCode(event.which);
			var txtVal = $(this).val();
			var maxlength = $(this).attr('maxlength');
			var regex = new RegExp('^[0-9]+$');
			// 8 = backspace 46 = Del 13 = Enter 39 = Left 37 = right Tab = 9
			if (key == 8 || key == 46 || key == 13 || key == 37 || key == 39 || key == 9) {
				return true;
			}
			// maxlength allready reached
			if (txtVal.length == maxlength) {
				event.preventDefault();
				return false;
			}
			// pressed key have to be a number
			if (!regex.test(charcodestring)) {
				event.preventDefault();
				return false;
			}
			return true;
		});

		$('body').on('paste', '.telephone input[type=text]', function (event) {
			//catch copy and paste
			var ref = $(this);
			var regex = new RegExp('^[0-9]+$');
			var maxlength = ref.attr('maxlength');
			var clipboardData = event.originalEvent.clipboardData.getData('text');
			var txtVal = ref.val();//current value
			var filteredString = '';
			var combined_input = txtVal + clipboardData;//dont forget old data

			for (var i = 0; i < combined_input.length; i++) {
				if (filteredString.length < maxlength) {
					if (regex.test(combined_input[i])) {
						filteredString += combined_input[i];
					}
				}
			}
			setTimeout(function () {
				ref.val('').val(filteredString)
			}, 100);
		});


		if ($('#tab1').length > 0) {
			$('#tab1').on('click', function () {
				$('html, body').animate({
					scrollTop: $(".tab1").offset().top - 50
				}, 1000);
			});
		}

		if ($('#tab2').length > 0) {
			$('#tab2').on('click', function () {
				$('html, body').animate({
					scrollTop: $(".tab2").offset().top - 50
				}, 1000);
			});
		}

		if ($('#tab3').length > 0) {
			$('#tab3').on('click', function () {
				$('html, body').animate({
					scrollTop: $(".tab3").offset().top - 50
				}, 1000);
			});
		}
	$(window).on('load', function () {
		$('.ajax-filter li a').click(function () {
			$.ajax({
				url: ajax_object.ajax_url,
				data: {
					action: 'portfolio_content_by_ajax',
					ajax_nonce: ajax_object.ajax_nonce,
					slug: $(this).data('slug'),
				},
				type: 'post',
				success: function (response) {
					$('#front-portfolio .full-content .portfolio-container').html(response);
					$('.grid').packery({
						itemSelector: '.grid-item'
					});
				}
			});

			$(this).parent().addClass('active');
			$(this).parent().siblings().removeClass('active');
		});
	});

		$('.menu-toggle').on('click', function () {
			$('body,html').toggleClass('menu-active');
		});

		$('.site-menu-main').meanmenu({
			meanScreenWidth: "991",
			meanMenuContainer: ".menu-container",
			meanMenuClose: "<span class='close'></span>",
			meanMenuOpen: "<span class='open'></span>",
		});

		var swiper_home = new Swiper('.home-page-slider', {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.swiper-pagination-home',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-home-next',
				prevEl: '.swiper-home-prev',
			},
		});


		/*----------------------------Counter Animation-------------------------------*/
		if ($('.counter-animation').length > 0) {
			console.log("count ready");
			var a = 0;
			var oTop = $('.counter-animation').offset().top - window.innerHeight;
			if (a == 0) {
				$('.count').each(function () {
					var $this = $(this),
						countTo = $this.attr('data-count');
					$({
						countNum: $this.text()
					}).animate({
						countNum: countTo
					},
						{
							duration: 5000,
							easing: 'swing',
							step: function () {
								$this.text(Math.floor(this.countNum));
							},
							complete: function () {
								$this.text(this.countNum);
							}
						});
				});
				a = 1;
			}
		}

		/*-------------------------------------------------------------------*/

		/*-----------------Sticky Header ---------------------*/
		var $height = 1;
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();
			if (scroll >= $height) {
				$(".header-wrapper").addClass("sticky");
				$("body").addClass("header-fixed");
			} else {
				$(".header-wrapper").removeClass("sticky");
				$("body").removeClass("header-fixed");
			}
		});

		/*---------------------------------------------------*/
		/*------------------------megamenu-child---------------------------*/
		$('.site-menu-main .menu-items').each(function () {
			liCount = $(this).children('div.menu-item').length;
			$(this).parent().parent().addClass("list-col-"+liCount);
		});
		
		$('.site-menu-main').find('.without-image').parent().parent().addClass('no-image');
		/*---------------------------------------------------*/

		var testimonials = new Swiper('.testimonials', {
			navigation: {
				nextEl: '.swiper-testimonial-next',
				prevEl: '.swiper-testimonial-prev',
			},
			slidesPerView: 1,
			spaceBetween: 30,
			breakpoints: {
				640: {
					slidesPerView: 2,
					spaceBetween: 30
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 30
				}
			}
		});

		var client_logos = new Swiper('.client-logos', {
			slidesPerView: 2,
			spaceBetween: 0,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			breakpoints: {
				480: {
					slidesPerView: 3,
				},
				640: {
					slidesPerView: 4,
				},
				768: {
					slidesPerView: 5,
				}
			},
			navigation: {
				nextEl: '.swiper-button-next-logo',
				prevEl: '.swiper-button-prev-logo',
			},
		});


		var block1 = new Swiper('.block1-swiper', {
			slidesPerView: 1,
			spaceBetween: 0,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.block1-swiper-next',
				prevEl: '.block1-swiper-prev',
			},
			pagination: {
				el: '.block1-swiper-pagination',
				clickable: true,
			},
		});


		var block2 = new Swiper('.block2-swiper', {
			slidesPerView: 1,
			spaceBetween: 0,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.block2-swiper-next',
				prevEl: '.block2-swiper-prev',
			},
			pagination: {
				el: '.block2-swiper-pagination',
				clickable: true,
			},
		});



		if ($('body').hasClass("single-professionnels")) {
			$("#menu-item-232").addClass("current-menu-item");
		}

	});

	$(window).on('load', function () {
		var $grid = $('.grid').packery({
			itemSelector: '.grid-item'
		});
	});

}(jQuery));

