  //
  // Write code to make the number on the DOM countdown each second.
  // Only one number should be displayed on the DOM at a time.


var sec = 10
var timer = setInterval(function() {
   $('.count span').text(sec--);
   if (sec == -1) {
      $('.count').fadeOut('fast');
        $('html').css({'background-image': "url('giphy-1.gif')"});
        $('h1').text('Boom goes the dynomite!!!')
      clearInterval(timer);
   }
}, 1000);
