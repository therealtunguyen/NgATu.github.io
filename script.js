$(document).ready(function () {
  $('.contact').click(function () {
    $('.layer').show();
    $('form').slideDown('fast');
  });

  $('.cancel').click(function () {
    $('.layer').hide();
    $('form').slideUp('fast');
  });
});
