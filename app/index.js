/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// ================================
// START YOUR APP HERE
// ================================

console.log('hello');

$('#mobileMenu').on('click', function(){
	$('.header__topBar--mobile ul').toggle();
});


