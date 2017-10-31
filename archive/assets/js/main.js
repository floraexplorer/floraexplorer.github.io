$(document).ready(function() {

  // Add jQuery here

  $('.nav_all').click(function(event) {
    $('.item'). removeClass('hide');
    $('.item'). removeClass('show');

    $(this).addClass('nav_active');
    $('.nav_same').removeClass('nav_active');
    $('.nav_ft').removeClass('nav_active');
    $('.nav_gift').removeClass('nav_active');
    $('.nav_under').removeClass('nav_active');
    $('.nav_sass').removeClass('nav_active');
  });

  $('.nav_sass').click(function(event) {
    $('.item').removeClass('show');
    $('.item').addClass('hide');

    $('.item.sass').removeClass('hide');
    $('.item.sass').addClass('show');

    $(this).addClass('nav_active');
    $('.nav_same').removeClass('nav_active');
    $('.nav_ft').removeClass('nav_active');
    $('.nav_gift').removeClass('nav_active');
    $('.nav_under').removeClass('nav_active');
    $('.nav_all').removeClass('nav_active');
  });

  $('.nav_ft').click(function(event) {
    $('.item').removeClass('show');
    $('.item').addClass('hide');

    $('.item.ft').removeClass('hide');
    $('.item.ft').addClass('show');

    $(this).addClass('nav_active');
    $('.nav_all').removeClass('nav_active');
    $('.nav_same').removeClass('nav_active');
    $('.nav_gift').removeClass('nav_active');
    $('.nav_under').removeClass('nav_active');
    $('.nav_sass').removeClass('nav_active');
  });

  $('.nav_gift').click(function(event) {
    $('.item').removeClass('show');
    $('.item').addClass('hide');

    $('.item.gift').removeClass('hide');
    $('.item.gift').addClass('show');

    $(this).addClass('nav_active');
    $('.nav_all').removeClass('nav_active');
    $('.nav_same').removeClass('nav_active');
    $('.nav_ft').removeClass('nav_active');
    $('.nav_under').removeClass('nav_active');
    $('.nav_sass').removeClass('nav_active');
  });

  $('.nav_under').click(function(event) {
    $('.item').removeClass('show');
    $('.item').addClass('hide');

    $('.item.under').removeClass('hide');
    $('.item.under').addClass('show');

    $(this).addClass('nav_active');
    $('.nav_all').removeClass('nav_active');
    $('.nav_same').removeClass('nav_active');
    $('.nav_ft').removeClass('nav_active');
    $('.nav_gift').removeClass('nav_active');
    $('.nav_sass').removeClass('nav_active');
  });

  $('.nav_same').click(function(event) {
    $('.item').removeClass('show');
    $('.item').addClass('hide');

    $('.item.same').removeClass('hide');
    $('.item.same').addClass('show');

    $(this).addClass('nav_active');
    $('.nav_ft').removeClass('nav_active');
    $('.nav_gift').removeClass('nav_active');
    $('.nav_under').removeClass('nav_active');
    $('.nav_all').removeClass('nav_active');
    $('.nav_sass').removeClass('nav_active');
  });

  $('.nav_zoom').click (function(event){
    $('.item').addClass('zoom');

    $(this).addClass('nav_active');
    $('.nav_small').removeClass('nav_active');

    $('.title').addClass('tZoom');
    $('.title').removeClass('tSmall');

    $('.title').html('I am <tP>every</tP> woman.');
  });


  $('.nav_small').click (function(event){
    $('.item').removeClass('zoom');

    $(this).addClass('nav_active');
    $('.nav_zoom').removeClass('nav_active');

    $('.title').addClass('tSmall');
    $('.title').removeClass('tZoom');

    $('.title').text('I am all woman.');
  });

  $(function(){
	var fadeDelay = 500;
	var fadeDuration = 3000;
    $('.container').click(function(e){
		var div = $('<div class="image-wrapper">')
			.css({
				"left": e.pageX + 'px',
				"top": e.pageY + 'px'
			})
			.append($('<img src="assets/images/file1.png" alt="myimage" />'))
			.appendTo(document.body);

		setTimeout(function() {
			div.addClass('top');
			setTimeout(function() { div.remove(); }, fadeDuration);
		}, fadeDelay);
    });
});

  });
