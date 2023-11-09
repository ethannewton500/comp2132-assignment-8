const buttonStart = $('#startButton');
const buttonStop = $('#stopButton');
const buttonReverse = $('#reverseButton');

const bikeImage = $('#bikeImage');

const bikeImageSrcStart = "product-images/bike-";
const bikeImageSrcEnd = ".jpg";

let counter = 1;

let animationId;
let isAnimating = false;
let isAnimatingReverse = false;
let timeoutId;
let timeoutIdReverse;

let clicked = false;

document.addEventListener('DOMContentLoaded', function() {
  var delayTime = 3000;

  function showPopup() {
    if (!clicked) {
      $('#popup').css('display', 'flex');
    }
  }

  setTimeout(showPopup, delayTime);


  document.getElementById('startButton').addEventListener('click', function() {
    clicked = true;
    $('#popup').css('display', 'none');
  });

  document.getElementById('reverseButton').addEventListener('click', function() {
    clicked = true;
    $('#popup').css('display', 'none');
  });
});

$('#closeButton').on('click', function() {
  $('#popup').css('display', 'none');
});

function animateBike() {
  counter++;
  if (counter > 34)
  {
    counter = 1;
  }
  bikeImage.attr('src', bikeImageSrcStart + counter + bikeImageSrcEnd);
  timeoutId = setTimeout(() => {
    animationId = requestAnimationFrame(animateBike);
  }, 100);
}

function animateBikeReverse() {
  counter--;
  if (counter < 1)
  {
    counter = 34;
  }
  bikeImage.attr('src', bikeImageSrcStart + counter + bikeImageSrcEnd);
  timeoutIdReverse = setTimeout(() => {
    animationId = requestAnimationFrame(animateBikeReverse);
  }, 100);
}

buttonStart.on('click', function() {
  if (isAnimatingReverse) {
    isAnimatingReverse = false;
    cancelAnimationFrame(animationId);
    clearTimeout(timeoutIdReverse);
  }
  if (!isAnimating) {
    isAnimating = true;
    animateBike();
  }
});

buttonReverse.on('click', function() {
  if (isAnimating) {
    isAnimating = false;
    cancelAnimationFrame(animationId);
    clearTimeout(timeoutId);
  }
  if (!isAnimatingReverse) {
    isAnimatingReverse = true;
    animateBikeReverse();
  }
});

buttonStop.on('click', function() {
  if (isAnimating) {
    isAnimating = false;
    cancelAnimationFrame(animationId);
    clearTimeout(timeoutId);
  }
  if (isAnimatingReverse) {
    isAnimatingReverse = false;
    cancelAnimationFrame(animationId);
    clearTimeout(timeoutIdReverse);
  }
});
