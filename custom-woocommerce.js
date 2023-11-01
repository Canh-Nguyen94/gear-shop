jQuery(document).ready(function ($) {

  // Listen for clicks on fit-style swatches using data-attribute_name
  $('select[name="attribute_pa_shirt-style"]').on("change", function () {
    var selectedStyle = $(this).val();
    var shirtColorDiv = 'div[data-attribute_name="attribute_pa_shirt-color"]';

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
      ash: 'ash'
    };

    function getColorSelector(colorKey) {
      return '[data-value="' + colors[colorKey] + '"]';
    }

    function checkAndSetSelectedColor(validColors, defaultColor = 'black') {
      // Check if the current selected color is in the validColors array
      var currentSelectedColor = $('.ux-swatches .ux-swatch.selected').attr('data-value');

      if (!validColors.includes(currentSelectedColor)) {
        // If not, remove the selected class
        $('.ux-swatches .ux-swatch.selected').removeClass('selected');

        // Add the selected class to the default color
        $('.ux-swatches div[data-value="' + defaultColor + '"]').addClass("selected");
        var shirtColorSelect = 'select[data-attribute_name="attribute_pa_shirt-color"]';
        $(shirtColorSelect).val('black').trigger('change');
      }
    }

    // Determine which colors to hide based on the fit-style
    switch (selectedStyle) {
      case "unisex-t-shirt":
        var unisexColors = ['black', 'white', 'royal_blue', 'purple', 'navy_blue', 'cherry_red', 'light_pink', 'safety_pink', 'red', 'sky', 'gold', 'military_green', 'ash_grey', 'dark_chocolate', 'carolina_blue', 'charcoal', 'deep_heather', 'forest_green', 'green', 'light_blue', 'maroon', 'sand', 'orange', 'brown', 'sport_grey', 'cardinal'];
        var unisexSelector = unisexColors.map(getColorSelector).join(',');
        $(shirtColorDiv + ' .ux-swatch').show();
        $(shirtColorDiv + ' .ux-swatch:not(' + unisexSelector + ')').hide();
        checkAndSetSelectedColor(unisexColors);
        break;
      case "womens-t-shirt":
        var womensColors = ['black', 'white', 'dark_heather', 'heliconia', 'light_blue', 'light_pink', 'royal_blue', 'purple', 'red', 'navy_blue', 'sapphire', 'sport_grey'];
        var womensSelector = womensColors.map(getColorSelector).join(',');
        $(shirtColorDiv + ' .ux-swatch').show();
        $(shirtColorDiv + ' .ux-swatch:not(' + womensSelector + ')').hide();
        checkAndSetSelectedColor(womensColors);
        break;
      case "baby-rib-bodysuit":
        var babyColors = ['black', 'white', 'banana', 'charcoal', 'heather', 'kelly', 'royal_blue', 'purple', 'red', 'navy_blue', 'pink', 'yellow'];
        var babySelector = babyColors.map(getColorSelector).join(',');
        $(shirtColorDiv + ' .ux-swatch').show();
        $(shirtColorDiv + ' .ux-swatch:not(' + babySelector + ')').hide();
        checkAndSetSelectedColor(babyColors);
        break;
      case "youth-unisex-t-shirt":
        var youthColors = ['black', 'white', 'dark_heather', 'deep_heather', 'royal_blue', 'navy_blue', 'kelly', 'purple', 'red'];
        var youthSelector = youthColors.map(getColorSelector).join(',');
        $(shirtColorDiv + ' .ux-swatch').show();
        $(shirtColorDiv + ' .ux-swatch:not(' + youthSelector + ')').hide();
        checkAndSetSelectedColor(youthColors);
        break;
      case "toddler-unisex-t-shirt":
        var toddlerColors = ['black', 'white', 'raspberry', 'butter', 'royal_blue', 'light_blue', 'kelly', 'red', 'pink', 'orange'];
        var toddlerSelector = toddlerColors.map(getColorSelector).join(',');
        $(shirtColorDiv + ' .ux-swatch').show();
        $(shirtColorDiv + ' .ux-swatch:not(' + toddlerSelector + ')').hide();
        checkAndSetSelectedColor(toddlerColors);
        break;
      case "unisex-tank-top":
        var tanktopColors = ['black', 'white', 'red', 'navy_blue', 'royal_blue', 'dark_heather', 'sport_grey'];
        var tanktopSelector = tanktopColors.map(getColorSelector).join(',');
        $(shirtColorDiv + ' .ux-swatch').show();
        $(shirtColorDiv + ' .ux-swatch:not(' + tanktopSelector + ')').hide();
        checkAndSetSelectedColor(tanktopColors);
        break;
      case "unisex-long-sleeve-t-shirt":
        var longsleeveColors = ['black', 'white', 'ash', 'charcoal', 'dark_heather', 'forest_green', 'light_blue', 'sport_grey', 'light_pink', 'maroon', 'navy_blue', 'red', 'royal_blue'];
        var longsleeveSelector = longsleeveColors.map(getColorSelector).join(',');
        $(shirtColorDiv + ' .ux-swatch').show();
        $(shirtColorDiv + ' .ux-swatch:not(' + longsleeveSelector + ')').hide();
        checkAndSetSelectedColor(longsleeveColors);
        break;
      case "unisex-crewneck-sweatshirt":
        var crewneckColors = ['black', 'white', 'ash', 'charcoal', 'dark_heather', 'forest_green', 'light_blue', 'sport_grey', 'sand', 'light_pink', 'maroon', 'navy_blue', 'red', 'royal_blue'];
        var crewneckSelector = crewneckColors.map(getColorSelector).join(',');
        $(shirtColorDiv + ' .ux-swatch').show();
        $(shirtColorDiv + ' .ux-swatch:not(' + crewneckSelector + ')').hide();
        checkAndSetSelectedColor(crewneckColors)
        break;
      case "unisex-hoodie":
        var hoodieColors = ['black', 'white', 'ash', 'charcoal', 'dark_heather', 'forest_green', 'light_blue', 'sport_grey', 'sand', 'light_pink', 'maroon', 'navy_blue', 'red', 'royal_blue'];
        var hoodieSelector = hoodieColors.map(getColorSelector).join(',');
        $(shirtColorDiv + ' .ux-swatch').show();
        $(shirtColorDiv + ' .ux-swatch:not(' + hoodieSelector + ')').hide();
        checkAndSetSelectedColor(hoodieColors);
        break;

      default:
        var unisexColors = ['black', 'white', 'royal_blue', 'purple', 'navy_blue', 'cherry_red', 'light_pink', 'safety_pink', 'red', 'sky', 'gold', 'military_green', 'ash_grey', 'dark_chocolate', 'carolina_blue', 'charcoal', 'deep_heather', 'forest_green', 'green', 'light_blue', 'maroon', 'sand', 'orange', 'brown', 'sport_grey', 'cardinal'];
        var unisexSelector = unisexColors.map(getColorSelector).join(',');
        $(shirtColorDiv + ' .ux-swatch').show();
        $(shirtColorDiv + ' .ux-swatch:not(' + unisexSelector + ')').hide();
        checkAndSetSelectedColor(unisexColors);
        break;
    }
  });
});
