
     var cont = 0;
     function register(){
          cont++;

     		if(cont==1){
     		 	$('.box').animate({height:'100px'}, 550);
     			$('.show').css('display','block');
     			$('#logintoregister').text('Register');
     			$('#buttonlogintoregister').text('xd');
     			$('#plogintoregister').text("Already registered?");
     			$('#textchange').text('Login');
     		}
     		else
     		{
     			$('.show').css('display','none');
     			$('.box').animate({height:'365px'}, 550);
     			$('#logintoregister').text('register');
     			$('#buttonlogintoregister').text('Login');
     			$('#plogintoregister').text('Not a member?');
     			$('#textchange').text('Sign up now!');
     			cont = 0;
     		}
     }
  // show/hide password
//    $(".toggle-password").click(function() {

//  $(this).toggleClass("material-icons");
  //var input = $($(this).attr("toggle"));
//  if (input.attr("type") == "password") {
//    input.attr("type", "text");
//  } else {
//    input.attr("type", "password");
//  }
//});

  $("body").vegas({
    delay: 7500,
    animation: 'random',
    slides: [
        { src: "img/1.jpg" },
        { src: "img/2.jpg" },
        { src: "img/3.jpg" }
     ],
});
