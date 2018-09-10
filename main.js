

function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}


// DOM Elements
var vid = document.getElementById("hero-video");
var brand = document.getElementById("brand");
var subBrand = document.getElementById("sub-brand-text");
var heroDownButton = document.getElementById("hero-down-button");

// Show logo on video load
vid.oncanplay = function() {
    showSubBrand();
    setTimeout(showBrand, 1000);
    setTimeout(showDownButton, 2000);
};

function showBrand() {
  brand.classList.add("h1-appear");
}

function showSubBrand() {
  subBrand.classList.add("p-appear");
}

function showDownButton() {
  heroDownButton.classList.add("img-appear");
}

// Smooth scrolling
(function() {
  "use strict";
  // Feature Test
  if (
    "querySelector" in document &&
    "addEventListener" in window &&
    Array.prototype.forEach
  ) {
    // Function to animate the scroll
    var smoothScroll = function(anchor, duration) {
      // Calculate how far and how fast to scroll
      var startLocation = window.pageYOffset;
      var endLocation = anchor.offsetTop;
      var distance = endLocation - startLocation;
      var increments = distance / (duration / 16);
      var stopAnimation;

      // Scroll the page by an increment, and check if it's time to stop
      var animateScroll = function() {
        window.scrollBy(0, increments);
        stopAnimation();
      };

      // If scrolling down
      if (increments >= 0) {
        // Stop animation when you reach the anchor OR the bottom of the page
        stopAnimation = function() {
          var travelled = window.pageYOffset;
          if (
            travelled >= endLocation - increments ||
            window.innerHeight + travelled >= document.body.offsetHeight
          ) {
            clearInterval(runAnimation);
          }
        };
      } else {
        // If scrolling up
        // Stop animation when you reach the anchor OR the top of the page
        stopAnimation = function() {
          var travelled = window.pageYOffset;
          if (travelled <= (endLocation || 0)) {
            clearInterval(runAnimation);
          }
        };
      }

      // Loop the animation function
      var runAnimation = setInterval(animateScroll, 16);
    };

    // Define smooth scroll links
    var scrollToggle = document.querySelectorAll(".down-button");

    // For each smooth scroll link
    [].forEach.call(scrollToggle, function(toggle) {
      // When the smooth scroll link is clicked
      toggle.addEventListener(
        "click",
        function(e) {
          // Prevent the default link behavior
          e.preventDefault();

          // Get anchor link and calculate distance from the top
          var dataID = toggle.getAttribute("href");
          var dataTarget = document.querySelector(dataID);
          var dataSpeed = toggle.getAttribute("data-speed");

          // If the anchor exists
          if (dataTarget) {
            // Scroll to the anchor
            smoothScroll(dataTarget, dataSpeed || 500);
          }
        },
        false
      );
    });
  }
})();


//FØRSTE BILLEDE FADE

window.addEventListener("scroll",function(){
  var bil = document.getElementById('bilet');
  var wrap = document.getElementById('wrapOne');
  var x = wrap.offsetHeight;
  var y = wrap.offsetTop;
  var z =  x + y;
  var scroll = window.scrollY / 1000;

  console.log(scroll);
  if((window.pageYOffset > y) && (window.pageYOffset < (y + x - 500 ))){
    window.addEventListener("scroll",function(){
    $('#bilet').css('opacity', '' + scroll - 0.8);
      }, false);
  }

},false);


//BILLEDE OP
window.addEventListener("scroll",function(){
  var bil = document.getElementById('bilet');
  var wrap = document.getElementById('wrapOne');
  var x = wrap.offsetHeight;
  var y = wrap.offsetTop;
  var z =  x + y;

  if(window.pageYOffset > (y + x -200)){
   bil.classList.add('flyv');
   //console.log('VIRKER')
  }
  else {
    bil.classList.remove('flyv');
  }

},false);

//FØRSTE FADE

window.addEventListener("scroll",function(){
  var target = document.getElementById('nedet');
  var gulDiv = document.getElementById('nedwrap');
  var x = gulDiv.offsetHeight;
  var y = gulDiv.offsetTop;
  var z =  x + y;

  if((window.pageYOffset > y) && (window.pageYOffset < (y + x - 1200 ))){
   target.classList.add('rul-ind');
   //console.log('VIRKER')
  }
  else {
    target.classList.remove('rul-ind');
  }
},false);

//ANDEN SEKTION FADE

window.addEventListener("scroll",function(){
  var target = document.getElementById('rul1');
  var gulDiv = document.getElementById('second');
  var x = gulDiv.offsetHeight;
  var y = gulDiv.offsetTop;
  var z =  x + y;

  if((window.pageYOffset > y) && (window.pageYOffset < (y + x - 500 ))){
   target.classList.add('rul-ind');
   //console.log('VIRKER')
  }
  else {
    target.classList.remove('rul-ind');
  }
},false);

window.addEventListener("scroll",function(){
  var target = document.getElementById('rul2');
  var gulDiv = document.getElementById('second');
  var x = gulDiv.offsetHeight;
  var y = gulDiv.offsetTop;
  var z =  x + y;

  if((window.pageYOffset > y) && (window.pageYOffset < (y + x - 500))){
   target.classList.add('rul-ind');
   //console.log('VIRKER')
  }
  else {
    target.classList.remove('rul-ind');
  }
},false);

//OPSLAG fade

window.addEventListener("scroll",function(){
  var target = document.getElementById('ruller');
  var gulDiv = document.getElementById('opslag');
  var x = gulDiv.offsetHeight;
  var y = gulDiv.offsetTop;
  var z =  x + y;

  if((window.pageYOffset > y) && (window.pageYOffset < (y + x - 500 ))){
   target.classList.add('rul-ind');
   //console.log('VIRKER')
  }
  else {
    target.classList.remove('rul-ind');
  }
},false);

//LYD FADE

window.addEventListener("scroll",function(){
  var target = document.getElementById('lydel');
  var gulDiv = document.getElementById('lyd');
  var x = gulDiv.offsetHeight;
  var y = gulDiv.offsetTop;
  var z =  x + y;

  if((window.pageYOffset > y) && (window.pageYOffset < (y + x -200))){
   target.classList.add('rul-ind');
   //console.log('VIRKER')
  }
  else {
    target.classList.remove('rul-ind');
  }
},false);


//TREDJE SECTION FADE
window.addEventListener("scroll",function(){
  var target = document.getElementById('tre');
  var gulDiv = document.getElementById('third');
  var x = gulDiv.offsetHeight;
  var y = gulDiv.offsetTop;
  var z =  x + y;

  if((window.pageYOffset > y) && (window.pageYOffset < (y + x - 500 ))){
   target.classList.add('rul-ind');
   //console.log('VIRKER')
  }
  else {
    target.classList.remove('rul-ind');
  }
},false);

//TREDJE SECTION OP

window.addEventListener("scroll",function(){
  var bil = document.getElementById('tre');
  var wrap = document.getElementById('thirdwrap');
  var x = wrap.offsetHeight;
  var y = wrap.offsetTop;
  var z =  x + y;

  if(window.pageYOffset > (y + x - 500)){
   bil.classList.add('flyv');
   //console.log('VIRKER')
  }
  else {
    bil.classList.remove('flyv');
  }

},false);

//TREDJE SECTION - B FADE

window.addEventListener("scroll",function(){
  var target = document.getElementById('btre');
  var gulDiv = document.getElementById('btrewrap');
  var x = gulDiv.offsetHeight;
  var y = gulDiv.offsetTop;
  var z =  x + y;

  if((window.pageYOffset > y) && (window.pageYOffset < (y + x  ))){
   target.classList.add('rul-ind');
   //console.log('VIRKER')
  }
  else {
    target.classList.remove('rul-ind');
  }
},false);

//LAG FADER

//LAG1 FADE
window.addEventListener("scroll",function(){
  var target = document.getElementById('lag1');
  var gulDiv = document.getElementById('fourth');
  var x = gulDiv.offsetHeight;
  var y = gulDiv.offsetTop;
  var z =  x + y;

  if((window.pageYOffset > y) && (window.pageYOffset < (y + x - 500 ))){
   target.classList.add('rul-ind');
   //console.log('VIRKER')
  }
  else {
    target.classList.remove('rul-ind');
  }
},false);

//LAG2 FADE
window.addEventListener("scroll",function(){
  var target = document.getElementById('lag2');
  var gulDiv = document.getElementById('bfourth');
  var x = gulDiv.offsetHeight;
  var y = gulDiv.offsetTop;
  var z =  x + y;

  if((window.pageYOffset > y) && (window.pageYOffset < (y + x - 500 ))){
   target.classList.add('rul-ind');
   //console.log('VIRKER')
  }
  else {
    target.classList.remove('rul-ind');
  }
},false);

//LAG FLY

window.addEventListener("scroll",function(){
  var bil = document.getElementById('lag1');
  var wrap = document.getElementById('fourth');
  var x = wrap.offsetHeight;
  var y = wrap.offsetTop;
  var z =  x + y;

  if(window.pageYOffset > (y + x - 500)){
   bil.classList.add('flyv');
   //console.log('VIRKER')
  }
  else {
    bil.classList.remove('flyv');
  }

},false);

window.addEventListener("scroll",function(){
  var bil = document.getElementById('lag2');
  var wrap = document.getElementById('fourth');
  var x = wrap.offsetHeight;
  var y = wrap.offsetTop;
  var z =  x + y;

  if(window.pageYOffset > (y + x - 500)){
   bil.classList.add('flyv');
   //console.log('VIRKER')
  }
  else {
    bil.classList.remove('flyv');
  }

},false);

//FEMTE SECTION

window.addEventListener("scroll",function(){
  var target = document.getElementById('wrapfive');
  var gulDiv = document.getElementById('fith');
  var x = gulDiv.offsetHeight;
  var y = gulDiv.offsetTop;
  var z =  x + y;

  if((window.pageYOffset > y) && (window.pageYOffset < (y + x  ))){
   target.classList.add('rul-ind');
   //console.log('VIRKER')
  }
  else {
    target.classList.remove('rul-ind');
  }
},false);


//VIDEO FADE

window.addEventListener("scroll",function(){
  var target = document.getElementById('video2');
  var gulDiv = document.getElementById('video-wrapper2');
  var x = gulDiv.offsetHeight;
  var y = gulDiv.offsetTop;
  var z =  x + y;

  if((window.pageYOffset > y) && (window.pageYOffset < (y + x - 500 ))){
   target.classList.add('rul-ind');
   //console.log('VIRKER')
  }
  else {
    target.classList.remove('rul-ind');
    target.pause();
  }
},false);




/*
window.addEventListener("scroll", function() {
	var scroll = window.scrollY;
	$('#rul1').css('margin-left', '' + scroll + 'px');
    if (scroll==0)
      $('#rul1').css('margin-left', '');
    }, false);*/

    /*

 function rulTo() {
  	var scroll = window.scrollY;
  	$('#rul1').css('margin-left', '' - scroll + 'px');
      if (scroll==0)
        $('#rul1').css('margin-left', '');
      };

      rulEt();
      rulTo();

      window.addEventListener('scroll', rulEt);
      window.addEventListener('scroll', rulTo);


      //Detect hvor vi er

      $(window).scroll(function() {
        var hT = $('#second').offset().top,
            hH = $('#second').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT- wH)){
            $('#second').removeClass('rul1');

            console.log(hT);


        }
        // eller brug
        else if (wS < hT){
            $('#second').addClass('rul1');
        }

      });*/
