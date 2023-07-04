asked_section__accordeon = document.querySelector("asked-section__accordeon");
btnCollapseExpand = document.querySelector(".collapse-all");

// Нажатие на кнопку Expand/Collapse all
btnCollapseExpand.onclick = () => {
	// Если все свернуто
	if(btnCollapseExpand.className == "collapse-all collapse-all-collapsed") {
		// если открыт хотябы один аккордеон, изменить текст кнопки
		btnCollapseExpandText();
		// развернуть
		expandAll();
		// задать кнопке класс
		btnCollapseExpand.className = "collapse-all collapse-all-expanded";
		// сменить текст кнопки
		btnCollapseExpand.textContent = "Collapse all";

	} else if(btnCollapseExpand.className == "collapse-all collapse-all-expanded") {
		// если открыт хотябы один аккордеон, изменить текст кнопки
		btnCollapseExpandText();
		// свернуть
		collapseAll();
		// задать кнопке класс
		btnCollapseExpand.className =  "collapse-all collapse-all-collapsed";
		// сменить текст кнопки
		btnCollapseExpand.textContent = "Expand all";
	}
}

document.addEventListener("click", e => {

	// Свернуть или развернуть блок контента по клику на уголок
	expandCollapseContent(e);

	// если открыт хотябы один аккордеон, изменить текст кнопки
	btnCollapseExpandText();
});

// Свернуть или развернуть блок контента по клику на уголок
	function expandCollapseContent(e) {
	// Если клик по иконке уголка смотрящего вправо - развернуть контент
	if(e.target.className == "icon-title__img collapse") {
		console.dir("noExpand");
		// поменять картинку уголка и класс
		e.target.src = "img/accordeon/angle_d.png";
		e.target.className = "icon-title__img expand";


		// получить номер картинки из ID
		let id = e.target.id;
		let numberOfPicture = id[id.length - 1];
		
		// развернуть блок под уголком
		document.querySelector("#item-accordeon__content_" + numberOfPicture).style.display = "block";

	} else if(e.target.className == "icon-title__img expand") {
		console.dir("expand");
		// поменять картинку уголка и класс
		e.target.src = "img/accordeon/angle_r.png";
		e.target.className = "icon-title__img collapse";

		// получить номер картинки из ID
		let id = e.target.id;
		let numberOfPicture = id[id.length - 1];
		
		// развернуть блок под уголком
		document.querySelector("#item-accordeon__content_" + numberOfPicture).style.display = "none";
	}	
}

// Развернуть весь контент во всех вкладках аккордеона
function expandAll() {
	console.log("FUNCTION: expandAll");

	// повернуть все иконки уголок вниз, поменять имя класса на expand
	let allAngles = document.querySelectorAll(".icon-title img");
		allAngles.forEach((element) => {
			element.src = "img/accordeon/angle_d.png";
			element.className = "icon-title__img expand";
		});
	
	// свернуть все блоки контента
	let allContent = document.querySelectorAll(".item-accordeon__content");
		allContent.forEach((element) => {
			element.style.display = "block";
		});
}

// Свернуть весь контент во всех вкладках аккордеона
function collapseAll(){
	console.log("FUNCTION: collapseAll");

	// повернуть все иконки уголок вправо, поменять имя класса на noExpand
	let allAngles = document.querySelectorAll(".icon-title img");
		allAngles.forEach((element) => {
			element.src = "img/accordeon/angle_r.png";
			element.className = "icon-title__img collapse";
		});
	
	// свернуть все блоки контента
	let allContent = document.querySelectorAll(".item-accordeon__content");
		allContent.forEach((element) => {
			element.style.display = "none";
		});
}

// если открыт хотябы один аккордеон, изменить текст кнопки
function btnCollapseExpandText() {

	// если все углы вправо, текст кнопки Expand all
	let allAngleImages = document.querySelectorAll(".icon-title__img");
	let isCollapsedAll = true;

	allAngleImages.forEach((element) => {
		// если хотябы один элемент открыт
		if(element.className == "icon-title__img expand") {
			isCollapsedAll = false;
		}
	});

	if(!isCollapsedAll) {
		btnCollapseExpand.textContent = "Collapse all";
		btnCollapseExpand.className =  "collapse-all collapse-all-expanded";
	} else {
		btnCollapseExpand.textContent = "Expand all";
		btnCollapseExpand.className =  "collapse-all collapse-all-collapsed";
	}
}