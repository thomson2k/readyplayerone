// animated bg
function displayNextImage() {
         x = (x === images.length - 1) ? 0 : x + 1;
         document.getElementById("img").src = images[x];
     }
     function changeImage() {
         setInterval(displayNextImage, 10000);
     }
     var images = [], x = -1;
     images[0] = "paul.jpg";
     images[1] = "rename.jpg";
     images[2] = "asd.jpg";
//
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
