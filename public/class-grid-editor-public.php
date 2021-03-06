<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Grid_Editor
 * @subpackage Grid_Editor/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Grid_Editor
 * @subpackage Grid_Editor/public
 * @author     Your Name <email@example.com>
 */
class Grid_Editor_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $grid_editor    The ID of this plugin.
	 */
	private $grid_editor;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $grid_editor       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $grid_editor, $version ) {

		$this->grid_editor = $grid_editor;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Grid_Editor_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Grid_Editor_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->grid_editor, plugin_dir_url( __FILE__ ) . 'css/grid-editor-public.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Grid_Editor_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Grid_Editor_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->grid_editor, plugin_dir_url( __FILE__ ) . 'js/grid-editor-public.js', array( 'jquery' ), $this->version, false );

	}

}
