$(document).ready(function(){
	// $(".operator").click(function(){
	// 	var clickOperator = $(this).text();
	// 	//jquery wants to wrap it!
	// 	console.log(clickOperator);
	// 	});
	
	$("span").click(function(){
		var clickNum = $(this).html();
		console.log(clickNum);
		$("#screen").html(clickNum);
		
		}); //ends span click event 
		//jquery needs to wrap this



	
		//these operators are division,multiplication,
		//subtract,plus
	

	
});