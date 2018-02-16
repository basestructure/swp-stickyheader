
( function($) {

	var $body         	= $( 'body' ),
		headerHeight  	= $( '.site-header' ).height(),
		$siteHeader   	= $( '.site-header' ),
		$siteInner    	= $( '.site-inner' ),
		AddTheseClass 	= infini_extra_var.swp_addtheseclasses,
		WhenTopIsOn   	= infini_extra_var.swp_whentopison,
		swp_wi_element	= infini_extra_var.swp_wi_element,
		swp_wi_trigger	= infini_extra_var.swp_wi_trigger,
		swp_wi_class	= infini_extra_var.swp_wi_class;

	// Add white class to site container after 50px.
	$(document).on( 'scroll', function() {

		if ( $(document).scrollTop() > WhenTopIsOn ) {
			$( '.site-header' ).addClass( AddTheseClass );

		} else {
			$( '.site-header' ).removeClass( AddTheseClass );
		}

	});

	// Push the .site-inner down dependant on the header height.
	if ( ! $body.hasClass( 'front-page' ) ) {

		__repositionSiteHeader( headerHeight, $siteInner );

		$(window).resize(function() {

			// Update header height value.
			headerHeight = $siteHeader.height();
			__repositionSiteHeader( headerHeight, $siteInner );

			// width
			if( $( swp_wi_element ).length ) {

				if( $( window ).width() <= swp_wi_trigger ) {

					$( swp_wi_element ).addClass( swp_wi_class );

				} else {

					$( swp_wi_element ).removeClass( swp_wi_class );

				}

			}

		});

	}

	// Function to get the CSS value of the position property of the passed element.
	function __getPositionValue( selector ) {

		var position = $( selector ).css( 'position' );

		return position;

	}

	// Function to position the site header.
	function __repositionSiteHeader( headerHeight, $siteInner ) {

		if ( 'fixed' == __getPositionValue( '.site-header' ) ) {
			$siteInner.css( 'margin-top', headerHeight + 'px' );
		} else {
			$siteInner.removeAttr( 'style' );
		}

	}

})(jQuery);
