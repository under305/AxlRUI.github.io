$(document).ready(main);

	var ok = 1;

function main(){
		$('.menu').click(function(){
			if (ok == 1){
				$('nav').animate({
					left: '0'
				});
				ok = 0;
			}else{
				ok = 1;
				$('nav').animate({
					left: '-100%'
				});
			}
		});
		$('.submenu').click(function(){
			$(this).children('.hijo').slideToggle();
		});
}