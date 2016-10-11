(function () {
	initMenu();
})();

function initMenu() {
	var navMain   = document.querySelector( '.main-nav' ),
		navToggle = document.querySelector( '.main-nav__toggle' );

	navMain.classList.remove( 'main-nav--nojs' );

	navToggle.addEventListener( 'click', function() {

		if ( navMain.classList.contains( 'main-nav--closed' ) ) {
			navMain.classList.remove( 'main-nav--closed' );
			navMain.classList.add( 'main-nav--opened' );
		} else {
			navMain.classList.add( 'main-nav--closed' );
			navMain.classList.remove( 'main-nav--opened' );
		}
	});
}

function initMap() {
	var center = {
		lat: 59.936213, lng: 30.322656
	},
	map, marker;

	map = new google.maps.Map( document.getElementById( 'map' ), {
		center: center,
		scrollwheel: false,
		draggable: false,
		zoom: 16
	} );

	marker = new google.maps.Marker({
		position: center,
		icon: 'img/icon-map-pin.svg',
		map: map
	});
}
