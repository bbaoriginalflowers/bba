// This is where it all goes :)

//= require jquery
//= require foundation



// (function() {

//   "use strict";

//   var toggles = document.querySelectorAll(".c-hamburger");

//   for (var i = toggles.length - 1; i >= 0; i--) {
//     var toggle = toggles[i];
//     toggleHandler(toggle);
//   };

//   function toggleHandler(toggle) {
//     toggle.addEventListener( "click", function(e) {
//       //e.preventDefault();
//       e.defaultPrevented();
//       (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
//     });
//   }

// })();

// $(".c-hamburger").toggle(function() {

// })

$(document).ready(function() {
	console.log("foundation init")
	$(document).foundation();
	console.log("click function added");
	$(".c-hamburger").click(function() {
		$(this).toggleClass("is-active");
		$('.s-container').toggleClass("menu-active");
		$('#background-flower').toggleClass("background-no-active");
		$('#background-flower-green').toggleClass("background-active");
	});

	console.log("contact-menu setted");
	$("#contact-menu").click(function() {
		console.log('contact-menu clicked');
		$("#logo-container").toggleClass("content-active");
		$("#contact-form-container").toggleClass("viewable");
		$('#background-flower-green').toggleClass("background-active-content");
		$('#background-flower').toggleClass("background-no-active-content");
	})
})