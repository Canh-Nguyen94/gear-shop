jQuery(document).ready(function ($) {

  // Listen for clicks on fit-style swatches using data-attribute_name
  $('select[data-attribute_name="attribute_pa_shirt-style"]').on("change", function () {
    var selectedStyle = $(this).val();
    var shirtColorDiv = 'div[data-attribute_name="attribute_pa_shirt-color"]';
    console.log("selected", selectedStyle);
    var colors = {
      black: 'black',
      white: 'white',
      royal_blue: 'royal-blue',
      purple: 'purple',
      navy_blue: 'navy-blue',
      cherry_red: 'cherry-red',
      light_pink: 'light-pink',
      safety_pink: 'safety-pink',
      red: 'red',
      sky: 'sky',
      gold: 'gold',
      military_green: 'military-green',
      ash_grey: 'ash-grey',
      dark_chocolate: 'dark-chocolate',
      carolina_blue: 'carolina-blue',
      charcoal: 'charcoal',
      deep_heather: 'deep-heather',
      forest_green: 'forest-green',
      green: 'green',
      light_blue: 'light-blue',
      maroon: 'maroon',
      sand: 'sand',
      orange: 'orange',
      brown: 'brown',
      sport_grey: 'sport-grey',
      cardinal: 'cardinal',
      dark_heather: 'dark-heather',
      heliconia: 'heliconia',
      sapphire: 'sapphire',
      banana: 'banana',
      heather: 'heather',
      kelly: 'kelly',
      pink: 'pink',
      yellow: 'yellow',
      raspberry: 'raspberry',
      butter: 'butter',
    };

    function getColorSelector(colorKey) {
      return '[data-value="' + colors[colorKey] + '"]';
    }

    // Hide all color swatches first
    $(shirtColorDiv + ' .ux-swatch').hide();

    // Determine which colors to hide based on the fit-style
    switch (selectedStyle) {
      case "unisex-t-shirt":
        var unisexColors = ['dark_heather', 'heliconia', 'sapphire', 'banana', 'heather', 'kelly', 'pink', 'yellow', 'raspberry', 'butter'];
        var unisexSelector = unisexColors.map(getColorSelector).join(',');
        $(shirtColorDiv + ' .ux-swatch:not(' + unisexSelector + ')').show();
        break;
      case "womens-t-shirt":
        var womensColors = ['black', 'white', 'dark_heather', 'heliconia', 'light_blue', 'light_pink', 'royal_blue', 'purple', 'red', 'navy_blue', 'sapphire', 'sport_grey'];
        var womensSelector = womensColors.map(getColorSelector).join(',');
        $(shirtColorDiv + ' .ux-swatch:not(' + womensSelector + ')').hide();
        break;
      case "baby-rib-bodysuit":
        var babyColors = ['black', 'white', 'banana', 'charcoal', 'heather', 'kelly', 'royal_blue', 'purple', 'red', 'navy_blue', 'pink', 'yellow'];
        var babySelector = babyColors.map(getColorSelector).join(',');
        $(shirtColorDiv + ' .ux-swatch:not(' + babySelector + ')').hide();
        break;
      case "youth-unisex-t-shirt":
        var youthColors = ['black', 'white', 'dark_heather', 'deep_heather', 'royal', 'navy', 'kelly', 'purple', 'red'];
        var youthSelector = youthColors.map(getColorSelector).join(',');
        $(shirtColorDiv + ' .ux-swatch:not(' + youthSelector + ')').hide();
        break;
      case "toddler-unisex-t-shirt":
        var toddlerColors = ['black', 'white', 'raspberry', 'butter', 'royal', 'light_blue', 'kelly', 'red', 'pink', 'orange'];
        var toddlerSelector = toddlerColors.map(getColorSelector).join(',');
        $(shirtColorDiv + ' .ux-swatch:not(' + toddlerSelector + ')').hide();
        break;
      case "unisex-tank-top":
        var tanktopColors = ['black', 'white', 'red', 'navy', 'royal', 'dark_heather', 'sport_grey'];
        var tanktopSelector = tanktopColors.map(getColorSelector).join(',');
        $(shirtColorDiv + ' .ux-swatch:not(' + tanktopSelector + ')').hide();
        break;
      case "unisex-long-sleeve-t-shirt":
        var longsleeveColors = ['black', 'white', 'ash', 'charcoal', 'dark_heather', 'forest_green', 'light_blue', 'sport_grey', 'light_pink', 'maroon', 'navy', 'red', 'royal'];
        var longsleeveSelector = longsleeveColors.map(getColorSelector).join(',');
        $(shirtColorDiv + ' .ux-swatch:not(' + longsleeveSelector + ')').hide();
        break;
      case "unisex-crewneck-sweatshirt":
        var crewneckColors = ['black', 'white', 'ash', 'charcoal', 'dark_heather', 'forest_green', 'light_blue', 'sport_grey', 'sand', 'light_pink', 'maroon', 'navy', 'red', 'royal'];
        var crewneckSelector = crewneckColors.map(getColorSelector).join(',');
        $(shirtColorDiv + ' .ux-swatch:not(' + crewneckSelector + ')').hide();
        break;
      case "unisex-hoodie":
        var hoodieColors = ['black', 'white', 'ash', 'charcoal', 'dark_heather', 'forest_green', 'light_blue', 'sport_grey', 'sand', 'light_pink', 'maroon', 'navy', 'red', 'royal'];
        var hoodieSelector = hoodieColors.map(getColorSelector).join(',');
        $(shirtColorDiv + ' .ux-swatch:not(' + hoodieSelector + ')').hide();
        break;

      default:
        // Any default behavior if needed
        break;
    }
  });
});
