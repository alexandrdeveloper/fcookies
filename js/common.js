$(document).ready(function() {
	const menuToggle = $('.menu__toggle');
	const menuList = $('.header__menu-list');
	const headerPhone = $('.header__phone');

	menuToggle.on('click', function() {
		menuToggle.toggleClass('menu__toggle_active');
		menuList.toggleClass('header__menu-list_visible');
		headerPhone.toggleClass('header__phone_visible');
		
	});
	
	var clock;
	clock = $('.clock').FlipClock({
		clockFace : 'DailyCounter',
		autostart : false
	});

	const dt = $('.clock').data('deadline');
	const first = new Date(dt);
	const last = Date.now();
	const remaining = first - last;
	

	clock.setTime(remaining / 1000);
	clock.setCountdown(true);
	clock.start();

	const dayLabel = $('.flip-clock-wrapper .days .flip-clock-label');
	const hoursLabel = $('.flip-clock-wrapper .hours .flip-clock-label');
	const minutesLabel = $('.flip-clock-wrapper .minutes .flip-clock-label');
	const secondsLabel = $('.flip-clock-wrapper .seconds .flip-clock-label');
	dayLabel.html("Дней");
	hoursLabel.html("Часов");
	minutesLabel.html("Минут");
	secondsLabel.html("Секунд");

	const sliderOne = $('.addition__slideshow');
	const sliderClients = $('.clients__slideshow');
	const sliderKindsUno = $('.kinds__slideshow');
	const sliderKindsDuo = $('.kinds__slideshow2');
	sliderOne.slick({
		autoPlay : true,
		slidesToShow : 2,
		infinite : false,
		dots : true,
		responsive : [ 
		{
			breakpoint : 720,
			settings: {
				slidesToShow: 1,
				arrows : false

			}
		}			
		]

	});

	sliderClients.slick({
		slidesToShow : 4,
		infinite : false,
		dots : true,
		responsive : [ 
		{
			breakpoint : 480,
			settings: {
				slidesToShow: 1,
				arrows : false
				
			}
		},
		{
			breakpoint : 773,
			settings: {
				slidesToShow: 2,
				arrows : false
				
			}
		},
		{
			breakpoint : 997,
			settings: {
				slidesToShow: 3
			}
		}

		]
	});

	sliderKindsUno.slick({
		slidesToShow: 3,
		infinite : false,
		dots : true,
		responsive : [ 
		{
			breakpoint : 720,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows : false
							
			}
		}			
		]
	});

	const tabControl = $('.tab-control');
	const tabControlUno = $('#tab-control1');
	const tabControlDuo = $('#tab-control2');
	const tab = $('.kinds__tab')
	const tabUno = $('#tab1');
	const tabDuo = $('#tab2');
	const activationClass = 'kinds__tab_visible';



	
	tabControlUno.on('click', function() {
		tabControl.removeClass('tab-control_active');
		tabControlUno.toggleClass('tab-control_active');
		tab.removeClass(activationClass);
		tabUno.toggleClass(activationClass);
		
	});
	tabControlDuo.on('click', function() {
		tabControl.removeClass('tab-control_active');
		tabControlDuo.toggleClass('tab-control_active');
		tab.removeClass(activationClass);
		tabDuo.toggleClass(activationClass);
		sliderKindsDuo.slick({
			slidesToShow: 3,
			infinite : false,
			dots : true,
			responsive : [ 
			{
				breakpoint : 720,
				settings: {
					slidesToShow: 1,
					arrows : false
					
				}
			}			
			]
		});

	});

	

	$(window).scroll(function(){
		const statVal = $('.statistic__value');

		
		const statSec = $('.statistic');
		const statPos = statVal.offset().top;
		
		const statHg = statVal.outerHeight();
		const windHg = $(window).height();
		const topWind = $(window).scrollTop();

		if (statPos < topWind + 250) {
			statVal.countTo({
				speed : 500,
				refreshInterval: 50		        
			})			
		};
	});
		



	const popUpOpen = $(".popup_activator");
	const popUpWindow = $(".pop-up");
	const popUpClose = $(".pop-up__close");
	const popUpButton = $('.pop-up__button');
	const getProduct = $('.get-product');
	const getCost = $('.get-cost');
	const getPrice = $('.get-price');
	const videoLink = $('.video-link');
	const videoPopup = $('.video-popup');
	getProduct.on('click', function() {
		popUpButton.html('Заказать партию');
	});
	getCost.on('click', function() {
		popUpButton.html('Заказать расчет');
	});
	getPrice.on('click', function() {
		popUpButton.html('Заказать прайс-лист');
	});


	popUpOpen.on('click', function() {
		popUpWindow.toggleClass('pop-up_active').fadeIn(100);
	});
	videoLink.on('click', function() {
		videoPopup.toggleClass('video-popup_visible').fadeIn(100);
	});

	popUpClose.on('click', function() {
		popUpWindow.removeClass('pop-up_active');
		videoPopup.removeClass('video-popup_visible');
	});


	
	
	


});






	
	


























