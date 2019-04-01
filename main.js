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
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  centerMode: false,
  variableWidth: true,
  infinite: false,
  focusOnSelect: true,
  touchMove: true,
  easing:'linear',
   prevArrow:'<button class="slick-prev"> < </button>',
  nextArrow:'<button class="slick-next"> > </button>'

  
  });
  $('.slide').click(function(){
  	console.log('ss');
 $('.slide').removeClass('ff');
  $(this).toggleClass('ff');
   
})


});