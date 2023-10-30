jQuery(document).ready(function ($) {
  // Update the order total when the "Add Donation" button is clicked
  $("#add_donation_button").on("click", function () {
    var donationAmount = parseFloat($("#donation_amount").val()) || 0;

    // Send the donation amount via AJAX to update the cart
    $.ajax({
      type: "POST",
      url: donationData.ajaxUrl,
      data: {
        action: "update_donation_amount",
        donation_amount: donationAmount,
      },
      success: function (response) {
        // Update the displayed total with the new value
        $(".order-total .amount").text(response.new_total);
      },
    });
  });

  // Reset the donation amount and order total when the "Reset Total" button is clicked
  $("#reset_total_button").on("click", function () {
    // Clear the donation input field
    $("#donation_amount").val("");

    // Send a donation amount of 0 via AJAX to reset the cart
    $.ajax({
      type: "POST",
      url: donationData.ajaxUrl,
      data: {
        action: "update_donation_amount",
        donation_amount: 0,
      },
      success: function (response) {
        // Update the displayed total with the new value
        $(".order-total .amount").text(response.new_total);
      },
    });
  });
});
