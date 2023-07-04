const prev = document.querySelector("#prev"); // кнопка предыдущее фото
const next = document.querySelector("#next"); // кнопка слудующее фото
const slideImg = document.querySelector(".slider-img img"); // текущее большое фото

// при нажатии на кнопку следующего фото
next.onclick = () => {
	// выбрать фото с классом active
	let currentSlide = document.querySelector(".slider .slider-small-img li.active");
		//console.dir(currentSlide);

	// удалить класс active с выбранного фото
	currentSlide.classList.remove("active");

	// Выбрать следующее за active фото
	let nextSlide = currentSlide.nextElementSibling;
		 
	 if(nextSlide) {
	 	// если фото есть, задать ему класс active
	 	 nextSlide.classList.add("active");
	 } else {
	 	// если такого фото нет, значит конец списка, 
	 	// выбрать из списка первый слайд
	 	nextSlide = document.querySelector(".slider .slider-small-img li");
	 	// присвоить выбранному слайду класс active
	 	nextSlide.classList.add("active");
	 }

	// присвоить большому фото ресурс маленького фото из списка
	slideImg.src = nextSlide.querySelector("img").src;

	// Передвинуть скролл слайдера
	scrollSlider(nextSlide);
}

// при нажатии на кнопку предыдущего фото
prev.onclick = () => {
	// поулчить фото, у которого класс active
	let currentSlide = document.querySelector(".slider .slider-small-img li.active");
		//console.dir(currentSlide);

	/*удалить у выбранного фото класс active*/
	currentSlide.classList.remove("active");

	/*выбрать предыдущее фото от активного*/
	let prevSlide = currentSlide.previousElementSibling;
	 

	if(prevSlide) {
		// если фото есть, присвоить ему класс active
	 	 prevSlide.classList.add("active");
	} else {
		/*если фото нет, значит начало скиска
		выбрать из списка последнее фото*/
		prevSlide = document.querySelector(".slider .slider-small-img li:last-child");
		/*присвоить выбранному фото класс active*/
		prevSlide.classList.add("active");
	}

	/*присвоить большому фото ресурс маленьго фото из списка*/
	slideImg.src = prevSlide.querySelector("img").src;

	// Передвинуть скролл слайдера
		scrollSlider(prevSlide);
}


/*Зроби перемикання картинок при натисканні на мініатюру, 
тобто при натисканні на маленьку картинку показуй її у великому вигляді.*/

document.addEventListener("click", e => {
	// получить родителя
	// проверить id родителя
	// если id родителя slider-small-elem
	if(e.target.parentNode.id == "slider-small-elem") {
		// присвоить большой картинке src меленькой
		slideImg.src = e.target.src;
		
		// пройтись по всем картинкам и удалить у них класс active
		document.querySelectorAll(".slider #slider-small-elem img").forEach((element) => { 
			/*element.className = "";*/
			element.parentElement.classList.remove("active");
		});

		// присвоить выбранной маленькой картинке класс active
		/*e.target.className = "active";*/
		e.target.parentNode.classList.add("active");

		// Передвинуть скролл слайдера
		scrollSlider(e.target);
	} 
});

// Прокручивает слайдер, если выбрано граничное фото
function scrollSlider(argument) {
	scroll_slider = document.querySelector(".slider .slider-small-img");

	/*Количество картинок в видимой зоне*/
	let numOfvisibleImages = scroll_slider.offsetWidth / (argument.width + 5);

	// Если расстояние от выделенного объекта до конца поля меньше чем ширина 2-х картинок - скролить
	if((scroll_slider.offsetWidth - argument.offsetLeft) <= argument.offsetWidth * 2) {
		// скролл вправо
		scroll_slider.style.scrollBehavior="smooth";
		scroll_slider.scrollLeft = 1000;
	} else if ((argument.offsetLeft - 1000) <= argument.offsetWidth) {
		// скролл влево
		scroll_slider.style.scrollBehavior="smooth";
		scroll_slider.scrollLeft = -1000;
	}
}



/*SLIDER-NEWS JQuery*/
slider = $('.slider.news');

$('#prev-news').on('click', () => {
	// получить предыдущий элемент от активного
	let elem = $(".slider.news .slider-small-img li.active").prev();

	// удалить у активного элемента класс active
	$(".slider.news .slider-small-img li.active").removeClass('active');
	
	//если предыдущий элемент не найден - начало списка
	if(!elem.length) {
		// присвоить elem объект конца списка
		elem = $(".slider.news .slider-small-img li:last-child");
		console.dir(elem);
	} 

	//задать элементу класс active
	elem.addClass('active');
	console.dir(elem);
	//задать основной картинке src миниатюры
	$( '.slider.news .slider-img img' ).attr( 'src', elem.find( 'img' )./*css({'border':'2px solid red'}).*/attr( 'src' ) );
});

$('#next-news').on('click', () => {
	// получить следующий элемент от активного
	let elem = $(".slider.news .slider-small-img li.active").next();

	// удалить у активного элемента класс active
	$(".slider.news .slider-small-img li.active").removeClass('active');
	
	//если следующий элемент не найден - конец списка
	if(!elem.length) {
		// присвоить elem объект начала списка
		elem = $(".slider.news .slider-small-img li:first-child");
		console.dir(elem);
	} 

	//задать элементу класс active
	elem.addClass('active');
	console.dir(elem);
	//задать основной картинке src миниатюры
	$( '.slider.news .slider-img img' ).attr( 'src', elem.find( 'img' )./*css({'border':'2px solid red'}).*/attr( 'src' ) );
});


/*
	slider.css({
		'border': '1px solid red',
		'border-radius': '5px',
		'background': 'blue'
	});

	$('#prev').on('click', () => {
		alert("alert");
	});
*/







