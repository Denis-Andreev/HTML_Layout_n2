
// Настройки слик слайдера
$('.our-team__slider').slick({
  infinite: true,
  dots: true,
  accessibility: false,
  slidesToShow: 3,
  arrows: false,
  slidesToScroll: 3,
  touchTheshold:40,
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 715,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        accessibility: true,
      }
    }
  ],

});
document.querySelector("#menu__mobile").onclick = function () {
	let menuList = document.querySelector(".menu__list");
	let logo = document.querySelector(".logo");
	if (logo.style.display != "none") {
		// logo.style.display = "none";
	}
	if(menuList.style.display == "block") {
		menuList.style.display = "none";
		logo.style.display = "block";
	} 
	else {	
		menuList.style.display = "block";
	}	
};