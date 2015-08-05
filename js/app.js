$(function () {
	initRyu();
});

function initRyu () {
	$(".ryu").mouseenter(function () {
		$(".ryu-still").hide();
		$(".ryu-ready").show();

		$(".ryu").mousedown(function () {
			// show fire animation
			$(".ryu-ready").hide();
			$(".ryu-still").hide();
			$(".ryu-throwing").show();
			$(".hadouken")
			.finish()
			.show()
			.animate(
				{'left':'1020px'}, 900,
				function () { $(this).hide();
							$(this).css('left', '-150px'); }
			);
			// play throwing sound
			playHadouken();			
		});

		$(".ryu").mouseup(function () {
			// return ryu to ready state
			$(".ryu-throwing").hide();
			$(".ryu-ready").show();
		});
	})
	.mouseleave(function () {
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	});

	$(document).keydown(function (e) {
		if (e.which == 88) {
			stylinRyu();
		}
	})
	.keyup(function (e) {
		if (e.which == 88) {
			fightReady();
		}
	});
}

function playHadouken () {
	$("#hadouken-sound")[0].volume = "1";
	$("#hadouken-sound")[0].load();
	$("#hadouken-sound")[0].play();
}

function stylinRyu () {
	$(".ryu-still, .ryu-ready, .ryu-throwing").hide();
	$(".ryu-cool").show();
	//prevent hadouken when styling
	// $(".ryu").mousedown(function(event){
	// 	event.preventDefault();
	// 	console.log("should not show if prevented");
	// });
}

function fightReady () {
	$(".ryu-cool").hide();
	$(".ryu-still").show();
}