(function () {
	initMenu();
	initPopup();
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

function initPopup() {
	var modal      = document.getElementById( 'modal' ),
		addBtn     = null !== modal ? modal.querySelector('.sizes-select-form__add') : null,
		orderBtn   = document.querySelector( '.featured__btn' ),
		productBtn = document.querySelectorAll( '.product__more-link' );

	if ( orderBtn ) {
		orderBtn.onclick = function( event ) {
			event.preventDefault();
			modal.classList.add( 'modal-window--show' );
		}
	}

	if ( productBtn ) {
		for ( var i = 0; i < productBtn.length; i++ ) {
			productBtn[i].onclick = function() {
				event.preventDefault();
				modal.classList.add( 'modal-window--show' );
			}
		}
	}

	if ( addBtn ) {
		addBtn.onclick = function() {
			event.preventDefault();
			modal.classList.remove( 'modal-window--show' );
		}
	}
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
		icon: 'img/icons/icon-map-pin.svg',
		map: map
	});
}
