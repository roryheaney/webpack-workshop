jQuery(function($) {
  addBorder();
  addSubtitle();

  var imgInstance;

  $('.select-image').click(function(ev) {
    ev.preventDefault();
    var img = $('img', this)[0];

    replaceImage(img);
  });

  $('.edit-subtitle').on('keyup', function(ev) {
    updateSubtitle(ev.target.value);
  });
});
