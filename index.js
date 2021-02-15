// Js only for drag the articles
$(function() {
	$( "article" ).draggable();
});
// Js only for drag the articles
$(function() {
	$( "article.app" ).draggable();
});


$(document).ready(function() {
    $('#closewin').click(function() {
      $('#welcome').animate({
        height: "toggle"
      })
    });
  });

  $(document).ready(function() {
    $('#closewin2').click(function() {
      $('#help').animate({
        height: "toggle"
      })
    });
  });

  $(document).ready(function() {
    $('#closewin3').click(function() {
      $('#help').animate({
        height: "toggle"
      })
    });
  });

  $(document).ready(function() {
    $('#finder').click(function() {
      $('#help').animate({
        height: "toggle"
      })
    });
  });

  $(document).ready(function() {
    $('#browser').click(function() {
      $('#browserhub').animate({
        height: "toggle"
      })
    });
  });

