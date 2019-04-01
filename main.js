$(document).ready(function(){
$('.menu-toggle').click(function(e){
	$(this).toggleClass('menu-toggle_active');
	 $('.menu').toggleClass('visible');
	 $('.logo-title').toggleClass('unvisible');
	 $('.btn-title').toggleClass('unvisible');
	  $('.container ').children().toggleClass('unvisible');
	  $('#home ').toggleClass('unvisible');

});
  // $('.slider').slick({
  // 	 infinite: true,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     arrows:false,
  //     edgeFriction:0.15,
  //     initialSlide:0
  // //      slidesToShow: 1,
  // // slidesToScroll: 1,
  // // arrows: false,
  // // dots: false,
  // // centerMode: true,
  // // variableWidth: true,
  // // infinite: true,
  // // focusOnSelect: true,

  // });


  $('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  variableWidth: true,
  infinite: true,
  focusOnSelect: true,
  touchMove: true,
   prevArrow:'<button class="slick-prev"> < </button>',
  nextArrow:'<button class="slick-next"> > </button>'
  
  

});


// var imgs = $('.slider img');
// imgs.each(function(){
//   var item = $(this).closest('.item');
//   item.css({
//     'background-image': 'url(' + $(this).attr('src') + ')', 
//     'background-position': 'center',            
//     '-webkit-background-size': 'cover',
//     'background-size': 'cover', 
//   });
//   $(this).hide();
// });
 
});