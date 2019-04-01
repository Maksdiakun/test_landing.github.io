$(document).ready(function(){
$('.menu-toggle').click(function(e){
	$(this).toggleClass('menu-toggle_active');
	 $('.menu').toggleClass('visible');
	 $('.logo-title').toggleClass('unvisible');
	 $('.btn-title').toggleClass('unvisible');
	  $('.container ').children().toggleClass('unvisible');
	  $('#home ').toggleClass('unvisible');

});



$('.slider').slick({
  centerMode: false,
  variableWidth: true,
  infinite: false,
  slidesToScroll: 1,
  focusOnSelect: true,
  slidesToShow: 1,
  arrows: false
 
});


});