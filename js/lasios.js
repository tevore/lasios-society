/* Lasios Main Javascript/JQuery */

/* Quote Generator */
// CSS values
var height = 300;
var left = 400;

// function should subtract the 250px from the nav section
// of the entire width of the screen, and then change css with
// a value for a width not dead center, and not within nav section  
function qGen() {
	var array = ["quote1","quote2","quote3","quote4","quote5"];
	var choice = Math.round(Math.random() * (array.length));
	var l2 = Math.round(Math.random() * 1000 + left);
	var t2 = Math.round(Math.random() * 700 + height);
	console.log(l2);
	$("#quote" + choice).css("left",l2);
	$("#quote" + choice).css("top",t2);
	$("#quote" + choice).fadeIn(2500);
	$("#quote" + choice).fadeOut(2500);
}

//Add in behavior for hover classes
//so make sure to add in hover classes to css as well  

$(document).ready(function() {
	$("nav").fadeIn(2000);
	
	setInterval(function(){qGen()}, 5000);
});

