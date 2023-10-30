jQuery(document).ready(function ($) {
  // Loop through each attribute container
  $(".ux-swatches").each(function () {
    // Select the first label/swatch of the current attribute
    var firstSwatch = $(this).find(".ux-swatch").first();
    firstSwatch.addClass("selected");
  });
  $(".thwvsf-wrapper-ul").each(function () {
    // Select the first label/swatch of the current attribute
    var firstSwatch = $(this).find(".thwvsf-image-li").first();
    firstSwatch.addClass("selected");
  });
});
