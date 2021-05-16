// $( ".navbar .center_links ul link" ).hover(
//   function() {
//     $(this).parent().find(".sub_navbar").addClass("sub_navbar_active");
//   }, function() {
//     $( this ).removeClass( "hover" );
//   }
// );

$(".navbar .dropdown_quiz").hover(function () {
	if ($(window).width() > 860) {
	   $(this).find(".sub_navbar").addClass("sub_navbar_active");
	   $(this).find(".link").addClass("link_hovered");
	}
}, function () {
	if ($(window).width() > 860) {
	   $(this).find(".sub_navbar").removeClass("sub_navbar_active");
	   $(this).find(".link").removeClass("link_hovered");
	}
});
$( ".navbar .center_links ul .dropdown_quiz .link" ).click(function(e) {
	if ($(window).width() < 860) {
	    e.preventDefault();
	    if($(this).hasClass("link_hovered")){
		  $(this).parent().find(".sub_navbar").removeClass("sub_navbar_active");
		  $(this).removeClass("link_hovered");
		}else{
		  $(this).parent().find(".sub_navbar").addClass("sub_navbar_active");
		  $(this).addClass("link_hovered");
		}
	}
});

$( ".navbar .lines" ).click(function(e) {
	if ($(window).width() < 860) {
	    e.preventDefault();
	    if($(".navbar").hasClass("navbar_active")){
		  $(".navbar").removeClass("navbar_active");
		}else{
		  $(".navbar").addClass("navbar_active");
		}
	}
});


$( ".navbar .right_link ul li .btn" ).click(function(e) {
    e.preventDefault();
    if($(this).parent().hasClass("options_active")){
	  $(this).parent().removeClass("options_active");
	}else{
	  $(this).parent().addClass("options_active");
	}
});

$('body').click(function(evt){    
   if($(evt.target).closest('#options_active').length){
   	return; 
   }
   $("#options_active").removeClass("options_active");
});

var datainputi = 0;
$('#datainp').on('input',function(event) {
  var inputLength = event.target.value.length;
  if(inputLength === 2){
    var thisVal = event.target.value;
    thisVal += '/';
    $(event.target).val(thisVal);
    datainputi = datainputi + 1;
  }
  if(inputLength === 3){
    if(datainputi === 1){
      $(this).val("");
      datainputi = 0;
    }
  }
});

$(function(){
  $("input[name='onlynumbers']").on('input', function (e) {
    $(this).val($(this).val().replace(/[^0-9]/g, ''));
  });
});
$( ".notes_sec1 .option h3" ).click(function(e) {
    e.preventDefault();
    if($(this).parent().hasClass("option_active")){
    	$(this).parent().removeClass("option_active");
    	$(this).parent().find(".inside").css("max-height", "0px");
    	$("body").removeClass("disable_scroll");
    }else{
    	$(this).parent().addClass("option_active");
    	var heightofoptions = $(this).parent().find(".inside_wrapper").height() + 11;
    	$(this).parent().find(".inside").css("max-height", heightofoptions);
    	if ($(window).width() < 860) {
    	   $("body").addClass("disable_scroll");
    	}
    }
});
$( ".notes_sec1 .option .inside .selectedbtn a" ).click(function(e) {
    e.preventDefault();
	$(this).parent().parent().parent().parent().removeClass("option_active");
	$(this).parent().parent().parent().parent().find(".inside").css("max-height", "0px");
    $("body").removeClass("disable_scroll");
});
$( ".notes_sec1 .option .inside .xicon" ).click(function(e) {
    e.preventDefault();
	$(this).parent().parent().parent().removeClass("option_active");
	$(this).parent().parent().parent().find(".inside").css("max-height", "0px");
    $("body").removeClass("disable_scroll");
});
$( window ).resize(function() {
  if ($(window).width() > 860) {
    $("body").removeClass("disable_scroll");
  }
  // if ($(window).width() < 860) {
  //   $(".notes_sec1 .option_active").removeClass("option_active");
  // }
});
$( ".notes_sec1 .option .inside .inside_wrapper .op" ).click(function(e) {
    e.preventDefault();
    if($(this).hasClass("op_active")){
	    $(this).removeClass("op_active");
	    var n = $( ".notes_sec1 .option .inside .inside_wrapper .op_active" ).length;
	    if(n == 0){
	    	$(".notes_sec1 .right_content").removeClass("content_active")
	    }
    }else{
	    $(".notes_sec1 .option .inside .inside_wrapper .op").removeClass("op_active");
	    $(this).addClass("op_active");
	    $(".notes_sec1 .right_content").addClass("content_active")
    }
});









