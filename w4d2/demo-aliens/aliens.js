$(document).ready(function() {
  $('.alien-btn').on('click', function(event) {
    const $parentSection = $(event.target).closest('section');
    const $talkP = $parentSection.find('.talk');

    $talkP.append('💬');
  });
}); // document ready
