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

// Hook into WooCommerce product save
add_action('woocommerce_process_product_meta', 'auto_add_attributes_to_tshirt', 30, 2);
add_action('woocommerce_product_import_inserted_product_object', 'auto_add_attributes_to_tshirt_import', 10, 2);

function auto_add_attributes_to_tshirt($post_id, $post) {
    // Get the product categories
    $categories = wp_get_post_terms($post_id, 'product_cat', array('fields' => 'names'));

    // Check if product has "T-shirt" category
    if (in_array('T-shirt', $categories)) {

        $attributes = array(
            'shirt-color' => '', // You can set default values if needed
            'shirt-style' => ''
        );

        foreach ($attributes as $taxonomy => $value) {
            // If product doesn't already have the attribute
            if (!has_term('', 'pa_' . $taxonomy, $post_id)) {
                // Add the attribute
                wp_set_object_terms($post_id, $value, 'pa_' . $taxonomy, false);
                
                // Get the existing product attributes
                $product_attributes = get_post_meta($post_id, '_product_attributes', true);

                // Add our new attribute
                $product_attributes['pa_' . $taxonomy] = array(
                    'name' => 'pa_' . $taxonomy,
                    'value' => $value,
                    'position' => count($product_attributes) + 1,
                    'is_visible' => 1,
                    'is_variation' => 0,
                    'is_taxonomy' => 1
                );

                // Update the product attributes meta data
                update_post_meta($post_id, '_product_attributes', $product_attributes);
            }
        }

        // Maybe clear the cache/transient for the product
        wc_delete_product_transients($post_id);
    }
}

function auto_add_attributes_to_tshirt_import($product, $data) {
    $post_id = $product->get_id();

    // Check if the product is in "T-shirt" category
    if (in_array('t-shirt', $data['categories'], true)) {
        // You can call the original function here
        auto_add_attributes_to_tshirt($post_id, null);
    }
}
