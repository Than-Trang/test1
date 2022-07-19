
// open menu
$('.the4s_btn_menu_mobible').click(function (e) {
    $('.the4s_section_menu').addClass('the4s_menu_mobile').show(200);
    $('.overlay').show(200);
});
//close menu
$('.the4s_exit').click(function (e) {
    $('.the4s_section_menu').removeClass('the4s_menu_mobile').hide(200);
    $('.overlay').hide(200);
});
// open sub menu
$('.the4s_link_menu_item').click(function(){
     $(this).siblings('.sub-menu').toggleClass('open').slideToggle(300);
 });

$('.the4s_link_menu_small').click(function(){
    $(this).siblings('.the4s_sub_menu_small').toggleClass('open').slideToggle(300);
});

//click out side

$(window).resize(function() {
    
    if ($(this).width() < 992) {
	
        $(document).mouseup(function(e) 
        {
            var container = $('.the4s_section_menu '),
                container1 = $('.overlay');
    
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                container.hide(300);
                container1.hide(400);
            }
        });
    }
  });
// $('.the4s_link_menu_item').click(function(){
//     this.slideToggle(400);
//     this.toggleClass('the4s_change_arrow')
// });

