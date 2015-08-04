$(function(){
	$(".ryu").mouseenter(function(){
		$(".ryu-ready").show();
		$(".ryu-still").hide();
	});

	$(".ryu").mouseleave(function(){
		$(".ryu-still").show();
		$(".ryu-ready").hide();
	});
});