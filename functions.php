<?php
// Add custom Theme Functions here

// Enqueue custom WooCommerce swatches script for T-Shirt category
function enqueue_custom_woocommerce_swatches_script() {
    if (is_product() && has_term('T-Shirt', 'product_cat')) {
        // Only load this script on product pages of category 'T-Shirt'
        wp_enqueue_script('custom-woocommerce-swatches', get_stylesheet_directory_uri() . '/custom-woocommerce.js', array('jquery'), '1.0.0', true);
    }
}
add_action('wp_enqueue_scripts', 'enqueue_custom_woocommerce_swatches_script');

function enqueue_custom_woocommerce_default_selection_script() {
    if (is_product()) {
        wp_enqueue_script('custom-woocommerce-default-selection', get_stylesheet_directory_uri() . '/woocommerce-default-selection.js', array('jquery'), '1.0.0', true);
    }
}
add_action('wp_enqueue_scripts', 'enqueue_custom_woocommerce_default_selection_script');

add_action( 'woocommerce_single_product_summary', function () {
    global $product;

    // Check if the product is of category T-shirts
    if ( has_term( 'T-Shirt', 'product_cat', $product->get_id() ) ) {
        echo '<div style="display: inline-block; margin-right: 10px;">';
        echo do_shortcode( '[button text="Size Chart" size="xsmall" radius="99" link="#size-chart"][lightbox id="size-chart" width="600px" padding="20px"][block id="size-chart"][/lightbox]' );
        echo '</div>';
        
        echo '<div style="display: inline-block;">';
        echo do_shortcode( '[button text="Product Information" size="xsmall" radius="99" link="#product-info"][lightbox id="product-info" width="600px" padding="20px"][block id="product-info"][/lightbox]' );
        echo '</div>';
    }
}, 12 );

function add_default_tshirt_attributes($object_id, $terms, $tt_ids, $taxonomy) {
    // Ensure we're only looking at product categories
    if ('product_cat' !== $taxonomy) {
        return;
    }

    // Check if it's a product
    if (get_post_type($object_id) != 'product') return;

    // Check if it's just a revision
    if (wp_is_post_revision($object_id)) return;

    // Check if product is in the T-shirt category
    if (has_term('T-Shirt', 'product_cat', $object_id)) {
        $product = wc_get_product($object_id);

        // Check if product already has the attributes, if so, skip
        $attributes = $product->get_attributes();
        if (isset($attributes['pa_shirt-style']) && isset($attributes['pa_shirt-color'])) return;

        // Set shirt-style attribute
        $attributes['pa_shirt-style'] = array(
            'name' => 'pa_shirt-style',
            'value' => '',
            'position' => 0,
            'is_visible' => 1,
            'is_variation' => 0,
            'is_taxonomy' => 1
        );

        // Set shirt-color attribute
        $attributes['pa_shirt-color'] = array(
            'name' => 'pa_shirt-color',
            'value' => '',
            'position' => 1,
            'is_visible' => 1,
            'is_variation' => 0,
            'is_taxonomy' => 1
        );

        // Set the attributes and save the product
        $product->set_attributes($attributes);
        $product->save();
    }
}
add_action('set_object_terms', 'add_default_tshirt_attributes', 10, 4);


