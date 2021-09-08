$(document).ready(function () {
  $("#autoWidth,#autoWidthLastest").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth,#autoWidthLastest").removeClass("cS-hidden");
    },
  });
});
