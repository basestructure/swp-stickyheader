<?php
/**
 * Plugin Name: SWP - Fixed Header
 * Description: Change header's appearance upon scrolling.
 * Version: 1.0
 * Author: Jake Almeda
 * Author URI: http://smarterwebpackages.com/
 * Network: true
 * License: GPL2
 */


class InfinityHeaderCopy {

	public $addtheseclasses    = 'white',
		   $addthemwhentopisat = '50',
		   $widthtargetelement = '.site-header',
		   $widthtrigger	   = '700',
		   $widthclasstoadd	   = 'coco_2017';

	public function swp_infini_hack_scripts() {
		
	    //wp_enqueue_script( 'swp_infiniheader', plugins_url( 'js/infinity_hack.js', __FILE__ ), NULL, '1.0', TRUE );
	   	wp_register_script( 'swp_infiniheader', plugins_url( 'js/infinity_hack.js', __FILE__ ), NULL, '1.0', TRUE );
	     
	    // Localize the script with new data
	    $extra_var = array(
	        'swp_addtheseclasses' 	=> $this->addtheseclasses,
	        'swp_whentopison'	 	=> $this->addthemwhentopisat,
	        'swp_wi_element'		=> $this->widthtargetelement,
	        'swp_wi_trigger'		=> $this->widthtrigger,
	        'swp_wi_class'			=> $this->widthclasstoadd,
	    );
	    wp_localize_script( 'swp_infiniheader', 'infini_extra_var', $extra_var );
	     
	    // Enqueued script with localized data.
	    wp_enqueue_script( 'swp_infiniheader' );

	}

	public function __construct() {
		
        // enqueue scripts
		add_action( "wp_enqueue_scripts", array( $this, "swp_infini_hack_scripts" ) );

    }

}

$infinity_header = new InfinityHeaderCopy();
