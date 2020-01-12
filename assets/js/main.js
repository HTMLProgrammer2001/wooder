$(document).ready(function(e){
	let active_trans = false;

	$('#url').val(location.href);

	$('.intro-content-vmenu-menu a').on('click', function(e){
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).position().top
		}, 500);

		return false;
	});

	$('#scroll').on('click', function(e){
		$('html, body').animate({
			scrollTop: $('.intro').height()
		}, 500);
	});

	$('#watch').on('click', function(e){

		$('.video-rol').css({
			zIndex: 1
		});

		$('.video-rol').animate({
			opacity: 1
		}, 500, function(){
        	$('.video-rol')[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
    	 });
	});

	$('#copy').on('click', function(){
		$('#url')[0].select();

		document.execCommand('copy')
	});

	$('#translate').on('click', function(){
		if(!active_trans)
			$(this).addClass('active').parent().find('.translate-select').animate({
				height: '100%'
			}, 300);
		else
			$(this).removeClass('active').parent().find('.translate-select').animate({
				height: 0
			}, 300);

		active_trans = !active_trans;
	});
	
	$('.burger').on('click', function(e){
	   $(this).toggleClass('burger-active'); 
	});
});